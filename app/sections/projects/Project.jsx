import React, { useState } from "react";
import Container from "../../layer/Container";
import SectionTitle from "../../layer/SectionTitle";
import SeactionHeading from "../../layer/SeactionHeading";
import Link from "next/link";
import Ecommerce from "./Ecommerce";
import Css from "./Css";
import JavaScript from "./JavaScript";

const projectItem = [
  {
    title: "Show all",
  },
  {
    title: "CSS",
  },
  {
    title: "JavaScript",
  },
  {
    title: "Responsive Design",
  },
  {
    title: "E-commerce Website",
  },
];

const Project = () => {
  let [ecommerce, setEcommerce] = useState(true);
  let [css, setCSS] = useState(false);
  let [js, setJS] = useState(false);
  return (
    <div id="#projects">
      <Container className="pt-52 pb-5 text-white flex flex-col items-center justify-center gap-8">
        <SectionTitle titleText="Latest Works" />
        <SeactionHeading>
          View My Latest <span className="text-yellow">Works</span>
        </SeactionHeading>
        <ul className="flex gap-12 items-center justify-center">
          {projectItem.map((item, index) => (
            <li key={index}>
              <Link
                href="/"
                className="text-white opacity-70 text-2xl hover:text-yellow relative after:absolute after:w-0 after:h-[3px] after:left-0 after:top-full after:bg-yellow hover:opacity-100 hover:after:w-1/2 transition-all duration-300 after:transition-all after:duration-300"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-5">
          <Ecommerce />
          <Css />
          <JavaScript />
        </div>
      </Container>
    </div>
  );
};

export default Project;
