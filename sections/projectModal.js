import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
const projectModal = ({ data, setIsOpenModal }) => {
  return (
    <div className="relative flex items-center h-screen flex-col overflow-y-scroll p-4 pl-0 pr-0 md:paddingModal z-40">
      <div
        className="fixed top-3 right-3 text-white cursor-pointer text-md"
        onClick={() => {
          setIsOpenModal(false);
        }}
      >
        <AiOutlineCloseCircle />
      </div>
      <div>
        <div>
          <p className="p-4 pt-0 prb0 text-white text-sm font-bold mb-4 max-w-[300px]">
            {data.name}{"\n"}
            {data.type === "uiux" ? "UI/UX Concept" : "Case Study"}
          </p>
        </div>
        {data.images.map((image, index) => (
          <img src={image.url} alt="" key={index} className="w-screen" />
        ))}
      </div>
    </div>
  );
};

export default projectModal;
