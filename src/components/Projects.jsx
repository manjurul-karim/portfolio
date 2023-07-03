import React from "react";



import languageFluent from "../assets/projects/language-fluent.png";
import hotToys from "../assets/projects/hot-toys.png";
import chefChoice from "../assets/projects/chef-choice.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: languageFluent,
      demo: "https://a12-languagefluent-client.web.app/",
      clientCode: "https://github.com/manjurul-karim/language-fluent",
      serverCode: "https://github.com/manjurul-karim/language-fluent-server",
    },
    {
      id: 2,
      src: hotToys,
      demo: "https://a10-hot-toys-505eb.web.app/",
      clientCode: "https://github.com/manjurul-karim/hot-toys-client",
      serverCode: "https://github.com/manjurul-karim/hot-toys-server",
    },
    {
      id: 3,
      src: chefChoice,
      demo: "https://assignment-10-e978e.web.app/",
      clientCode: "https://github.com/manjurul-karim/chef-choice-client",
      serverCode: "https://github.com/manjurul-karim/chef-choice-server",
    },
  ];

  return (
    <div
      id="projects"
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full md:h-screen">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 md:px-12 sm:px-0">
          {projects.map(({ id, src, demo, clientCode, serverCode }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md h-2/3 w-full duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/3  py-3 m-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={clientCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/3  py-3 m-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 duration-200 hover:scale-105"
                >
                  client
                </a>
                <a
                  href={serverCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/3  py-3 m-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 duration-200 hover:scale-105"
                >
                  Server
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
