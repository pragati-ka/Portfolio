import React from "react";
import {
  FaBehance,
  FaPinterest,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa";

const followMe = () => {
  return (
    <div className="relative h-[140px] flex items-center justify-center">
      <div className="absolute w-full h-[140px] bg-[url('../public/social-bckg.jpg')] bg-cover top-0 left-0 bg-center" />
      <div className="absolute w-full h-[140px] bg-[rgba(98,68,197,0.7)] top-0 left-0" />
      <div className="flex flex-col md:flex-row p-10 md:pl-[80px] md:pr-[80px] justify-around md:justify-between items-center w-full gap-4 text-white font-bold z-10 md:text-tiny text-xs">
        <p>FOLLOW ME!!</p>
        <div className="flex gap-4">
          <div className="border-[1px] cursor-pointer border-white rounded-full w-12 h-12 text-tiny md:w-14 md:h-14 md:text-md p-2 text-white flex items-center justify-center">
            <FaBehance />
          </div>
          <div className="border-[1px] cursor-pointer border-white rounded-full w-12 h-12 text-tiny md:w-14 md:h-14 md:text-md p-2 text-white flex items-center justify-center">
            <FaPinterest />
          </div>
          <div className="border-[1px] cursor-pointer border-white rounded-full w-12 h-12 text-tiny md:w-14 md:h-14 md:text-md p-2 text-white flex items-center justify-center">
            <FaDribbble />
          </div>
          <div className="border-[1px] cursor-pointer border-white rounded-full w-12 h-12 text-tiny md:w-14 md:h-14 md:text-md p-2 text-white flex items-center justify-center">
            <FaInstagram />
          </div>
        </div>
        <p>SHARE</p>
      </div>
    </div>
  );
};

export default followMe;
