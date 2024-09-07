import React from "react";
import Image from "next/image";
import myImg from "@/public/assets/images/my_photo.png";
const About = () => {
  return (
    <section id="home" className="text-white flex gap-20 py-[110px]">
      <div className="pt-5 basis-1/2">
        <h3 className="text-bold text-4xl">
          <span className="text-secondary-white">Hi there, <br/></span> I&apos;m Hoang
          Lan
        </h3>
        <p className="text-secondary-white">
          Full-stack developer proficient in{" "}
          <strong className="text-white">Spring Boot</strong> and{" "}
          <strong className="text-white">ReactJS</strong>. Demonstrated ability
          to optimize application performance using{" "}
          <strong className="text-white">Redis</strong>. Passionate about
          crafting <strong className="text-white">user-centric</strong> and{" "}
          <strong className="text-white">efficient</strong> software solutions.
        </p>
      </div>
      <div className="mx-auto">
        <Image
          src={myImg}
          width={450}
          height={400}
          alt="My Photo"
          draggable={false}
          className="rounded-[50%] p-3 w-[450px] h-[400px] basis-1/2 bg-primary shadow-custom brightness-110 pointer-events-none"
        />
      </div>
    </section>
  );
};

export default About;
