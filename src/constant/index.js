import shorturl from "../assets/projects/Mini_URL.png";
import metube from "../assets/projects/metube.png";
import skecho from "../assets/projects/skecho.png";
import logoWhite from "../assets/logoWhite.webp";

import college from "../assets/college1.png";
import highSec from "../assets/high-sec.png";
import school from "../assets/school.png";

export const HERO_CONTENT = `Highly motivated and results-oriented B. Tech student with a strong foundation in programming and a passion for crafting
efficient, scalable software & web solutions. Finalist in the prestigious Smart India Hackathon, demonstrating exceptional problemsolving and teamwork skills.
`;

export const ABOUT_TEXT = "";
export const EDUCATION = [
  {
    title: "Bachelor of Technology",
    image: college,
    spec: ["Computer Science in Engineering"],
    year: "2021 - Present",
    institute: "Maulana Abul Kalam Azad University of Technology, W.B.",
    percentage: "76.70%",
  },
  {
    title: "Higher Secondary ",
    image: highSec,
    spec: ["Mathematics", "Physics", "Chemistry"],
    year: "2019 - 2021",
    institute: "Savitri Devi DAV Public School, Jamtara,JH ",
    percentage: "83.60%",
  },
  {
    title: "Secondary",
    image: school,
    spec: [],
    year: "2019",
    institute: "Savitri Devi DAV Public School, Jamtara,JH ",
    percentage: "90.00%",
  },
];

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "Youtube Clone",
    image: metube,
    description:
      "A user interface similar to YouTube, including features like a video feed, search bar, video player, and sidebar with recommendations, just like the YouTube experience.",
    technologies: ["React", "Tailwind", "YouTube Data API v3"],
    url: "https://metube-lite.netlify.app/",
    github: "https://github.com/Sumanbhadra/MeTube",
  },
  {
    title: "Portfolio Website",
    image: logoWhite,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind", "Framer Motion"],
    url: "https://sumanbhadra.netlify.app/",
    github: "https://github.com/Sumanbhadra/Portfolio",
  },
  {
    title: "Skecho",
    image: skecho,
    description:
      "Skecho Together is an interactive website where you can spend quality time with your loved ones by doodling, guessing words, and chatting in real-time. Create private rooms, express creativity through sketches, and share laughter over live voice chat. Perfect for all ages, it's a fun way to bond, compete, and make unforgettable memories! 🎨🗣",
    technologies: [
      "React",
      "Tailwind",
      "Node.js",
      "Express.js",
      "Socket.io",
      "Canvas API",
    ],
    url: "https://skecho.netlify.app/",
    github: "https://github.com/Sumanbhadra/Skecho",
  },
  {
    title: "URL Shortener",
    image: shorturl,
    description:
      "A URL shortener web application that converts long URLs into short, easy-to-share links. Users can also view the number of times a link has been clicked.",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB", "Express.js"],
    url: "",
    github: "https://github.com/Sumanbhadra/URL-Shortner",
  },
];

export const CONTACT = {
  address: "Kolkata, West Bengal, India, 700113",
  phoneNo: "+91 629 189 8703 ",
  email: "bhadrasuman04@gmail.com",
};
