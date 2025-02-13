import React from "react";

export const Experience = () => {
  return (
    <section id="experience" className="relative text-white pt-[90px]">
      <h3 className="text-center font-extrabold text-4xl mb-6">Experience</h3>
      {/* Toast Canvas VN */}
      <div className="flex gap-3">
        <div className="text-end">
          <p>10/2024 - current <span className="invisible">1</span></p>
          <span>3 months</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="shadow-custom brightness-110 bg-primary rounded-[50%] w-5 h-5"></div>
          <div className="w-[2px] bg-white h-full"></div>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Contractor Backend Developer</h3>
          <h4 className="text-xl text-secondary-white font-bold">
            Toast Canvas VN
          </h4>
          <div>
            <span className="font-semibold">Decription</span>
            <p>
              A website for managing comic book viewing, including user
              interaction features such as liking webtoon and commenting on
              chapters. It also allows authors to publish and manage their own
              webtoon.
            </p>
          </div>
          <div className="my-4">
            <span className="font-semibold">Responsibilities</span>
            <span className="block">Backend:</span>
            <ul className="text-sm list-[disc] custom-margin-li">
              <li>
                Integrated <b>Redis</b> for <b>caching, TTL-based session management, and
                Token Blacklisting</b>, reducing database load and enhancing
                security. Ensures <b>2x faster queries</b> and <b>real-time token
                revocation</b> to prevent unauthorized access after logout.
              </li>
              <li>
                Scheduled a <b>24-hour ranking job</b> in <b>Spring Boot</b> with Pessimistic
                Locking to ensure data consistency by preventing concurrent
                updates. This guarantees accurate rankings and database
                integrity without performance loss.
              </li>
              <li>
                Using <b>MyBatis</b> with <b>XML-based configuration</b> ensures flexible and
                maintainable SQL management for complex queries. It optimizes
                performance when <b>loading webtoon chapters, searching authors,
                and categorizing webtoons</b>, making it more efficient than
                Hibernate.
              </li>
              <li>
                Developed and maintained RESTful APIs to facilitate data
                interaction between the front end and back end.
              </li>
            </ul>
          </div>
          <div>
            <span className="font-semibold">Technologies</span>
            <ul className="text-sm list-[disc] custom-margin-li mb-4">
              <li>
                Spring Boot, Spring Security, Spring Data JPA, MariaDB, Heidisql
                IDE, Redis, MyBatis.
              </li>
              <li>Docker.</li>
              <li>Git, GitHub.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* TMA */}
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
