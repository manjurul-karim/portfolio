import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import figma from "../assets/figma.svg"
import bootstrap from "../assets/skills/bootstrap-plain-wordmark.svg"
import firebase from "../assets/skills/firebase-plain-wordmark.svg"
import mongodb from "../assets/skills/mongodb-original-wordmark.svg"
import npm from "../assets/skills/npm-original-wordmark.svg"
import nodejs from "../assets/skills/nodejs-original-wordmark.svg"

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: nodejs,
      title: "nodejs",
      style: "shadow-green-300",
    },
    {
      id: 6,
      src: npm,
      title: "npm",
      style: "shadow-red-500",
    },
    {
      id: 7,
      src: mongodb,
      title: "mongoDB",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 9,
      src: bootstrap,
      title: "bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 10,
      src: firebase,
      title: "firebase",
      style: "shadow-yellow-700",
    },
    {
      id: 11,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 12,
      src: figma,
      title: "figma",
      style: "shadow-pink-300",
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4  flex flex-col justify-center w-full h-full md:h-screen text-white">
        <div className="mt-12 md:mt-36">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 text-center py-8 md:px-12 sm:px-0 ">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
