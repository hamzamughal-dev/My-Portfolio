import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion"; // 👈 Import Framer Motion

import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
} from "react-icons/fa";
import { SiExpress, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "JavaScript", level: "Expert", percent: 90, icon: <FaJs size={40} color="#f7df1e" /> },
  { name: "ReactJS", level: "Advanced", percent: 75, icon: <FaReact size={40} color="#61dafb" /> },
  { name: "NodeJS", level: "Advanced", percent: 75, icon: <FaNodeJs size={40} color="#68a063" /> },
  { name: "ExpressJS", level: "Advanced", percent: 75, icon: <SiExpress size={40} color="#ffffff" /> },
  { name: "MongoDB", level: "Intermediate", percent: 60, icon: <FaDatabase size={40} color="#4db33d" /> },
  { name: "HTML/CSS", level: "Expert", percent: 96, icon: <><FaHtml5 size={30} color="#e34f26" /><FaCss3Alt size={30} color="#264de4" /></> },
  { name: "TailwindCSS", level: "Advanced", percent: 80, icon: <SiTailwindcss size={40} color="#38bdf8" /> },
  { name: "Python", level: "Intermediate", percent: 60, icon: <FaPython size={40} color="#306998" /> },
  { name: "C++", level: "Expert", percent: 94, icon: <FaCode size={40} color="#00599C" /> },
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [progress, setProgress] = useState(Array(skills.length).fill(0));
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (hoveredIndex === null) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = [...prev];
        if (newProgress[hoveredIndex] < skills[hoveredIndex].percent) {
          newProgress[hoveredIndex] += 5;
          if (newProgress[hoveredIndex] > skills[hoveredIndex].percent) {
            newProgress[hoveredIndex] = skills[hoveredIndex].percent;
          }
        } else {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 15);

    return () => clearInterval(interval);
  }, [hoveredIndex]);

  const handleMouseLeave = (index) => {
    if (!isTouch) {
      setHoveredIndex(null);
      setProgress((prev) => {
        const newProgress = [...prev];
        newProgress[index] = 0;
        return newProgress;
      });
    }
  };

  const handleClick = (index) => {
    if (isTouch) {
      if (hoveredIndex === index) {
        setHoveredIndex(null);
        setProgress((prev) => {
          const newProgress = [...prev];
          newProgress[index] = 0;
          return newProgress;
        });
      } else {
        setHoveredIndex(index);
      }
    }
  };

  return (
    <div
    key="skills-container"
    className="flex flex-col min-h-screen gradient-bg text-white px-6 py-12 pb-32">
      <main className="flex-1 flex flex-col items-center justify-start max-w-6xl mx-auto">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-5xl sm:text-6xl font-extrabold mb-12 text-gradient pt-32 pb-3 tracking-wide"
        >
          My Skills
          {/* Glowing underline */}
          {/* <span className="absolute left-1/2  -bottom-3 w-40 h-1 bg-emerald-400 rounded-full -translate-x-1/2 shadow-[0_0_15px_#34d399]"></span> */}
        </motion.h1>


        {/* Animated Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 w-full">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-2xl shadow-lg 
              transition-all duration-500 hover:scale-105 hover:bg-emerald-500/10 cursor-pointer"
              onMouseEnter={() => !isTouch && setHoveredIndex(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
              onClick={() => handleClick(idx)}
            >
              {/* Skill Icon */}
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-emerald-500/20 rounded-full">
                  {skill.icon}
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="text-2xl font-bold text-center mb-2 text-emerald-400">
                {skill.name}
              </h3>

              {/* Skill Level */}
              <p className="text-center text-slate-300 mb-4">
                {skill.level}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-slate-700/50 rounded-full h-3 mb-2">
                <div
                  className="accent-gradient h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progress[idx]}%` }}
                ></div>
              </div>

              {/* Percentage */}
              <p className="text-center text-amber-400 font-semibold">
                {progress[idx]}%
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-4xl mb-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-gradient">
            Continuous Learning & Growth
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            I'm passionate about staying up-to-date with the latest technologies and best practices.
            My skill set is constantly evolving as I explore new frameworks, tools, and methodologies
            to deliver better solutions and user experiences.
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
