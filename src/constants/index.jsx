import React from "react";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiPytorch, SiPython } from "react-icons/si";

export const TITLES = ["Computer Scientist", "Full Stack Developer"];
export const NAME_CHARS = "Hamza Mughal".split("");

export const educationData = [
  {
    id: "bachelors",
    title: "Bachelor in Computer Science",
    institution: "Punjab University College Of Information and Technology",
    period: "2022-2026 (Ongoing)",
    location: "Lahore, Pakistan",
    description:
      "Currently pursuing a comprehensive degree in Computer Science with focus on software development, algorithms, data structures, and modern web technologies.",
    points: [
      "Relevant Coursework: Data Structures, Algorithms, Web Development",
      "Active participation in coding competitions and hackathons",
      "Member of Computer Science Society",
      "Maintaining strong academic performance",
    ],
    delay: 0,
  },
  {
    id: "intermediate",
    title: "Fsc Pre-Engineering",
    institution: "Government College University, Lahore",
    period: "2020-2022",
    location: "Lahore, Pakistan",
    description:
      "Completed intermediate studies with a focus on Computer Science, laying the foundation for advanced programming concepts and problem-solving skills.",
    points: [
      "Computer Science specialization with programming fundamentals",
      "Strong foundation in mathematics and logical thinking",
      "Participated in science exhibitions and competitions",
      "Developed basic programming skills in C++ and Python",
    ],
    delay: 0.2,
  },
  {
    id: "matric",
    title: "Matriculation in Science",
    institution: "Moon Public Schools",
    period: "2017-2019",
    location: "Lahore, Pakistan",
    description:
      "Completed matriculation with science group, developing strong analytical and problem-solving skills that would later support my programming journey.",
    points: [
      "Science group with mathematics and physics focus",
      "Developed analytical thinking and problem-solving skills",
      "Active participation in academic competitions",
      "Strong foundation in logical reasoning and mathematics",
    ],
    delay: 0.4,
  },
];

export const projectsData = [
  {
    title: "AgriBot – Smart Agriculture System",
    description:
      "An AI-powered smart agriculture system designed to assist farmers by analyzing crop images and providing intelligent insights. AgriBot uses a deep learning-based image classification model to identify crop conditions or diseases and supports data-driven decision-making. The system focuses on improving crop productivity, early issue detection, and promoting technology-driven sustainable farming practices.",
    tech: [
      <>
        <FaReact className="inline text-cyan-400 mr-1" /> React
      </>,
      <>
        <SiTailwindcss className="inline text-sky-400 mr-1" /> Tailwind CSS
      </>,
      <>
        <FaNodeJs className="inline text-green-500 mr-1" /> Node.js
      </>,
      <>
        <SiExpress className="inline text-gray-300 mr-1" /> Express
      </>,
      <>
        <SiMongodb className="inline text-green-500 mr-1" /> MongoDB
      </>,
      <>
        <SiPython className="inline text-yellow-400 mr-1" /> Python
      </>,
      <>
        <SiPytorch className="inline text-red-500 mr-1" /> PyTorch
      </>,
    ],
    github: "https://github.com/hamzamughal-dev/agribot",
    demo: "#",
  },
  {
    title: "Movie Explorer",
    description:
      "A responsive movie discovery application developed using React.js and TMDB REST APIs. Features search functionality, detailed movie view, trending movies, user authentication, and a favourites system built with reusable components for real-time data.",
    tech: [
      <>
        <FaReact className="inline text-cyan-400 mr-1" /> React
      </>,
      <>
        <SiTailwindcss className="inline text-sky-400 mr-1" /> Tailwind CSS
      </>,
    ],
    github: "https://github.com/hamzamughal-dev/MovieExplorer",
    demo: "#",
  },
  {
    title: "E-Commerce Website (Full Stack)",
    description:
      "A MERN-based e-commerce platform where users can create accounts, log in securely, and perform full CRUD operations on products (add, update, delete). It includes authentication, a shopping cart system, product search, and a dynamic product catalog. This project demonstrates full-stack integration with MongoDB, Express, React, and Node.js, along with responsive UI design using Tailwind CSS.",
    tech: [
      <>
        <SiMongodb className="inline text-green-500 mr-1" /> MongoDB
      </>,
      <>
        <SiExpress className="inline text-gray-300 mr-1" /> Express
      </>,
      <>
        <FaReact className="inline text-cyan-400 mr-1" /> React
      </>,
      <>
        <FaNodeJs className="inline text-green-500 mr-1" /> Node.js
      </>,
      <>
        <SiTailwindcss className="inline text-sky-400 mr-1" /> Tailwind CSS
      </>,
    ],
    github: "https://github.com/hamzamughal-dev/ecommerce-fullstack",
    demo: "#",
  },
  {
    title: "Shopping Mart Web App (Frontend)",
    description:
      "A responsive shopping mart web application frontend featuring product listing, search functionality, and a user-friendly interface. Built with React and Tailwind CSS, it focuses on smooth navigation, reusable UI components, and an engaging shopping experience.",
    tech: [
      <>
        <FaReact className="inline text-cyan-400 mr-1" /> React
      </>,
      <>
        <SiTailwindcss className="inline text-sky-400 mr-1" /> Tailwind CSS
      </>,
    ],
    github: "https://github.com/hamzamughal-dev/Shopping-mart",
    demo: "#",
  },
];
