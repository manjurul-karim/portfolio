import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Lottie from "lottie-react";
import softwareDevelopment from "../assets/72856-software-development.json";
import scrollDown from "../assets/97146-scroll-down.json";

const Home = () => {
  return (
    <div
    id="home"
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have great passon for coding.Currently, I love to work on web
            application using technologies like React, Tailwind...
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 cursor-pointer">
              <a className="button" href="/resume.pdf" download="resume.pdf">
                Download Resume
              </a>
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
          
        </div>

        <div>
          <Lottie
            animationData={softwareDevelopment} loop={true}
            className="rounded-2xl mx-auto w-2/3 md:w-full md:h-full"
          />
          ;
        </div>
      </div>
      
    </div>
  );
};

export default Home;
