"use client";
import React, { useEffect } from "react";
import SectionTitle from "../layer/SectionTitle";
import SeactionHeading from "../layer/SeactionHeading";
import Container from "../layer/Container";
import { FaCode } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiAppsLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { BiRocket } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";

const serviceItems = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "Craft modern, scalable websites using React.js, Next.js, and Node.js, optimized for performance and user experience.",
  },
  {
    icon: <MdDevices />,
    title: "Responsive Web Design",
    description:
      "Design adaptive, visually appealing websites that work seamlessly on all devices.",
  },
  {
    icon: <AiOutlineShoppingCart />,
    title: "E-Commerce Development",
    description:
      "Build secure, user-friendly e-commerce platforms with optimized product pages and smooth payment integration.",
  },
  {
    icon: <RiAppsLine />,
    title: "UI/UX Design",
    description:
      "Deliver intuitive, engaging interfaces with end-to-end UI/UX design services.",
  },
  {
    icon: <CgWebsite />,
    title: "Website Optimization",
    description:
      "Boost site performance, SEO, and speed for an enhanced user experience.",
  },
  {
    icon: <BiRocket />,
    title: "Ongoing Maintenance",
    description:
      "Ensure your website stays secure, updated, and bug-free with continuous support.",
  },
];

const Services = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-out",
      // once: true,
    });
  }, []);
  return (
    <div id="#service">
      <Container className="pt-52 text-white flex flex-col items-center justify-center gap-8">
        <SectionTitle titleText="Services" />
        <SeactionHeading className="text-center">
          My <span className="text-yellow">Special Services</span> For
          <br /> your Project
        </SeactionHeading>
        {/* ===============cards===== */}
        <div className="cards mt-8 grid grid-cols-3 gap-8">
          {serviceItems.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-mirror="true"
              data-aos-offset="200"
              className="card py-10 px-10 rounded-xl bg-yellow flex flex-col gap-5 text-black"
            >
              <div className="icon mb-5 w-12 h-12 bg-black text-white flex items-center justify-center text-2xl rounded-full">
                {item.icon}
              </div>
              <h2 className="text-xl font-medium">{item.title}</h2>
              <p className="text-sm opacity-80 leading-[160%]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        {/* ===============cards===== */}
      </Container>
    </div>
  );
};

export default Services;
