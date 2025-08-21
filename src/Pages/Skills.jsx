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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white px-6 py-12">
      <main className="flex-1 flex flex-col items-center justify-start max-w-6xl mx-auto">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 animate-pulse pt-32 pb-2"
        >
          My Skills
        </motion.h1>

        {/* Animated Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 w-full">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center w-full h-64 transition-all duration-500 ease-in-out hover:bg-white/10 cursor-pointer"
              onMouseEnter={() => !isTouch && setHoveredIndex(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
              onClick={() => handleClick(idx)}
            >
              {/* Icon with glow on hover */}
              <div className="mb-4 transition-all duration-700 ease-in-out group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]">
                {skill.icon}
              </div>

              <h2 className="text-2xl font-semibold mb-2">{skill.name}</h2>
              <p className="text-gray-300 mb-2">{skill.level}</p>

              {/* Progress Bar */}
              <div
                className={`w-full h-4 bg-gray-800 rounded-full overflow-hidden transition-all duration-500 opacity-0 ${hoveredIndex === idx ? "opacity-100" : ""
                  }`}
              >
                <div
                  className="h-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700"
                  style={{ width: `${progress[idx]}%`, transition: "width 0.1s" }}
                ></div>
              </div>
              {hoveredIndex === idx && (
                <p className="text-gray-300 mt-1">{progress[idx]}%</p>
              )}
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
