import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaMedium } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import pp from "../assets/images/pp.jpg";

const About = () => {
  return (
    <div
      id="About"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
    >
      <img
        src={pp}
        width={250}
        height={250}
        alt="profile"
        className="rounded border-2 p-1 border-blue-400 img_glow"
        data-aos="fade-down"
      />
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-[50px] font-semibold mb-8 leading-normal text-orange-300 uppercase"
        >
          About me
        </h1>
        <p data-aos="fade-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus eveniet voluptates illum. Eos recusandae explicabo
          molestiae aspernatur repudiandae quaerat tempora reprehenderit odio,
          neque, eligendi voluptas vero fugit laborum sapiente adipisci.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <button className="neno-button shadow-xl hover:shadow-blue-800/50 text-white border-2 hover:bg-blue-600 border-blue-900 rounded-lg py-4 px-8 uppercase relative overflow-hiddens">
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
