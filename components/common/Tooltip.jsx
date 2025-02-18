import React from "react";

export const Tooltip = ({ label, children }) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-secondary-white py-2 px-4 mt-2 rounded-lg min-w-max">
        <span className="whitespace-no-wrap text-sm">{label}</span>
        <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[10px] border-b-secondary-white"></div>
      </div>
    </div>
  );
};
