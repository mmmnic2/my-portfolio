import Image from "next/image";
import React from "react";
import { LinkedIn } from "../icons/LinkedIn";
import { Github } from "../icons/Github";
import { Google } from "../icons/Google";
import { Facebook } from "../icons/Facebook";

const Footer = () => {
  return (
    <div className="pt-[90px]">
      <div className="mb-[50px] h-[2px] bg-white opacity-10"></div>
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <h4 className="font-extrabold text-[24px] text-white">Profolio</h4>
        <p className="font-normal text-[14px] text-white opacity-50">
          Copyright © 2024 All rights reserved.
        </p>
        <div className="flex gap-4">
          <div className="text-white w-8 h-8">
            <LinkedIn />
          </div>
          <div className="text-white w-8 h-8">
            <Github />
          </div>
          <div className="text-white w-8 h-8">
            <Google />
          </div>
          <div className="text-white w-8 h-8">
            <Facebook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
