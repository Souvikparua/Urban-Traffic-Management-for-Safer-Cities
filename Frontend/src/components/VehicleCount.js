import axios from "axios";
import React from "react";
import "./Button/StopScript.css";
import "./Button/StartScript.css";

const VehicleCount = () => {
  const runScript = () => {
    axios
      .post("http://localhost:5000/run-script")
      .then((response) => {
        console.log(response.data.message);
        // Handle success message
      })
      .catch((error) => {
        console.error(error);
        // Handle error message
      });
  };

  const stopScript = () => {
    axios
      .post("http://localhost:5000/stop-script")
      .then((response) => {
        console.log(response.data.message);
        // Handle success message
      })
      .catch((error) => {
        console.error(error);
        // Handle error message
      });
  };

  return (
    <div className="h-full">
      <div className="text-4xl font-bold text-center mt-32">
        Vehicle Count Simulation
      </div>
      <div className="flex mt-20">
        <div className="flex mx-auto my-auto">
          <button onClick={runScript} className="mx-20 button-50" role="button">
            Run
          </button>
          <button onClick={stopScript} className="mx-20 button-49" role="button">
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCount;
