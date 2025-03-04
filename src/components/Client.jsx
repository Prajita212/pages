import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { SiHuawei, SiSony, SiUber } from "react-icons/si";
function Client() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center lg:gap-20 min-h-screen bg-gradient-to-b from-[#4635AA] to-[#1C1544]">
      <div className="text-white w-80 ">
        <h1 className="md:text-5xl text-2xl lg:mb-6 font-semibold">
          OUR CLIENTS
        </h1>
        <p className="hidden md:flex text-2xl">
          We've partnered with businesses across industries to build
          cutting-edge digital solutions.
        </p>
      </div>
      <div className="flex items-center justify-center bg-[#D0D0D0] md:h-90 h-60 md:w-130 w-80 md:mt-0 mt-8 rounded-4xl shadow-2xl shadow-black">
        <div className="grid grid-cols-3 gap-15">
          <SiUber className="md:text-8xl text-5xl bg-black text-white p-2" />
          <FaEarthAsia className="md:text-8xl text-5xl text-blue-600" />
          <SiSony className="md:text-8xl text-5xl" />
          <MdApartment className="md:text-8xl text-5xl text-red-600" />
          <SiHuawei className="md:text-8xl text-5xl" />
          <FaFacebook className="text-blue-500 md:text-8xl  text-5xl" />
        </div>
      </div>
      <p className="md:hidden mt-5 w-60 text-white text-lg">
        We've partnered with businesses across industries to build cutting-edge
        digital solutions.Industries we've worked with:<li> E-commerce</li><li> Healthcare</li>
       <li> FinTech</li><li> Education</li> <li>Tech</li><li> Real Estate</li>
      </p>
    </div>
  );
}

export default Client;
