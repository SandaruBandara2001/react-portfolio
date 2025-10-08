// Import images (make sure to add your images to the assets folder)
// import project1Image from '../assets/images/project1.png';

export const portfolioData = {
  name: "Your Name",
  socials: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
  },
  about: {
    p1: "I'm a passionate software engineer with a knack for creating elegant and efficient solutions. My journey in tech started with a simple 'Hello World' and has since grown into a full-fledged passion for building scalable and user-friendly web applications.",
    p2: "I thrive in collaborative environments and am always eager to learn new technologies and tackle challenging problems.",
  },
  skills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "SQL & NoSQL",
    "Docker",
    "AWS",
  ],
  projects: [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce site built with the MERN stack and integrated with a payment gateway.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "#",
      repoUrl: "#",
      // image: project1Image,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates using WebSockets.",
      tags: ["React", "Firebase", "TypeScript"],
      liveUrl: "#",
      repoUrl: "#",
      // image: null,
    },
  ],
};