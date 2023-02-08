import React from "react";
import Typed from "react-typed";
const hero = () => {
  const str = ["Pragati", "UI/UX Designer"];
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gray-50 pl-10 pr-10 md:pl-[80px] md:pr-[80px]">
      {/* corner bg */}
      <img
        className="absolute top-0 left-0 w-[280px] md:w-[520px] object-contain z-0"
        src="/bg-header.png"
        alt="bg-header"
      />
      {/* content md */}
      <div className="hidden md:flex justify-between">
        <div className="pt-[80px] md:pt-[200px] z-10">
          <p className="text-sm font-bold">Welcome to my portfolio website!</p>
          <div className="flex flex-col lg:flex-row gap-2 mt-4 width-[361px]">
            <p className="text-md md:text-xl font-semibold">Hey folks, </p>
            <div className="flex items-center gap-2">
              <p className="text-md md:text-xl font-semibold">I'm</p>
              <Typed
                className="text-md md:text-xl text-primary font-semibold"
                strings={str}
                typeSpeed={120}
                loop
              />
            </div>
          </div>
          <a href="/PragatiResume.pdf" download="PragatiResume">
            <button className="btn-primary">
              Download CV
            </button>
          </a>
        </div>
      </div>
      {/* content sm */}
      <div className="md:hidden h-full">
        <div className="pt-[160px] flex flex-col items-center justify-between h-full">
          <div className="z-10">
            <p className="text-sm font-bold">Welcome to my portfolio website!</p>
            <div className="flex flex-col lg:flex-row gap-2 mt-4 width-[361px]">
              <p className="text-md md:text-xl font-semibold">Hey folks, </p>
              <div className="flex items-center gap-2">
                <p className="text-md md:text-xl font-semibold">I'm</p>
                <Typed
                  className="text-md md:text-xl text-primary font-semibold"
                  strings={str}
                  typeSpeed={120}
                  loop
                />
              </div>
            </div>
          </div>
          <a className=" mb-4 z-10" href="/PragatiResume.pdf">
            <button className="btn-primary">
              Download CV
            </button>
          </a>
        </div>
      </div>
      {/* heroImage */}
      <div>
        <img
          className="absolute bottom-0 right-0 md:right-0 w-[520px] object-contain"
          src="https://res.cloudinary.com/ani1997/image/upload/v1668288037/Pragati%20Portfolio%20Website/profile_pragati_rzrpoz.png"
          alt="pragati img"
        />
      </div>
    </div>
  );
};

export default hero;
