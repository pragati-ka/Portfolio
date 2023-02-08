import React, { useEffect, useState } from "react";

const skillMeter = ({ title, perc }) => {
  const [color, setColor] = useState("");
  const colors = ["blue", "#7e32f0", "#32f0b7", "#b7f032", "#f05532"];

  useEffect(() => {
    setColor(Math.floor(Math.random() * colors.length));
  }, []);

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center justify-between text-sm font-bold">
        <p>{title}</p>
        <p>{perc}%</p>
      </div>
      <div className="w-full rounded-lg bg-gray-300">
        <div
          style={{
            background: `${colors[color]}`,
            width: `${perc}%`,
            height: "6px",
            borderRadius: "6px",
          }}
        />
      </div>
    </div>
  );
};

export default skillMeter;
