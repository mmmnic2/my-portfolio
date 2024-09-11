import React from "react";

export const Experience = () => {
  return (
    <section id="experience" className="relative text-white pt-[90px]">
      <h3 className="text-center font-extrabold text-4xl mb-6">Experience</h3>
      <div className="flex gap-3">
        <div className="text-end">
          <p>4/2024 - 7/2024</p>
          <span>3 months</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="shadow-custom brightness-110 bg-primary rounded-[50%] w-5 h-5"></div>
          <div className="w-[2px] bg-white h-full"></div>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Intern Fullstack Developer</h3>
          <h4 className="text-xl text-secondary-white font-bold">
            TMA Solutions
          </h4>
          <div>
            <span className="font-semibold">Decription</span>
            <p>
              The restaurant management system is designed to assist customers
              in managing two business areas:
            </p>
            <ul className="text-sm list-[disc] custom-margin-li">
              <li>
                Back office: managing inventory, warehouse operations, product
                management, personnel management, and viewing statistics by
                month, quarter, and year.
              </li>
              <li>
                Storefront: managing table reservations, ordering food,
                payments, and vouchers.
              </li>
            </ul>
          </div>
          <div className="my-4">
            <span className="font-semibold">Responsibilities</span>
            <span className="block">Backend:</span>
            <ul className="text-sm list-[disc] custom-margin-li">
              <li>
                Utilized Redis to implement caching mechanisms, optimizing the
                application to handle high traffic efficiently.
              </li>
              <li>
                Revamping the database design to better support data editing in
                the existing system
              </li>
              <li>
                Developed and maintained RESTful APIs to facilitate data
                interaction between the front end and back end.
              </li>
            </ul>
            <span className="block">Frontend:</span>
            <ul className="list-[disc] custom-margin-li">
              <li>
                Coded layouts and interactive elements using Nextjs to ensure
                seamless user interaction.
              </li>
            </ul>
          </div>
          <div>
            <span className="font-semibold">Technologies</span>
            <ul className="text-sm list-[disc] custom-margin-li">
              <li>
                Spring Boot, Spring Security, Spring Data JPA, MySQL, Redis.
              </li>
              <li> NextJS, React Query, Redux, Material UI.</li>
              <li>Git, Gitlab.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute w-[200px] h-[200px] md:w-[304px] md:h-screen left-[30%] top-[10%] bg-[#2d4898bf] blur-[200px] rotate-[-53.13deg] "></div>
    </section>
  );
};
