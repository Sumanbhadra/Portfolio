import React from "react";
import logo from "../assets/logoWhite.webp";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-col  items-center relative">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={100} />
        </a>
        <div className="absolute mt-20 mx-auto border-b-2 border-stone-300 w-1/2"></div>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/suman-bhadra-a9a20b221/"
          target="_blank"
          rel="noopener norefferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Sumanbhadra"
          target="_blank"
          rel="noopener norefferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/bhadra.suman_/"
          target="_blank"
          rel="noopener norefferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/BhadraSuman1?t=8Q-mTB_-h9fM8FIEmkPqbQ&s=09"
          target="_blank"
          rel="noopener norefferrer"
          aria-label="Twitter"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
