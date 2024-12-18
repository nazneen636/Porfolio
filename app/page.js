import React from "react";
import Banner from "./sections/Banner";
import About from "./sections/About";
import Resume from "./sections/Resume";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import Project from "./sections/projects/Project";

const page = () => {
  return (
    <div>
      <Banner />
      <About />
      <Resume />
      <Services />
      <Skills />
      <Project />
    </div>
  );
};

export default page;
