import React from "react";
import NewsLetter from "../../images/newsletter.png";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";

const SectionFive = () => {
  return (
    <div className="w-full relative p-10 lg:p-24">
      <div className="w-full flex flex-col justify-center items-center gap-5 bg-primary/5 px-5 py-10">
        <img
          data-aos="zoom-in"
          src={NewsLetter}
          alt="newsletter"
          className="w-1/2 lg:w-1/3"
        />
        <h3 className="text-xl lg:text-2xl text-primary">NewsLetter</h3>
        <p className="text-sm italic font-light">
          Get my tips directly into your inbox.
        </p>
        <div className="w-5/6 lg:w-1/2 flex max-md:flex-col gap-3 items-center">
          <input
            className="w-full rounded-3xl bg-white outline-none border border-primary/10 py-2 px-5 text-sm"
            placeholder="Email address"
          />
          <button className="text-sm py-2 px-5 border rounded-3xl text-white bg-primary max-md:w-full">
            Subscribe
          </button>
        </div>
        <div className="flex gap-5">
          <div className="w-10 h-10 text-primary hover:bg-primary/10 transition-all ease-in-out duration-500 rounded-full flex items-center justify-center">
            <FaFacebookF />
          </div>
          <div className="w-10 h-10 text-primary hover:bg-primary/10 transition-all ease-in-out duration-500 rounded-full flex items-center justify-center">
            <FaInstagram />
          </div>
          <div className="w-10 h-10 text-primary hover:bg-primary/10 transition-all ease-in-out duration-500 rounded-full flex items-center justify-center">
            <FaGoogle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
