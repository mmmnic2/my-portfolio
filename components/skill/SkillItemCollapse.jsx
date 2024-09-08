import React from "react";

export const SkillItemCollapse = ({ item }) => {
  const twoFirstElement = item.slice(0, 2);
  console.log(item.length);
  return (
    <div className="flex-1 flex items-center gap-4">
      {twoFirstElement.map((tech) => (
        <div key={tech.name} className="w-8 h-8">
          {tech.logo}
        </div>
      ))}
      {(item.length > 1 && <span className="text-white">+{item.length - 2}</span>) || null}
    </div>
  );
};
