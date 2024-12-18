"use client";
import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import Container from "../layer/Container";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import BannerStats from "../layer/BannerStats";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Development", "Web Design", "UI/UX Design"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 3000,
  });
  return (
    <div id="#home" className="pt-28 min-h-full">
      <Container className="flex flex-col items-center justify-center">
        <div className="">
          <div className="text-white flex items-center flex-col justify-center">
            <h4 className="text-2xl text-center">
              <span className="opacity-70"> Hi!</span>{" "}
              <span className="hello">👋</span>{" "}
              <span className="opacity-50">My name is Nazneen Nahar Rima</span>
            </h4>
            <h1 className="text-8xl text-center mt-10 leading-[120%]">
              A Professional
            </h1>
            <h2 className="text-8xl text-center mt-2 dmSans">
              <span className="text-yellow"> MERN Stack </span>Developer,{" "}
            </h2>
            <h2 className="mt-1 text-center text-7xl">
              <span className="">Specializing in</span>{" "}
              <span className="text-5xl opacity-80 text-yellow">{text}</span>
              <Cursor cursorColor="white" />
            </h2>
          </div>
        </div>
        {/* =========================social media============ */}
        <div className="mt-32 flex flex-col items-center justify-center">
          <div className="relative">
            <div className="relative z-10 bg-yellow px-6 py-4 border-b border-r border-b-black border-r-black rounded-sm">
              {" "}
              <p className="text-2xl tracking-wider font-semibold">
                Find me in
              </p>
            </div>
            <div className="absolute z-0 rounded-sm -right-1 -bottom-1 w-full h-full bg-white"></div>
          </div>
          <div className="icons mt-12 flex gap-10 items-center justify-center">
            <Link
              href="/"
              className="bg-white  w-12 h-12 flex items-center justify-center rounded-full hover:translate-y-[-8px] shadow-md shadow-yellow border border-[#0000007d] transition-all duration-300"
            >
              <FaLinkedinIn className="text-2xl text-DarkGreen" />
            </Link>
            <Link
              href="/"
              className="bg-white w-12 h-12 flex items-center justify-center rounded-full hover:translate-y-[-8px] shadow-md shadow-yellow border border-[#0000007d] transition-all duration-300"
            >
              <FaFacebookF className="text-2xl text-black" />
            </Link>
            <Link
              href="/"
              className="bg-white w-12 h-12 flex items-center justify-center rounded-full hover:translate-y-[-8px] shadow-md shadow-yellow border border-[#0000007d] transition-all duration-300"
            >
              <BsTwitterX className="text-2xl text-DarkGreen" />
            </Link>
          </div>
        </div>
        {/* =========================social media============ */}
        {/* <div className="bg-yellow rounded-full mx-20 mt-20 px-16 py-10 flex items-center justify-between w-full">
          <div className=" flex flex-col gap-3 items-center justify-center">
            <h2 className="text-6xl font-semibold">3+</h2>
            <p className="text-xl">Years of Experience</p>
          </div>
          <div className=" flex flex-col gap-3 items-center justify-center">
            <h2 className="text-6xl font-semibold">100+</h2>
            <p className="text-xl">Complete Projects</p>
          </div>
          <div className=" flex flex-col gap-3 items-center justify-center">
            <h2 className="text-6xl font-semibold">90%</h2>
            <p className="text-xl">Client Satisfactions</p>
          </div>
        </div> */}
        <BannerStats />
      </Container>
    </div>
  );
};

export default Banner;
