import React from "react";
import { pricing } from "../Constants";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <div className="mt-32">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl text-center my-8 tracking-wide text-white">
          What You{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
            Can Expect
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 text-white">
          {pricing.map((price, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="flex flex-col justify-between p-6 border border-blue-900 rounded-xl h-full">
                <div>
                  <p className="text-xl font-semibold mb-4">
                    {price.title}{" "}
                    {price.title === "Professional" && (
                      <span className="text-sm bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text">
                        (Most Popular)
                      </span>
                    )}
                  </p>
                  <p className="mb-8 mt-4">
                    <span className="text-3xl font-bold">{price.price}</span>
                    <span className="text-gray-300 tracking-wide">/Month</span>
                  </p>

                  <ul className="mb-8">
                    {price.features.map((elem, index) => (
                      <li
                        key={index}
                        className="flex items-center mt-4 space-x-2 text-sm"
                      >
                        <CheckCircle2 className="text-green-400" />
                        <span>{elem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#"
                  className={`inline-flex justify-center items-center text-center w-full h-12 p-2 mt-4 tracking-wide text-xl ${
                    price.title === "Professional"
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-blue-700 hover:bg-blue-800"
                  } rounded-lg text-white`}
                >
                  Subscribe
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
