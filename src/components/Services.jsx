import React, { useEffect } from "react";
import AOS from "aos";


const Services = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-quart",
      delay: 0,
      duration: 750,
    });
  }, [1000]);

  return (
    <div
      id="services"
      data-aos="fade-right"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1 data-aos="fade-right" className="text-[50px] font-semibold mb-20 leading-normal uppercase text-orange-400">
        Services
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20 ">
        <h2
          data-aos="fade-up"
          className="[25px] flex items-center justify-center font-semibold text-orange-400 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-b-blue-600 b_glow"
        >
          Javascript
        </h2>
        <h2
          data-aos="fade-down"
          className="[25px] flex items-center justify-center font-semibold text-orange-400 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-b-blue-600 b_glow"
        >
          C#
        </h2>
        <h2
          data-aos="fade-down"
          className="[25px] flex items-center justify-center font-semibold text-orange-400 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-b-blue-600 b_glow"
        >
          React
        </h2>
        <h2
          data-aos="fade-up"
          className="[25px] flex items-center justify-center font-semibold text-orange-400 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-b-blue-600 b_glow"
        >
          React Native
        </h2>
      </div>
    </div>
  );
};

export default Services;
