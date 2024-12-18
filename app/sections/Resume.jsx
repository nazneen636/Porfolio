"use client";
import React, { useEffect } from "react";
import Container from "../layer/Container";
import SectionTitle from "../layer/SectionTitle";
import SeactionHeading from "../layer/SeactionHeading";
import { BsArrowUpRight } from "react-icons/bs";
import { RiArrowRightUpLine } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";

const Resume = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-out",
      // once: true,
    });
  }, []);
  return (
    <div id="#resume" className="pt-52 min-h-full">
      <Container className="text-white flex flex-col gap-8 items-center justify-center">
        <SectionTitle titleText="My Resume" />
        <SeactionHeading>
          Showcase Your <span className="text-yellow">Talent</span> amplifing
          your impact
        </SeactionHeading>
        <div className="relative mt-8 text-black flex justify-between w-full py-12 px-10 bg-yellow rounded-lg">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-40 bg-[#000000c5] w-[2px]"></div>
          <div className="w-full">
            <h2 className="font-bold mb-10 text-2xl opacity-90">
              Job Experience
            </h2>
            <div data-aos="fade-up" className="flex flex-col gap-10">
              <div className="flex gap-5 items-center group">
                <div className="bg-black rounded-full group-hover:bg-white w-8 h-8 flex items-center justify-center duration-300 transition-all">
                  <RiArrowRightUpLine className="text-white text-2xl group-hover:text-black duration-300 transition-all" />
                </div>
                <div className="">
                  <p className="opacity-80">2019</p>
                  <h4 className="text-2xl mt-1 font-medium opacity-90">
                    Lecturer
                  </h4>
                </div>
              </div>
              <div data-aos="fade-up" className="flex gap-5 items-center group">
                <div className="bg-black rounded-full group-hover:bg-white w-8 h-8 flex items-center justify-center duration-300 transition-all">
                  <RiArrowRightUpLine className="text-white text-2xl group-hover:text-black duration-300 transition-all" />
                </div>
                <div className="">
                  <p className="opacity-80">2020- 2024</p>
                  <h4 className="text-2xl font-medium mt-1 opacity-90">
                    Administrative Officer
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full ml-72">
            <h2 className="font-bold mb-10 text-2xl opacity-90">
              Training Completion
            </h2>
            <div data-aos="fade-up" className="flex flex-col gap-10">
              <div className="flex gap-5 items-center group">
                <div className="bg-black rounded-full group-hover:bg-white w-8 h-8 flex items-center justify-center duration-300 transition-all">
                  <RiArrowRightUpLine className="text-white text-2xl group-hover:text-black duration-300 transition-all" />
                </div>
                <div className="">
                  <p className="opacity-80">2024</p>
                  <h4 className="text-2xl font-medium mt-1 opacity-90">
                    Frontend Development
                  </h4>
                </div>
              </div>
              <div data-aos="fade-up" className="flex gap-5 items-center group">
                <div className="bg-black rounded-full group-hover:bg-white w-8 h-8 flex items-center justify-center duration-300 transition-all">
                  <RiArrowRightUpLine className="text-white text-2xl group-hover:text-black duration-300 transition-all" />
                </div>
                <div className="">
                  <p className="opacity-60">2024- present</p>
                  <h4 className="text-2xl font-medium mt-1 opacity-90">
                    MERN Stack Development
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Resume;
