"use client";

import React, { useState } from "react";
import { skillItems } from "./constance";
import { SkillItem } from "./SkillItem";
import { SkillItemCollapse } from "./SkillItemCollapse";
import { ChevronDown } from "../common/icons/ChevronDown";
import { ChevronLeft } from "../common/icons/ChevronLeft";

export const SkillList = () => {
  const [isExpand, setIsExpand] = useState("Language");

  const handleClick = (title) => {
    setIsExpand(title);
  };

  return (
    <div>
      {skillItems.map((item) => (
        <div
          key={item.title}
          className={`flex justify-between items-center gap-4 ${
            (isExpand === item.title && "rounded-t-xl border-b-0") ||
            "rounded-xl"
          } bg-[#323F5D] py-2 px-4 ${
            isExpand === item.title ? "mb-32" : "mb-4"
          } cursor-pointer relative`}
          onClick={() => handleClick(item.title)}
        >
          <h3 className="text-white inline-block w-52 text-nowrap text-ellipsis overflow-hidden relative">
            {isExpand !== item.title && (
              <div className="w-[1px] h-6 bg-secondary-white absolute top-1/2 right-0 -translate-y-1/2"></div>
            )}
            {item.title}
          </h3>
          {(isExpand === item.title && <SkillItem item={item.item} />) || (
            <SkillItemCollapse item={item.item} />
          )}
          <button className="w-8 h-8 text-secondary-white">
            {(isExpand === item.title && <ChevronDown />) || <ChevronLeft />}
          </button>
        </div>
      ))}
    </div>
  );
};
