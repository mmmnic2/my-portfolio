"use client";
import Image from "next/image";
import Link from "next/link";
import { Github } from "../common/icons/Github";
import { Globe } from "../common/icons/Globe";
import { ProjectIcon } from "../common/icons/ProjectIcon";
import { projects } from "./constances";
import { useState } from "react";

export const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(1);
  return (
    <section id="project" className="relative pt-[90px]">
      <h3 className="font-normal text-[14px] text-secondary-white text-center">
        Projects
      </h3>
      <p className="mt-[8px] font-bold md:text-[64px] text-[40px] text-white text-center">
        Choose the project you want <br className="md:block hidden" />
        to explore
      </p>
      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
        {projects.map((project) => (
          <div
            key={project.name}
            className={`relative lg:flex-[3.5] flex-[10] flex items-center justify-center min-w-[170px] h-[400px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
            onClick={() => setIsExpanded(project.id)}
          >
            <Image
              width={758}
              height={700}
              alt="social media project"
              src={project.image}
              className="absolute w-full h-full rounded-[24px]"
            />
            <div className="absolute bottom-0 p-4 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
              <div className="flex justify-center items-center w-[60px] h-[60px] rounded-[24px] glassmorphism-01 mb-[16px]">
                <div className="w-1/2 h-1/2">
                  <ProjectIcon />
                </div>
              </div>
              <div className="flex items-center gap-3 font-normal text-[16px] leading-[20.16px] text-white uppercase">
                View Details:
                <div className="w-6 h-6">
                  <Link href={project.deployment} target="blank">
                    <Globe />
                  </Link>
                </div>
                <div className="w-6 h-6">
                  <Link href={project.github} target="blank">
                    <Github />
                  </Link>
                </div>
              </div>
              <h2 className="mt-[18px] font-semibold sm:text-[32px] text-[24px] text-white">
                {project.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
