import React from "react";
import ProjectCard from "../Components/ProjectCard";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiVite } from "react-icons/si";

const projects = [
  {
    title: "Shopping Mart Web App (Frontend)",
    description:
      "A responsive shopping mart web application frontend featuring product listing, search functionality, and a user-friendly interface. Built with React and Tailwind CSS, it focuses on smooth navigation, reusable UI components, and an engaging shopping experience.",
    tech: [
      <>
        <FaReact className="inline text-cyan-400" /> React
      </>,
      <>
        <SiTailwindcss className="inline text-sky-400" /> Tailwind CSS
      </>,
    ],
    github: "https://github.com/hamzamughal-dev/Shopping-mart",
    demo: "#",
  },
  {
    title: "Custom Dashboard",
    description:
      "A customizable dashboard built with React for productivity and analytics. It includes widgets such as weather updates, notes, and to-do lists. The dashboard is designed with a modular structure, making it easy to expand, personalize, and maintain a clean, professional UI.",
    tech: [
      <>
        <FaReact className="inline text-cyan-400" /> React
      </>,
      <>
        <SiTailwindcss className="inline text-sky-400" /> Tailwind CSS
      </>,
    ],
    github: "https://github.com/hamzamughal-dev/Custom-Dashboard",
    demo: "#",
  },
  {
    title: "Clock App",
    description:
      "A digital clock application built with React that displays real-time updates and includes multiple features such as a stopwatch, countdown timer, alarm system, and world clock. Optimized with Vite for fast performance, this app demonstrates functional components, hooks, and precise state management.",
    tech: [
      <>
        <FaReact className="inline text-cyan-400" /> React
      </>,
      <>
        <SiVite className="inline text-purple-400" /> Vite
      </>,
      <>
        <SiTailwindcss className="inline text-sky-400" /> Tailwind CSS
      </>,
    ],
    github: "https://github.com/yourusername/clock-app",
    demo: "#",
  },
  {
    title: "E-Commerce Website (Full Stack)",
    description:
      "A MERN-based e-commerce platform where users can create accounts, log in securely, and perform full CRUD operations on products (add, update, delete). It includes authentication, a shopping cart system, product search, and a dynamic product catalog. This project demonstrates full-stack integration with MongoDB, Express, React, and Node.js, along with responsive UI design using Tailwind CSS.",
    tech: [
      <>
        <SiMongodb className="inline text-green-500" /> MongoDB
      </>,
      <>
        <SiExpress className="inline text-gray-300" /> Express
      </>,
      <>
        <FaReact className="inline text-cyan-400" /> React
      </>,
      <>
        <FaNodeJs className="inline text-green-500" /> Node.js
      </>,
      <>
        <SiTailwindcss className="inline text-sky-400" /> Tailwind CSS
      </>,
    ],
    github: "https://github.com/yourusername/ecommerce-fullstack",
    demo: "#",
  },
];

function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white px-6 py-16">
      <h2 className="text-5xl flex justify-center items-center sm:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 animate-pulse pt-20 pb-4">
        My Projects
      </h2>

      <p className="text-gray-300 text-center max-w-2xl mx-auto mb-14">
        A showcase of my development skills and techniques. These projects
        highlight my journey as a frontend and MERN stack developer.
      </p>

      <div className="grid grid-cols-1 gap-10 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
