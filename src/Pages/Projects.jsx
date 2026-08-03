import React from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { projectsData } from "../constants";

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
      <motion.h2
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative text-5xl flex justify-center items-center sm:text-6xl font-extrabold mb-6 text-gradient pt-20 pb-4 tracking-wide"
      >
        My Projects
      </motion.h2>

      <motion.p
        variants={descriptionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-slate-300 text-center max-w-2xl mx-auto mb-14 text-lg"
      >
        A showcase of my development skills and techniques. These projects
        highlight my journey as a Frontend and MERN stack developer.
      </motion.p>

      <motion.div
        key="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="grid grid-cols-1 gap-10 max-w-6xl mx-auto"
      >
        {projectsData.map((project, idx) => (
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
