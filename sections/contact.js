import React from "react";
import {
  FaBehance,
  FaPinterest,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa";

const contact = () => {
  return (
    <div className="paddingSectionSmall md:paddingSection flex flex-col lg:flex-row justify-around gap-8">
      <div className="flex flex-col gap-4">
        <p className="text-md font-bold">Get In Touch</p>
        <div>
          <p>Phone: +91-8123342761</p>
          <p>Email: connectwithme.pragati@gmail.com</p>
        </div>
        <div className="flex gap-4">
          <div className="border-[1px] cursor-pointer border-black rounded-full w-10 h-10 p-2 text-black flex items-center justify-center text-tiny">
            <FaBehance />
          </div>
          <div className="border-[1px] cursor-pointer border-black rounded-full w-10 h-10 p-2 text-black flex items-center justify-center text-tiny">
            <FaPinterest />
          </div>
          <div className="border-[1px] cursor-pointer border-black rounded-full w-10 h-10 p-2 text-black flex items-center justify-center text-tiny">
            <FaDribbble />
          </div>
          <div className="border-[1px] cursor-pointer border-black rounded-full w-10 h-10 p-2 text-black flex items-center justify-center text-tiny">
            <FaInstagram />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-md font-bold">Contact Form</p>
        <div>
          <input
            className="border-[1px] p-2 rounded-md mr-4"
            type="text"
            placeholder="Name"
          />
          <input
            className="border-[1px] p-2 rounded-md"
            type="text"
            placeholder="Email"
          />
        </div>
        <textarea
          className="border-[1px] p-2 rounded-md"
          name="Description"
          cols="50"
          rows="4"
        />
        <button className="text-center bg-primary text-white w-[104px] p-2 pr-4 pl-4 text-xs">
          Submit
        </button>
      </div>
    </div>
  );
};

export default contact;
