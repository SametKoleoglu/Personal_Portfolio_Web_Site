import React, { useEffect } from "react";
import AOS from "aos";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-quart",
      delay: 0,
      duration: 750,
    });
  }, [1000]);

  return (
    <div
      id="Projects"
      className="p-20 flex flex-col items-center justify-center "
    >
      <h1
        data-aos="fade-right"
        className="text-[50px] font-semibold mb-20 leading-normal uppercase text-orange-400"
      >
        Projects
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10 ">
        <img
          data-aos="fade-up"
          width={350}
          height={300}
          className="[25px] flex items-center justify-center rounded-3xl h-36 w-44 p-1 border-2 border-b-blue-600 b_glow"
          src="#"
          alt=""
        />
        <img
          data-aos="fade-down"
          width={350}
          height={300}
          className="[25px] flex items-center justify-center rounded-3xl h-36 w-44 p-1 border-2 border-b-blue-600 b_glow"
          src="#"
          alt=""
        />
        <img
          data-aos="fade-up"
          width={350}
          height={300}
          className="[25px] flex items-center justify-center rounded-3xl h-36 w-44 p-1 border-2 border-b-blue-600 b_glow"
          src="#"
          alt=""
        />
        <img
          data-aos="fade-down"
          width={350}
          height={300}
          className="[25px] flex items-center justify-center rounded-3xl h-36 w-44 p-1 border-2 border-b-blue-600 b_glow"
          src="#"
          alt=""
        />
      </div>
    </div>
  );
};

export default Projects;
