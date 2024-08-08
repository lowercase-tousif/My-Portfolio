import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <div className="relative h-full w-full">
        <div className="absolute inset-0 bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] -z-10"></div>
        <Navbar />
        <div className="relative w-4/5 mx-auto pt-20">
          <Hero />
          <About />
          <Projects />
          <Pricing />
          <Testimonials />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
