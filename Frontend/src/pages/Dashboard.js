import React from "react";
import CoolButton from "../components/Button/CoolButton";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="h-full my-32">
      <div className="my-12">
        <Link to="/upload-video">
          <CoolButton text={"Vehicle Count"} />
        </Link>
      </div>
      <div>
        <Link to="/simulator">
          <CoolButton text={"Simulator"} />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
