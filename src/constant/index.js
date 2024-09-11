import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

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
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
];

export const CONTACT = {
  address: "Kolkata, West Bengal, India, 700113",
  phoneNo: "+91 8292 871 422 ",
  email: "sumanbhadra04@outlook.com",
};
