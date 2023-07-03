import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const words = [
    "MERN Stack Web Developer",
    "Frontend Developer",
    "Web Developer",
  ];

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      id="about"
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            About
          </p>
        </div>

        <div className="lg:mt-20 lg:grid grid-cols-2 gap-20">
          <p
            data-aos="fade-right"
            className="text-desc-color lg:text-lg text-justify"
          >
            I am Manjurul Karim is skilled MERN stack web developer with
            expertise in ReactJS and familiar with MongoDB, Express.js, Node.js,
            and various other technologies related to JavaScript. With a passion
            for crafting dynamic and interactive web applications, I'm creative,
            proficient in every project, and committed to delivering
            high-quality, efficient, and user-friendly solutions.
          </p>
          <div data-aos="fade-left" className="space-y-4 lg:mt-0 mt-4">
            <h3 className="lg:text-2xl text-lg font-black">
              I am a{" "}
              <span className="text-blue-500">
                <Typewriter
                  words={words}
                  loop={0}
                  cursor={true}
                  cursorColor="#004AAD"
                />
              </span>
            </h3>
            <ul className="list-disc list-inside space-y-3">
              <li className="my-list relative">
                <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                  Name
                </strong>
                : Manjurul Karim
              </li>
              <li className="my-list relative">
                <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                  Age
                </strong>
                : 28 years
              </li>
              <li className="my-list relative">
                <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                  Nationality
                </strong>
                : Bangladesh
              </li>
              <li className="my-list relative">
                <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                  Language
                </strong>
                : Bengali, English
              </li>
              <li className="my-list relative">
                <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                  Address
                </strong>
                : Barishal, Bangladesh
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
