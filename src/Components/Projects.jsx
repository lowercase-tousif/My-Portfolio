import React from "react";
import { projects } from "../Constants";

const Projects = () => {
  return (
    <div className="mt-32">
      <div className="container mx-auto ml-2">
        <h1 className="text-center text-6xl text-white">
          My{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
            Projects
          </span>
        </h1>

        <div className="flex flex-wrap mt-10 lg:mt-20">
          {projects.map((elem) => (
            <div
              key={elem.id}
              className="w-full sm:w-1/2 lg:w-1/3 p-4 flex justify-center"
            >
              <div className="relative w-full max-w-sm bg-white bg-opacity-5 backdrop-blur-lg  rounded-lg shadow-lg">
                <img
                  src={elem.icon}
                  alt={elem.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl  text-white">
                    {elem.id}. {elem.title}
                  </h2>
                  <p className="text-gray-300 text-sm">{elem.tech}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
