import React from "react";

export const Tooltip = ({ label, children }) => {
  return (
    <div className="relative group">
      {children}
      <span className="absolute top-full left-1/2 transform -translate-x-1/2 whitespace-no-wrap z-10 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-secondary-white py-2 px-4 mt-2 rounded-lg">
        {label}
      </span>
    </div>
  );
};
