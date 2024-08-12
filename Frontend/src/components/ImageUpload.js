import React from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./Button/StartScript.css";

export default function ImageUpload() {
  const [image, setImage] = React.useState("");
  const [responseMsg, setResponseMsg] = React.useState({
    status: "",
    message: "",
    error: "",
  });

  const navigate = useNavigate(); // Initialize navigate hook for redirection

  // image onchange hander
  const handleChange = (e) => {
    const imagesArray = [];

    for (let i = 0; i < e.target.files.length; i++) {
      fileValidate(e.target.files[i]);
      imagesArray.push(e.target.files[i]);
    }
    setImage(imagesArray);
  };

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let i = 0; i < image.length; i++) {
      data.append("files[]", image[i]);
    }

    axios
      .post("http://127.0.0.1:5000/upload", data)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          setResponseMsg({
            status: response.data.status,
            message: response.data.message,
          });
          setTimeout(() => {
            setImage("");
            setResponseMsg("");
          }, 100000);

          document.querySelector("#imageForm").reset();
          alert("Successfully Uploaded");
          toast.success("Successfully Uploaded");
          navigate("/vehiclecount"); // Redirect to /vehiclecount after successful upload
        }
      })
      .catch((error) => {
        console.error(error);
        if (error.response) {
          console.log(error.response);
          if (error.response.status === 401) {
            alert("Invalid credentials");
          }
        }
      });
  };

  // file validation
  const fileValidate = (file) => {
    if (file.type === "image/mp4") {
      setResponseMsg({
        error: "",
      });
      return true;
    } else {
      setResponseMsg({
        error: "",
      });
      return false;
    }
  };

  return (
    <div className="flex h-full my-24">
      <div className="flex mx-auto">
        <div className="col-lg-12">
          <form
            onSubmit={submitHandler}
            encType="multipart/form-data"
            id="imageForm"
          >
            <div className="flex-col">
              {responseMsg.status === "successs" ? (
                <div className="">{responseMsg.message}</div>
              ) : responseMsg.status === "failed" ? (
                <div className="">{responseMsg.message}</div>
              ) : (
                ""
              )}
              <div className="flex">
                <h4 className="flex text-center m-4 text-4xl font-semibold">
                  Kindly Upload the video
                </h4>
              </div>

              <div className="">
                <div className="">
                  <input
                    type="file"
                    name="image"
                    multiple
                    onChange={handleChange}
                    className="my-4 text-xl font-semibold"
                  />
                  <span className="">{responseMsg.error}</span>
                </div>
              </div>

              <div className="">
                <button
                  type="submit"
                  class="mx-20 my-4 button-50"
                  role="button"
                >
                  Run
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
