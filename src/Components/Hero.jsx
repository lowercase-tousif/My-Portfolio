import React from "react";

const Hero = () => {
  return (

    

    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-5xl sm:text-6xl lg:text-8xl text-center tracking-wide text-white">
        Hey there!{" "}
        <span className="inline-block align-middle">
          <img
            src="https://em-content.zobj.net/source/apple/391/waving-hand_1f44b.png"
            alt="Waving Hand Emoji"
            className="w-20 h-20 mb-4 inline"
          />
        </span>{" "}
        Myself{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          Tousif Tasrik
        </span>
      </h1>
      <p className="mt-10 text-md sm:text-md lg:text-lg text-center text-gray-400 max-w-4xl about-my">
        I’m a Full Stack Developer skilled in the MERN Stack, Spring Boot,
        Tailwind CSS, and Communication. With proficiency in JavaScript and
        Java, I build robust web applications and solve problems from multiple
        angles. In addition to my technical skills, I actively participate in
        competitive programming with C++, which sharpens my problem-solving
        abilities.
      </p>
    </div>
  );
};

export default Hero;
