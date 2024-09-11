import React from "react";
import mylogo from "../../../app/favicon.ico";
import Image from "next/image";
import AppButton from "../AppButton";
import Link from "next/link";
import { navItems } from "./constances";
import { NavBarCollapse } from "./NavBarCollapse";

const Navbar = () => {
  return (
    <nav className="container fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 flex items-center justify-between py-5">
      <Link href={"/"} className="relative z-10">
        <Image src={mylogo} width={30} height={30} alt="Portfolio logo" />
      </Link>
      <div className="bg-gradient-nav w-full absolute top-0 left-0 blur-[125px] h-full"></div>
      <div className="hidden lg:flex justify-between gap-4">
        {navItems.map((item, idx) => (
          <Link
            href={item.path}
            className="text-white font-extrabold text-[24px] cursor-pointer relative"
            key={idx}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="lg:hidden block">
        <NavBarCollapse />
      </div>
      <AppButton
        bgColor={"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"}
        color={"text-white"}
        className="hidden lg:block"
      >
        Contact Me
      </AppButton>
    </nav>
  );
};

export default Navbar;
