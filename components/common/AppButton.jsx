import React from "react";

const AppButton = ({ children, type, styles, bgColor, color, className }) => {
  return (
    <button
      type={type}
      className={`${bgColor} ${color} rounded-lg cursor-pointer py-2 px-4 relative hover:${bgColor}/2 ${className}`}
      style={styles}
    >
      {children}
    </button>
  );
};

export default AppButton;
