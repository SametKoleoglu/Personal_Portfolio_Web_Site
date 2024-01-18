import React, { useEffect } from "react";
import AOS from "aos";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-quart",
      delay: 0,
      duration: 750,
    });
  }, [1000]);

  return (
    <div
      id="Contact"
      className="p-4 lg:p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-left"
        className="text-[50px] font-semibold mb-20 leading-normal uppercase text-orange-400"
      >
        Contact me
      </h1>
      <form action="" className="flex flex-col gap-2 lg:w-1/2">
        <div className="lg:flex gap-9 ">
          <input
            className="w-full lg:my-3 my-6 rounded-lg bg-slate-700 p-4 border-2 border-orange-400 b_glow text-xl text-white"
            placeholder="Enter Your Name"
            type="text"
          />
          <input
            className="w-full lg:my-3 my-6 rounded-lg bg-slate-700 p-4 border-2 border-orange-400 b_glow text-xl text-white"
            placeholder="Enter Your Email"
            type="email"
          />
        </div>
        <textarea
          className="w-full my-3 rounded-lg bg-slate-700 p-4 border-2 border-orange-400 b_glow text-xl text-white"
          placeholder="Your Message..."
          name=""
          id=""
          cols="20"
          rows="10"
        ></textarea>
        <button
          className="neno-button shadow-xl hover:shadow-orange-400/50 text-white border-3 border-orange-300 bg-orange-400 hover:bg-slate-900 py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold mb-10"
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Contact;
