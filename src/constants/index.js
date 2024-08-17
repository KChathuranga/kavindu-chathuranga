import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const SKILLS = {
  softSkills: [
    "Communication",
    "Teamwork",
    "Problem-Solving",
    "Adaptability",
    "Time Management",
    "Leadership",
  ],
  technicalSkills: [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "MySQL",
    "MongoDB",
    "HTML",
    "CSS",
    "Git",
    "RESTful APIs",
    "Agile Methodologies",
  ],
};

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Real Time Chat Applications",
    image: project2,
    description:
      "An application for send messeges, make groups, add members, remove members, delete chats in real time.Here used chatengine.io.",
    technologies: ["React", "NodeJS", "React Chat Engines", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    title: "Pet Trace Web Site",
    image: project4,
    description:
      "A platform for post about lost animals. User authentication, create posts, delete posts, edit post and more functionalities.",
    technologies: ["PHP", "mySQL", "Codeigniter"],
  },
];

export const CONTACT = {
  phoneNo: "+94 77 288 9264 ",
  email: "amkchathuranga12@gmail.com",
};
