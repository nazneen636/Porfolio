"use client";
import React, { useEffect } from "react";
import Container from "../layer/Container";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import rima from "../../public/rimaBg.JPG";
import rima2 from "../../public/rimaBg2.png";
import SectionTitle from "../layer/SectionTitle";
import SeactionHeading from "../layer/SeactionHeading";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-out",
      once: false,
    });
  }, []);
  return (
    <div id="#about" className="pt-52 min-h-full">
      <Container className=" flex items-center w-full gap-10 text-white">
        <div className="relative z-20 bg-gradient-to-l from-[#032628] to-gray-800 border-4 border-yellow w-[1600px]">
          <div className="absolute w-full h-full z-10 bg-gradient-to-l from-[#032628] to-gray-700"></div>
          <div className="absolute w-full h-full z-0 bg-white -right-[10px] -bottom-3"></div>
          <Image src={rima2} className="w-full relative z-20" />
        </div>
        <div className="flex flex-col gap-8">
          <SectionTitle titleText="About Me" />
          <SeactionHeading>
            A passionate{" "}
            <span className="text-yellow">MERN Stack Developer</span> turning
            ideas into visually stunning, user-friendly,{" "}
            <span className="text-yellow">responsive</span> websites.
          </SeactionHeading>
          <p
            // data-aos="fade-in"
            // data-aos-duration="500"
            className="mt-4 text-xl leading-[170%] opacity-60 pr-24 text-justify"
          >
            Hi! I’m Nazneen Nahar Rima, a passionate MERN Stack Developer and
            Web Designer with 3+ years of experience. Skilled in React.js,
            Next.js, Node.js, and UI/UX design, I create responsive, scalable,
            and user-friendly web applications while ensuring seamless user
            experiences and timely delivery.
          </p>
          <div className="mt-8 flex gap-20 opacity-90">
            <div className="flex flex-col gap-4">
              <div
                data-aos="fade-down"
                data-aos-mirror="true"
                className="flex gap-4 items-center"
              >
                <FaArrowRightLong className="text-yellow text-2xl" />
                <p className="text-xl">Full-Stack Solutions</p>
              </div>
              <div
                data-aos="fade-down"
                data-aos-mirror="true"
                className="flex gap-4 items-center"
              >
                <FaArrowRightLong className="text-yellow text-2xl" />
                <p className="text-xl">UI/UX Design</p>
              </div>
              <div
                data-aos="fade-down"
                data-aos-mirror="true"
                className="flex gap-4 items-center"
              >
                <FaArrowRightLong className="text-yellow text-2xl" />
                <p className="text-xl">Responsive Web Design</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div
                data-aos="fade-down"
                data-aos-mirror="true"
                className="flex gap-4 items-center"
              >
                <FaArrowRightLong className="text-yellow text-2xl" />
                <p className="text-xl">Scalability & Performance</p>
              </div>
              <div
                data-aos="fade-down"
                data-aos-mirror="true"
                className="flex gap-4 items-center"
              >
                <FaArrowRightLong className="text-yellow text-2xl" />
                <p className="text-xl">Timely Delivery</p>
              </div>
              <div
                data-aos="fade-down"
                data-aos-mirror="true"
                className="flex gap-4 items-center"
              >
                <FaArrowRightLong className="text-yellow text-2xl" />
                <p className="text-xl">Collaboration & Support</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
