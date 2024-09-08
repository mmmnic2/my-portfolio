import React from "react";

export const SkillItem = ({ item }) => {
  return (
    <div className="flex-1 flex gap-4 absolute -bottom-[112px] left-0 w-full bg-[#323F5D]/30 backdrop-blur-lg border border-t-0  border-white/20 rounded-b-lg p-4">
      {item.map((tech) => (
        <div key={tech.name} className="flex flex-col items-center">
          <div className="w-14 h-14">{tech.logo}</div>
          <p className="text-center text-white">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};
