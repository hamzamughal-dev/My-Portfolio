import React from "react";
import ProjectCard from "../Components/ProjectCard";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiVite } from "react-icons/si";
import { motion } from "framer-motion";

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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const headingVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const descriptionVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

function Projects() {
  return (
    <div className="min-h-screen gradient-bg text-white px-6 py-16 pb-32">
      {/* Animated Heading */}
      <motion.h2
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ once: false}}
        className="relative text-5xl flex justify-center items-center sm:text-6xl font-extrabold mb-6 text-gradient pt-20 pb-4 tracking-wide"
      >
        My Projects
      </motion.h2>

      {/* Animated Description */}
      <motion.p
        variants={descriptionVariants}
        initial="hidden"
        whileInView="visible"
        animate="visible"
        viewport={{ once: false}}
        className="text-slate-300 text-center max-w-2xl mx-auto mb-14 text-lg"
      >
        A showcase of my development skills and techniques. These projects
        highlight my journey as a Frontend and MERN stack developer.
      </motion.p>

      {/* Animated Projects Grid */}
      <motion.div
        key="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="grid grid-cols-1 gap-10 max-w-6xl mx-auto"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.6, -0.05, 0.01, 0.99]
              }
            }}
            viewport={{ once: false, margin: "-100px" }} 
            className="transform transition-all duration-500"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-1/4 left-10 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl animate-pulse"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-1/4 right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-xl animate-pulse"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-emerald-400/10 rounded-full blur-lg animate-pulse"
      />
    </div>
  );
}

export default Projects;
