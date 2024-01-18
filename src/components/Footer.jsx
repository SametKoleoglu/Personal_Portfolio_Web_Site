import React from "react";
import { FaGithub, FaLinkedinIn, FaMedium, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mt-2 md:mb-0">
          <span className="text-[23px] font-semibold text-orange-400 py-2 uppercase">
            LOGO
          </span>
          <p className="">Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <h2 className="text-[23px] font-semibold text-orange-400 py-2 uppercase">
            Services
          </h2>
          <ul className="text-[15px] my-4">
            <li className="my-2">Web Design</li>
            <li className="my-2">Web Development</li>
            <li className="my-2">Mobile Development</li>
            <li className="my-2">SEO</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[23px] font-semibold text-orange-400 py-2 uppercase">
            Contact
          </h2>
          <p className="text-[15px] my-4">Email: test@deneme.com</p>
          <p className="text-[15px] my-4">Phone: +90 (555) 555 5555</p>
        </div>
        <div>
          <h2 className="mb-4 md:mb-0 text-blue-500">Follow Me</h2>
          <div className="flex space-x-4">
            <a
              className="text-white hover:text-orange-400 transition-all duration-150 ease-in-out "
              href="#"
            >
              <FaGithub />
            </a>
            <a
              className="text-white hover:text-orange-400 transition-all duration-150 ease-in-out "
              href="#"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="text-white hover:text-orange-400 transition-all duration-150 ease-in-out "
              href="#"
            >
              <FaTwitter />
            </a>
            <a
              className="text-white hover:text-orange-400 transition-all duration-150 ease-in-out "
              href="#"
            >
              <FaMedium />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
