import React from "react";
import { SkillList } from "./SkillList";

export const Skills = () => {
  return (
    <section id="skill" className="relative pt-[90px]">
      <div className="relative">
        <div className="absolute w-[200px] h-[438px] top-0 right-0 bg-[#7aebfb] blur-[190px]"></div>
        <div>
          <h3 className="text-white text-center text-4xl mb-6 font-extrabold">Skills</h3>
          <SkillList />
        </div>
      </div>
      <div className="absolute w-[200px] lg:w-[404px] h-[250px] lg:h-[800px] left-[20%] top-[5%] bg-[rgba(149,66,232,0.35)] blur-[175px] rotate-[-114.2deg] -z-10"></div>
    </section>
  );
};
