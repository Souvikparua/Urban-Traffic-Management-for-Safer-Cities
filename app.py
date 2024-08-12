from flask import Flask, json, request, jsonify
import os
import urllib.request
from werkzeug.utils import secure_filename
from flask_cors import CORS 
import subprocess
import psutil
 
app = Flask(__name__)
CORS(app, supports_credentials=True)
 
app.secret_key = "caircocoders-ednalan"
  
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
  
ALLOWED_EXTENSIONS = set(['mp4']) # can add support for other file types later

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
  
@app.route('/')
def main():
    return 'Homepage'
  
@app.route('/upload', methods=['POST'])
def upload_file():
    # check if the post request has the file part
    if 'files[]' not in request.files:
        resp = jsonify({
            "message": 'No file part in the request',
            "status": 'failed'
        })
        resp.status_code = 400
        return resp
  
    files = request.files.getlist('files[]')
      
    errors = {}
    success = False
      
    for file in files:      
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            success = True
        else:
            resp = jsonify({
                "message": 'File type is not allowed',
                "status": 'failed'
            })
            return resp
         
    if success and errors:
        errors['message'] = 'File(s) successfully uploaded'
        errors['status'] = 'failed'
        resp = jsonify(errors)
        resp.status_code = 500
        return resp
    if success:
        resp = jsonify({
            "message": 'Files successfully uploaded',
            "status": 'successs'
        })
        resp.status_code = 201
        return resp
    else:
        resp = jsonify(errors)
        resp.status_code = 500
        return resp
    
@app.route('/run-script', methods=['POST'])
def run_script():
    try:
        subprocess.run(['python3', 'vehicles.py'], check=True)
        return jsonify({'message': 'Script executed successfully'})
    except subprocess.CalledProcessError as e:
        return jsonify({'message': 'Video Not Found or Script already running'})

@app.route('/run-script-simulation', methods=['POST'])
def run_script_simulation():
    try:
        subprocess.run(['python3', 'simulation.py'], check=True)
        return jsonify({'message': 'Script executed successfully'})
    except subprocess.CalledProcessError as e:
        return jsonify({'message': 'Video Not Found or Script already running'})

@app.route('/stop-script', methods=['POST'])
def stop_script():
    for proc in psutil.process_iter():
        if "vehicles.py" in proc.cmdline():
            proc.terminate()
            return jsonify({'message': 'Script stopped successfully'})
    
    return jsonify({'message': 'Script not found or already stopped'})


if __name__ == '__main__':
    app.run(debug=True)