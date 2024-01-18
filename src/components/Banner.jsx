import React, { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaMedium } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import pp from "../assets/images/pp.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center"
    >
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-[50px] font-semibold mb-8 leading-normal uppercase"
        >
          Welcome To<span className="text-blue-700 px-5">My Website</span>
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
              <a
                href=""
                className="text-purple-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <AiFillGithub className="text-[30px]" />
              </a>
              <a
                href=""
                className="text-blue-600 hover:text-blue-300 rounded-full glow p-2"
              >
                <FaLinkedinIn className="text-[30px]" />
              </a>
              <a
                href=""
                className="text-blue-400 hover:text-blue-600 rounded-full glow p-2"
              >
                <FiTwitter className="text-[30px]" />
              </a>
              <a
                href=""
                className="text-gray-300 hover:text-gray-50 rounded-full glow p-2"
              >
                <FaMedium className="text-[30px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src={pp}
        width={250}
        height={250}
        alt="profile"
        className="rounded-full border-2 p-1 border-blue-400 img_glow"
        data-aos="fade-up"
      />
    </div>
  );
};

export default Banner;
