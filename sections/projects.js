import React, { useState } from "react";
import ProjectModal from "./projectModal";

const projectData = [
  {
    id: "music-application",
    name: "Music Application",
    posterImg:
      "https://res.cloudinary.com/ani1997/image/upload/v1668606885/Pragati%20Portfolio%20Website/b505a4fde4928edba46a9d273a22fd88_ropqyw.png",
    images: [
      {
        url: "https://res.cloudinary.com/ani1997/image/upload/v1669625177/Poofi%20App%20Sample/1_d7568h.png",
      },
      {
        url: "https://res.cloudinary.com/ani1997/image/upload/v1669625168/Poofi%20App%20Sample/2_dgxv6k.jpg",
      },
      {
        url: "https://res.cloudinary.com/ani1997/image/upload/v1669625164/Poofi%20App%20Sample/3_m0uw4t.jpg",
      },
      {
        url: "https://res.cloudinary.com/ani1997/image/upload/v1669625176/Poofi%20App%20Sample/4_kebbsx.jpg",
      },
      {
        url: "https://res.cloudinary.com/ani1997/image/upload/v1669625174/Poofi%20App%20Sample/5_kqcecx.jpg",
      },
      {
        url: "https://res.cloudinary.com/ani1997/image/upload/v1669625175/Poofi%20App%20Sample/6_wc7cm0.jpg",
      },
      {
        url: "https://res.cloudinary.com/ani1997/image/upload/v1669625185/Poofi%20App%20Sample/7_x68dyk.png",
      },
      {
        url: "https://res.cloudinary.com/ani1997/image/upload/v1669625182/Poofi%20App%20Sample/8_lqeg0n.jpg",
      },
      {
        url: "https://res.cloudinary.com/ani1997/image/upload/v1669625719/Poofi%20App%20Sample/9_yoebno.gif",
      },
    ],
    type: "uiux",
  },
  {
    id: "event-management-web-application",
    name: "Event Management Web Application",
    posterImg:
      "https://res.cloudinary.com/ani1997/image/upload/v1668606751/Pragati%20Portfolio%20Website/7baaeb551aa68c053e2f88ed8327a35b_pizobl.jpg",
    images: [
      {
        url: "https://res.cloudinary.com/ani1997/image/upload/v1668606751/Pragati%20Portfolio%20Website/7baaeb551aa68c053e2f88ed8327a35b_pizobl.jpg",
      },
    ],
    type: "caseStudy",
  },
  {
    id: "flight-booking-web-application",
    name: "Flight Booking Mobile Application",
    posterImg:
      "https://res.cloudinary.com/ani1997/image/upload/v1668606718/Pragati%20Portfolio%20Website/original-ba15dbd4e7848a18869c350ebd9dd30d_wq6blj.png",
    images: [
      {
        url: "https://res.cloudinary.com/ani1997/image/upload/v1668606718/Pragati%20Portfolio%20Website/original-ba15dbd4e7848a18869c350ebd9dd30d_wq6blj.png",
      },
    ],
    type: "uiux",
  },
  {
    id: "ecommerce-management-dashboard",
    name: "e-Commerce Management Web Dashboard",
    posterImg:
      "https://res.cloudinary.com/ani1997/image/upload/v1669732523/Pragati%20Portfolio%20Website/DashBoard_1_r0fssc.png",
    images: [
      {
        url: "https://res.cloudinary.com/ani1997/image/upload/v1669732523/Pragati%20Portfolio%20Website/DashBoard_1_r0fssc.png",
      },
    ],
    type: "uiux",
  },
];

const projects = () => {
  const [activeType, setActiveType] = useState("all");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const handleProjectClick = (item) => {
    setIsOpenModal(true);
    setSelectedProject(item);
  };

  return (
    <div className="bg-gray-50 paddingSectionSmall md:paddingSection flex flex-col gap-8 ">
      <div className="leading-none flex flex-col gap-2 text-lg lg:text-xl font-bold mb-8">
        <p>QUALITY WORK</p>
        <p className="text-tiny lg:text-lg">RECENTLY DONE PROJECTS</p>
      </div>

      <div className="flex items-center gap-8">
        <p
          className={
            activeType === "all"
              ? "text-primary border-b-2 border-b-primary cursor-pointer"
              : "cursor-pointer"
          }
          onClick={() => setActiveType("all")}
        >
          ALL
        </p>
        <p
          className={
            activeType === "uiux"
              ? "text-primary border-b-2 border-b-primary cursor-pointer"
              : "cursor-pointer"
          }
          onClick={() => setActiveType("uiux")}
        >
          UI/UX Design
        </p>
        <p
          className={
            activeType === "caseStudy"
              ? "text-primary border-b-2 border-b-primary cursor-pointer"
              : "cursor-pointer"
          }
          onClick={() => setActiveType("caseStudy")}
        >
          Case Studies
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 content-center gap-6">
        {activeType === "all" &&
          projectData.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-xl cursor-pointer hover:scale-[1.05] bg-purple transition-all duration-300"
              onClick={() => handleProjectClick(item)}
            >
              <img
                src={item.posterImg}
                alt={item.name}
                className="z-10 hover:opacity-40 transition-all duration-300"
              />
            </div>
          ))}
        {projectData
          .filter((data) => data.type === activeType)
          .map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-xl cursor-pointer bg-purple hover:scale-[1.05] transition-all duration-300 "
              onClick={() => handleProjectClick(item)}
            >
              <img
                src={item.posterImg}
                alt={item.name}
                className="z-10 hover:opacity-40 transition-all duration-300"
              />
            </div>
          ))}

        {isOpenModal && (
          <div className="fixed w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.9)] z-[99]">
            <ProjectModal
              data={selectedProject}
              setIsOpenModal={setIsOpenModal}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default projects;
