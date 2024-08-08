import React from "react";
import myself from "../assets/hero.jpg";
import { checklistItems } from "../Constants";
const About = () => {
  return (
    <div className="mt-32">
      <div className="text-center">
        {/* <span className="border border-slate-900 text-white rounded-full h-6 text-sm font-medium px-2 py-2">
          About 🤔
        </span> */}
        <h2 className="text-3xl sm:text-5xl lg:text-7xl mt-10 lg:mt-15 tracking-wide text-white">
          About{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
            myself
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center mt-10 lg:mt-15 items-center ">
        <div className="p-2 w-full lg:w-[50%]">
          <img src={myself} alt="" />
        </div>

        <div className="pt-12 w-full lg:w-1/2 text-white">
          {checklistItems.map((elements, index) => (
            <div className="flex -space-x-16 mb-10">
              <div className="text-white mx-6  h-24 w-24 p-2 justify-center items-center">
                {elements.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{elements.title}</h5>
                <p>{elements.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
