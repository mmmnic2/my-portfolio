"use client";
import { useState } from "react";

export const SkillGroup = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <div
        className="cursor-pointer p-4 bg-white/10 backdrop-blur-lg rounded-lg shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? (
          // Collapse View
          <div className="flex gap-4 items-center">
            <div className="relative">
              <h2 className="text-xl font-semibold text-white inline-block sm:min-w-60">{title}</h2>
              <div className="absolute w-[2px] h-full top-1/2 right-0 -translate-y-1/2 hidden sm:block bg-secondary-white"></div>
            </div>
            <div className="flex items-center">
              {items.slice(0, 2).map((item, idx) => (
                <div key={idx} className="flex items-center mr-4">
                  <div className="w-6 h-6">{item.logo}</div>
                </div>
              ))}
              <span className="ml-4 text-gray-300">
                {items.length > 2 && `+${items.length - 2} more`}
              </span>
            </div>
          </div>
        ) : (
          // Expanded View
          <div className="p-4 bg-white/10 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-white">{title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {items.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-2">{item.logo}</div>
                  <p className="text-center text-white">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
