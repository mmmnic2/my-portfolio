"use client";
import React, { useState } from "react";
import { XIcon } from "../icons/XIcon";
import { ListIcon } from "../icons/ListIcon";
import { navItems } from "./constances";
import Link from "next/link";

export const NavBarCollapse = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      className="text-white relative"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className=" w-8 h-8">
        {(isExpanded && <XIcon />) || <ListIcon />}
      </div>
      {(isExpanded && (
        <div className="flex flex-col gap-2 glassmorphism rounded-md absolute top-8 right-0 py-2 px-4">
          {navItems.map((nav) => (
            <Link className="px-4" href={nav.path} key={nav.name}>
              {nav.name}
            </Link>
          ))}
        </div>
      )) ||
        null}
    </div>
  );
};
