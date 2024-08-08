import React from "react";
import { testimonials } from "../Constants";

const Testimonials = () => {
  return (
    <div className="pt-20  mt-15" id="testimonials">
      <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl text-center">
        What people say{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
          about me
        </span>
      </h1>

      <div className="flex flex-wrap justify-center mt-12 text-white">
        {testimonials.map((elem, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="rounded-md p-6 text-md border border-blue-700 font-thin">
              <p>{elem.text}</p>
              <div className=" flex mt-8 items-start">
                <img
                  className="w-12 h-12  mr-6 rounded-full border border-x-blue-300"
                  src={elem.photo}
                  alt=""
                />

                <div>
                  <h6>{elem.name}</h6>
                  <h6 className="text-sm">{elem.position}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
