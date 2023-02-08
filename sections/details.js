import React, { useState } from "react";
import SkillMeter from "../components/skillMeter";

const data = {
  skills: [
    {
      title: "Figma",
      perc: 90,
    },
    {
      title: "Adobe XD",
      perc: 80,
    },
    {
      title: "Adobe Photoshop",
      perc: 70,
    },
    {
      title: "MS Excel",
      perc: 80,
    },
    {
      title: "Communication Skills",
      perc: 85,
    },
  ],
  educationDetails: [
    {
      title: "Graduation - B.Com",
      institution: "J.G. Collage of Commerce",
      place: "Hubli, Karnataka",
      startYear: "2016",
      endYear: "2019",
    },
    {
      title: "HSC - Commerce",
      institution: "J.G. Collage of Commerce",
      place: "Hubli, Karnataka",
      startYear: "2015",
      endYear: "2016",
    },
    {
      title: "SSC",
      institution: "SSRS School",
      place: "Hubli, Karnataka",
      startYear: "2013",
      endYear: "2014",
    },
  ],
  experienceDetails: [
    {
      title: "UI/UX Bootcamp",
      institution: "Digital Academy 360",
      place: "Banglore, Karnataka",
      startYear: "2022",
      endYear: "2023",
    },
    {
      title: "Finance Executive",
      institution: "Novopay",
      place: "Banglore, Karnataka",
      startYear: "2019",
      endYear: "2022",
    },
  ],
};

const details = () => {
  const [selected, setSelected] = useState(true);
  return (
    <div className="paddingSectionSmall md:paddingSectionSmall md:paddingSectionSmall md:paddingSection grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* left */}
      <div>
        <p className="text-lg lg:text-xl font-bold">Skills & Experience</p>
        <p className="text-md font-semibold mt-3 lg:mt-6">My Skills</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {data.skills.map((skill, i) => (
            <SkillMeter key={i} title={skill.title} perc={skill.perc} />
          ))}
        </div>
      </div>
      {/* right */}
      <div>
        {/* menu */}
        <div className="w-full border-primary rounded-lg border-2 text-md grid grid-cols-2 text-center">
          <div
            className={
              selected
                ? "bg-primary rounded-md text-white p-4 cursor-pointer"
                : "p-4 cursor-pointer"
            }
            onClick={() => setSelected(true)}
          >
            <p className="text-sm font-semibold">Experience</p>
          </div>
          <div
            className={
              !selected
                ? "bg-primary rounded-md text-white p-4 cursor-pointer"
                : " p-4 cursor-pointer"
            }
            onClick={() => setSelected(false)}
          >
            <p className="text-sm font-semibold">Education</p>
          </div>
        </div>
        {selected ? (
          <div className="w-full grid grid-cols-5 md:grid-cols-6 gap-8 mt-12">
            {data.experienceDetails.map((exp, i) => (
              <div className="col-span-5 flex flex-col gap-2" key={i}>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-tiny">{exp.title}</p>
                  <p className="text-primary">
                    {exp.startYear} - {exp.endYear}
                  </p>
                </div>
                <div className="h-[1px] w-full bg-gray-300" />

                <p className="font-bold">{exp.institution}</p>
                <p className="mt-[-8px]">{exp.place}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-5 md:grid-cols-6 gap-8 mt-12">
            {data.educationDetails.map((edu, i) => (
              <div className="col-span-5 flex flex-col gap-2" key={i}>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-tiny">{edu.title}</p>
                  <p className="text-primary">
                    {edu.startYear} - {edu.endYear}
                  </p>
                </div>
                <div className="h-[1px] w-full bg-gray-300" />

                <p className="font-bold">{edu.institution}</p>
                <p className="mt-[-8px]">{edu.place}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default details;
