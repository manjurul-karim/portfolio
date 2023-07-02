import React from "react";
import arrayDestruct from "../assets/projects/arrayDestruct.jpg";
import navbar from "../assets/projects/navbar.jpg";
import reactParallax from "../assets/projects/reactParallax.jpg";
const Projects = () => {
  const projects = [
    {
      id: 1,
      src: arrayDestruct,
      demo: "https://a12-languagefluent-client.web.app/",
      code: "https://github.com/manjurul-karim/language-fluent",
    },
    {
      id: 2,
      src: reactParallax,
      demo: "https://a10-hot-toys-505eb.web.app/",
      code: "https://github.com/manjurul-karim/hot-toys-client",
    },
    {
      id: 3,
      src: navbar,
      demo: "https://assignment-10-e978e.web.app/",
      code: "https://github.com/manjurul-karim/chef-choice-client",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full md:h-screen">
        <div className="md:pt-24">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
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
