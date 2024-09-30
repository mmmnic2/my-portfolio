import socialMedia from "@/public/assets/images/social_media.png";
import music from "@/public/assets/images/music_management.png";

export const projects = [
  {
    id: 1,
    name: "Social Media",
    technologies: "Java, Spring Boot, Websocket, Spring Security, TypeScript, NextJS, Redux, TailwindCSS",
    details: {},
    image: socialMedia,
    deployment: 'https://social-media-two-ecru.vercel.app/',
    github: 'https://github.com/mmmnic2/social-media'
  },
  {
    id: 2,
    name: "Music Management",
    technologies: "Java, Spring Boot, Spring Security, JavaScript, NextJS, TailwindCSS",
    details: {},
    image: music,
    deployment: 'https://music-management-gui.vercel.app/',
    github: 'https://github.com/mmmnic2/music-manager'
  },
];
