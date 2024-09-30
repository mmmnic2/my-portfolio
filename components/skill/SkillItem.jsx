import React from "react";

export const SkillItem = ({ item }) => {
  return (
    <div className="flex-1 flex flex-wrap lg:flex-nowrap gap-4 absolute -bottom-[90px] sm:-bottom-[150px] md:-bottom-[112px] left-0 w-full bg-[#323F5D]/30 backdrop-blur-lg border border-t-0  border-white/20 rounded-b-lg p-4">
      {item.map((tech) => (
        <div key={tech.name} className="flex flex-col items-center">
          <div className="w-4 h-4 sm:w-8 sm:h-8 md:w-14 md:h-14">{tech.logo}</div>
          <p className="text-sm text-center text-white">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};
