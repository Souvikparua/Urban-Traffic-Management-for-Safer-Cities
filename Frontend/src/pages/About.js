import React from "react";
import frameImage from "../assets/frame-about.png";
import image from "../assets/Pic-about.png";
import OurVision from "../assets/OurVision.png";
import OurMission from "../assets/OurMission.png";
import { Link } from "react-router-dom";

const About = ({ isLoggedIn }) => {
  return (
    <div className="flex-col mx-12 my-6">
      <div className="flex mt-10 mb-20 mx-6">
        <div className="w-11/12 h-full my-auto">
          <div className="text-3xl font-bold">How ClearPath Works?</div>
          <div className="text-xl font-medium mr-10 mt-6">
            ClearPath is a technology that aims to revolutionize emergency
            response systems and optimize urban traffic management.Our Dynamic
            Traffic Signaling system intelligently reallocates signal times
            based on traffic density, redistributing time to lanes where
            congestion is highest. Meanwhile, our Emergency Vehicle Detection
            technology accurately detects and prioritizes the passage of
            emergency vehicles by reallocating time to lanes wherever an
            emergency vehicle is detected. By seamlessly integrating these
            solutions, ClearPath ensures efficient and uninterrupted emergency
            response.
          </div>
        </div>
        <div className="relative w-11/12 max-w-[450px] ">
          <img src={frameImage} alt="Pattern" loading="lazy" />

          <img
            src={image}
            alt="template hero image"
            loading="lazy"
            className="absolute -top-4 right-4"
          />
        </div>
      </div>
      <div className="flex mt-12">
        <div className="flex-col m-6">
          <div className="flex">
            <div className="my-2 justify-center">
              <img
                src={OurMission}
                alt="template hero image"
                width={50}
                height={50}
                loading="lazy"
                className="mr-2"
              />
            </div>
            <div className="text-3xl font-bold my-2">Our Mission</div>
          </div>
          <div className="text-lg font-medium">
            Be one of the top analytics consultancy organizations which operates
            in an ethically upright manner to create fair economic value for all
            its stakeholders.
          </div>
        </div>
        <div className="flex-col m-6 justify-center">
          <div className="flex">
            <div>
              <img
                src={OurVision}
                alt="template hero image"
                width={50}
                height={50}
                loading="lazy"
                className="mr-2"
              />
            </div>
            <div className="text-3xl font-bold my-2">Our Vision</div>
          </div>
          <div className="text-lg font-medium">
            To serve our clients by effectively delivering superior value-adding
            solutions for analytical problems using our expertise in data
            science and machine learning.
          </div>
        </div>
      </div>
      <div className="flex-col w-full my-6">
        <div className="text-3xl text-center my-10 font-bold">
          Meet the minds behind ClearPath
        </div>
        <div className="flex flex-wrap justify-center m-4">
          <div className="flex-col m-10 max-w-xl border-4 rounded-3xl">
            <img
              src="https://avatars.githubusercontent.com/u/72240452?v=4"
              alt="profile image"
              width={100}
              height={100}
              loading="lazy"
              className="rounded-full my-2 mx-auto"
            />
            <div className="text-4xl my-2 text-center font-semibold">
              Samarth Asthana
            </div>
            <div className="text-2xl mx-4 text-center font-medium">
              Backend and ML Enthusiast
            </div>
            <div className="text-lg text-center mx-auto my-2 w-72 font-medium ">
              As a Research and Development Engineer Intern at Logy.AI®, he
              automated user data analytics with Django and SQL. At Pocket FM,
              he led A/B experiments, conducted load testing, and implemented
              user retention strategies. Additionally, he developed Python
              scripts for Colgate Kenya and implemented Django-based bots for
              health screenings.
            </div>
            <div>
              <Link to="https://www.linkedin.com/in/samarth-asthana/">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                  alt="LinkedIn Icon"
                  width={50}
                  height={50}
                  loading="lazy"
                  className="my-2 mx-auto"
                />
              </Link>
            </div>
          </div>
          <div className="flex-col m-10 max-w-xl border-4 rounded-3xl">
            <img
              src="https://avatars.githubusercontent.com/u/103099845?v=4"
              alt="profile image"
              width={100}
              height={100}
              loading="lazy"
              className="rounded-full my-2 mx-auto"
            />
            <div className="text-4xl my-2 text-center font-semibold">
              Kartik Agarwal
            </div>
            <div className="text-2xl mx-4 text-center font-medium">
              UI/UX and Frontend Developer
            </div>
            <div className="text-lg text-center mx-auto my-2 w-72 font-medium ">
              SWE Intern '24 at Microsoft and pre-final-year student VIT.
              Passionate about developing, designing, and technical tasks.
              Hustling to solve real-world problems, currently learning Flutter,
              Dart, MERN Stack, Java Full Stack, Data Structures, and UX Design.
              Determined to add value to the world, loves connecting with new
              people.
            </div>
            <div>
              <Link to="https://www.linkedin.com/in/kartikhustles/">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                  alt="LinkedIn Icon"
                  width={50}
                  height={50}
                  loading="lazy"
                  className="my-2 mx-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="text-3xl font-bold mt-6 ">Key Features</div>
      <div>
        <div className="text-2xl font-semibold mt-2">
          Dynamic Traffic Signaling
        </div>
        <div className="text-lg font-medium">
          Adaptive signal adjustments optimize traffic flow. Emergency Vehicle
        </div>
        <div className="text-2xl font-semibold mt-4">Detection</div>
        <div className="text-lg font-medium">
          Cutting-edge AI identifies and prioritizes emergency vehicles.
        </div>
        <div className="text-2xl font-semibold mt-4">
          User-Friendly Interface
        </div>
        <div className="text-lg font-medium">
          Intuitive design for seamless interaction.
        </div>
      </div> */}
    </div>
  );
};

export default About;
