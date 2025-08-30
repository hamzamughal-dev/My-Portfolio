import React from "react";
import { motion } from "framer-motion";
import reactimg from "../assets/images/React_Certificate.jpg";
import prompt from "../assets/images/Prompt_Engineering .jpg";
import dl from "../assets/images/DL_Certificate.jpg";
// Sample certifications data
const certifications = [
  {
    title: "React Developer Certificate",
    image: reactimg, // put your image path here
    issuer: "Frontend Masters",
    date: "2025",
  },
  {
    title: "Deep Learning for Images with PyTorch",
    image: dl,
    issuer: "DataCamp",
    date: "2025",
  },
  {
    title: "Understanding Prompt Engineering",
    image: prompt,
    issuer: "DataCamp",
    date: "2025",
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
    scale: 0.9,
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
  hidden: { opacity: 0, y: -50, scale: 0.8 },
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
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

function Certifications() {
  return (
    <div className="min-h-screen gradient-bg text-white px-6 py-16 pb-32">
      {/* Heading */}
      <motion.h2
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ once: false }}
        className="relative text-5xl flex justify-center items-center sm:text-6xl font-extrabold mb-6 text-gradient pt-20 pb-4 tracking-wide"
      >
        My Certifications
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={descriptionVariants}
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ once: false }}
        className="text-slate-300 text-center max-w-2xl mx-auto mb-14 text-lg"
      >
        A collection of certifications I have earned during my learning journey
        in web development and related technologies.
      </motion.p>

      {/* Certifications Grid */}
      <motion.div
        key="certifications-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 } // quicker hover animation
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.6, -0.05, 0.01, 0.99],
              },
            }}
            viewport={{ once: false, margin: "-100px" }}
            className="bg-white/5 rounded-2xl overflow-hidden shadow-lg transform transition-shadow duration-150 cursor-pointer"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-auto object-contain cursor-pointer"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-white">{cert.title}</h3>
              <p className="text-sm text-slate-300 mt-2">
                {cert.issuer} • {cert.date}
              </p>
            </div>
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

export default Certifications;
