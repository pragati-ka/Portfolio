import React from "react";
import { FaCropAlt } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const services = () => {
  return (
    <div className="bg-gray-50 paddingSectionSmall md:paddingSection flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <p className="font-bold text-xl">My Services</p>
        <button className="p-3 pl-10 pr-10 bg-primary text-white rounded-md">
          Hire Me
        </button>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white rounded-md w-full p-12 flex gap-8 justify-between">
          {/* icon */}
          <div
            className="flex items-center justify-center w-[192px] h-[100px]"
            style={{
              backgroundImage: `url("https://res.cloudinary.com/ani1997/image/upload/v1668372087/Pragati%20Portfolio%20Website/bg-icon_oxhsoj.png")`,
            }}
          >
            <FaCropAlt className="z-10 text-lg" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-md">Creative Design</p>
            <p>
              I have worked on different creative logos and vector art. You can
              go can look at my work <a href="#">here</a>
            </p>
            <button className="text-center bg-primary text-white w-[104px] p-2 pr-4 pl-4 rounded-full text-sm mt-4 flex items-center justify-between">
              View
              <BsFillArrowRightCircleFill className="text-tiny" />
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md w-full p-12 flex gap-8 justify-between">
          {/* icon */}
          <div
            className="flex items-center justify-center w-[192px] h-[100px]"
            style={{
              backgroundImage: `url("https://res.cloudinary.com/ani1997/image/upload/v1668372087/Pragati%20Portfolio%20Website/bg-icon_oxhsoj.png")`,
            }}
          >
            <FaCropAlt className="z-10 text-lg" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-md">Creative Design</p>
            <p>
              I have worked on different creative logos and vector art. You can
              go can look at my work <a href="#">here</a>
            </p>
            <button className="text-center bg-primary text-white w-[104px] p-2 pr-4 pl-4 rounded-full text-sm mt-4 flex items-center justify-between">
              View
              <BsFillArrowRightCircleFill className="text-tiny" />
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md w-full p-12 flex gap-8 justify-between">
          {/* icon */}
          <div
            className="flex items-center justify-center w-[192px] h-[100px]"
            style={{
              backgroundImage: `url("https://res.cloudinary.com/ani1997/image/upload/v1668372087/Pragati%20Portfolio%20Website/bg-icon_oxhsoj.png")`,
            }}
          >
            <FaCropAlt className="z-10 text-lg" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-md">Creative Design</p>
            <p>
              I have worked on different creative logos and vector art. You can
              go can look at my work <a href="#">here</a>
            </p>
            <button className="text-center bg-primary text-white w-[104px] p-2 pr-4 pl-4 rounded-full text-sm mt-4 flex items-center justify-between">
              View
              <BsFillArrowRightCircleFill className="text-tiny" />
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md w-full p-12 flex gap-8 justify-between">
          {/* icon */}
          <div
            className="flex items-center justify-center w-[192px] h-[100px]"
            style={{
              backgroundImage: `url("https://res.cloudinary.com/ani1997/image/upload/v1668372087/Pragati%20Portfolio%20Website/bg-icon_oxhsoj.png")`,
            }}
          >
            <FaCropAlt className="z-10 text-lg" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-md">Creative Design</p>
            <p>
              I have worked on different creative logos and vector art. You can
              go can look at my work <a href="#">here</a>
            </p>
            <button className="text-center bg-primary text-white w-[104px] p-2 pr-4 pl-4 rounded-full text-sm mt-4 flex items-center justify-between">
              View
              <BsFillArrowRightCircleFill className="text-tiny" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
