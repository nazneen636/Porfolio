"use client";
import React from "react";
import Container from "../layer/Container";
import Image from "next/image";
import profile from "../../public/nipa.png";
import { Link } from "react-scroll";

const menuItem = [
  { id: 1, title: "Home", link: "#home" },
  { id: 2, title: "About", link: "#about" },
  { id: 4, title: "Resume", link: "#resume" },
  { id: 3, title: "Services", link: "#service" },
  { id: 5, title: "Projects", link: "#projects" },
  { id: 6, title: "Contact", link: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="sticky z-[1000] left-0 top-0 w-full bg-[#E8C83E] py-3 border-b border-[#03262879]">
      <Container className="flex items-center justify-between">
        <Image className="w-20 h-20  rounded-full bg-DarkGreen" src={profile} />
        <ul className="flex items-center gap-9">
          {menuItem.map((item) => (
            <li key={item.id}>
              <Link
                smooth={true}
                duration={500}
                spy={true}
                offset={-73}
                activeClass="active"
                className="text-[18px] text-[#032628c1] hover:text-[#032628] font-semibold cursor-pointer relative after:absolute after:bg-DarkGreen after:h-[3px] after:w-0 after:left-1/2 after:-translate-x-1/2 after:top-full hover:after:w-full after:transition-all after:duration-300 after:rounded-full"
                to={item.link}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <a
          className="px-7 py-3 text-[18px] border-2 border-transparent hover:bg-transparent hover:border-DarkGreen bg-DarkGreen transition-all duration-300 hover:text-DarkGreen text-white rounded-full"
          href="/Rima Resume.pdf"
          download="My Resume"
        >
          Download CV
        </a>
      </Container>
    </nav>
  );
};

export default Navbar;
