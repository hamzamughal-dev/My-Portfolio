import React, { useState, useEffect } from "react";
import profilePic from "../assets/images/img.jpg";
import { Calendar, MapPin, GraduationCap, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { educationData } from "../constants";

function Profile() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleToggle = (idx) => {
    if (window.innerWidth >= 768) return;
    setActiveIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div
      key="profile-container"
      className="flex flex-col items-center justify-start min-h-screen gradient-bg text-white px-6 py-25"
    >
      <motion.img
        src={profilePic}
        alt="Profile"
        className="w-[220px] h-[220px] rounded-full object-cover shadow-lg mb-8 border-4 border-emerald-500/30 
  transform transition duration-300 hover:scale-105 hover:shadow-emerald-500/50 cursor-pointer"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: "-100px" }}
        onClick={() => handleToggle("profile")}
        style={
          activeIndex === "profile"
            ? {
                transform: "scale(1.05)",
                boxShadow: "0 0 25px rgba(16,185,129,0.5)",
              }
            : {}
        }
      />

      <div className="w-full max-w-5xl space-y-8">
        {educationData.map((edu) => (
          <motion.div
            key={edu.id}
            className="glass-effect p-6 rounded-2xl shadow-lg 
          transition duration-300 hover:bg-emerald-500/10 hover:scale-[1.02] cursor-pointer"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: edu.delay }}
            viewport={{ once: false, margin: "-100px" }}
            onClick={() => handleToggle(edu.id)}
            style={
              activeIndex === edu.id
                ? {
                    transform: "scale(1.02)",
                    background: "rgba(16,185,129,0.1)",
                  }
                : {}
            }
          >
            <div className="text-4xl font-semibold mb-2 flex items-center">
              <GraduationCap size={60} className="inline mr-2 text-emerald-400" />
              {edu.title}
            </div>
            <p className="text-slate-300 pt-2 pb-2">{edu.institution}</p>

            <div className="flex items-center mb-2 pt-2">
              <Calendar className="inline mr-2 text-emerald-400" />
              <p className="text-slate-300">{edu.period}</p>
            </div>
            <div className="flex pt-2">
              <MapPin className="inline mr-2 text-emerald-400" />
              <p className="text-slate-300 mb-2"> {edu.location}</p>
            </div>
            <h2 className="text-slate-300 text-1xl mt-1 mb-3">
              {edu.description}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {edu.points.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-emerald-500/20 p-2 rounded-lg 
                  transition duration-300 hover:bg-emerald-500/30 hover:scale-104 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggle(`${edu.id}-${idx}`);
                  }}
                  style={
                    activeIndex === `${edu.id}-${idx}`
                      ? {
                          transform: "scale(1.04)",
                          background: "rgba(16,185,129,0.3)",
                        }
                      : {}
                  }
                >
                  <BookOpen className="w-5 h-5 text-amber-400 mt-1" />
                  <p className="text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
