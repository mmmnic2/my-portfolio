import { CSSIcon } from "../common/icons/CSSIcon";
import { GitIcon } from "../common/icons/GitIcon";
import { HTML5Icon } from "../common/icons/HTML5Icon";
import { JavaIcon } from "../common/icons/JavaIcon";
import { JSIcon } from "../common/icons/JSIcon";
import { MongoDB } from "../common/icons/MongoDB";
import { MSSQLIcon } from "../common/icons/MSSQLIcon";
import { MySQLIcon } from "../common/icons/MySQLIcon";
import { NextJSIcon } from "../common/icons/NextJSIcon";
import { ReactIcon } from "../common/icons/ReactIcon";
import { ReactQueryIcon } from "../common/icons/ReactQueryIcon";
import { RedisIcon } from "../common/icons/RedisIcon";
import { ReduxIcon } from "../common/icons/ReduxIcon";
import { SpringIcon } from "../common/icons/SpringIcon";
import { TailwindIcon } from "../common/icons/TailwindIcon";
import { TSIcon } from "../common/icons/TSIcon";

export const skillTitle = [
  "Language",
  "Frameworks and Libraries",
  "Database Manegement",
  "Tools",
];

export const skillItems = [
  {
    title: "Language",
    item: [
      {
        name: "Java",
        logo: <JavaIcon />,
      },
      {
        name: "JavaScript",
        logo: <JSIcon />,
      },
      {
        name: "TypeScript",
        logo: <TSIcon />,
      },
      {
        name: "HTML5",
        logo: <HTML5Icon />,
      },
      {
        name: "CSS3",
        logo: <CSSIcon />,
      },
    ],
  },
  {
    title: "Frameworks and Libraries",
    item: [
      {
        name: "Spring Boot",
        logo: <SpringIcon />,
      },
      {
        name: "ReactJS",
        logo: <ReactIcon />,
      },
      {
        name: "NextJS",
        logo: <NextJSIcon />,
      },
      {
        name: "Redux",
        logo: <ReduxIcon />,
      },
      {
        name: "React Query",
        logo: <ReactQueryIcon />,
      },
      {
        name: "TailwindCSS",
        logo: <TailwindIcon />,
      },
    ],
  },
  {
    title: "Database Manegement",
    item: [
      {
        name: "MySQL",
        logo: <MySQLIcon />,
      },
      {
        name: "Microsoft SQL Server",
        logo: <MSSQLIcon />,
      },
      {
        name: "Redis",
        logo: <RedisIcon />,
      },
      {
        name: "MongoDB",
        logo: <MongoDB />,
      },
    ],
  },
  {
    title: "Tools",
    item: [
      {
        name: "Git",
        logo: <GitIcon />,
      },
    ],
  },
];
