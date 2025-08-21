import React, { useState } from "react";
import profilePic from "../assets/images/img.jpg"; // replace with your image path
import { Calendar, MapPin, GraduationCap, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

function Profile() {
  const [activeIndex, setActiveIndex] = useState(null);

  // detects mobile
  const isMobile = window.innerWidth < 768;

  const handleToggle = (idx) => {
    if (!isMobile) return; // only apply for mobile
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen gradient-bg text-white px-6 py-25">
      {/* Profile Image */}
      <motion.img
        src={profilePic}
        alt="Profile"
        className="w-[220px] h-[220px] rounded-full object-cover shadow-lg mb-8 border-4 border-emerald-500/30 
  transform transition duration-300 hover:scale-105 hover:shadow-emerald-500/50 cursor-pointer"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        onClick={() => handleToggle("profile")}
        style={
          activeIndex === "profile"
            ? { transform: "scale(1.05)", boxShadow: "0 0 25px rgba(16,185,129,0.5)" }
            : {}
        }
      />

      {/* Education Section */}
      <div className="w-full max-w-5xl space-y-8">
        {/* Bachelors */}
        <motion.div
          className="glass-effect p-6 rounded-2xl shadow-lg 
        transition duration-300 hover:bg-emerald-500/10 hover:scale-[1.02] cursor-pointer"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onClick={() => handleToggle("bachelors")}
          style={
            activeIndex === "bachelors"
              ? { transform: "scale(1.02)", background: "rgba(16,185,129,0.1)" }
              : {}
          }
        >
          <div className="text-4xl font-semibold mb-2 flex items-center">
            <GraduationCap size={60} className="inline mr-2 text-emerald-400" />
            Bachelor in Computer Science
          </div>
          <p className="text-slate-300 pt-2 pb-2">
            Punjab University College Of Information and Technology
          </p>

          <div className="flex items-center mb-2 pt-2">
            <Calendar className="inline mr-2 text-emerald-400" />
            <p className="text-slate-300">2022-2026 (Ongoing)</p>
          </div>
          <div className="flex pt-2">
            <MapPin className="inline mr-2 text-emerald-400" />
            <p className="text-slate-300 mb-2"> Lahore, Pakistan</p>
          </div>
          <h2 className="text-slate-300 text-1xl mt-1 mb-3">
            Currently pursuing a comprehensive degree in Computer Science with focus on software development, algorithms, data structures, and modern web technologies.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {[
              "Relevant Coursework: Data Structures, Algorithms, Web Development",
              "Active participation in coding competitions and hackathons",
              "Member of Computer Science Society",
              "Maintaining strong academic performance",
            ].map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-emerald-500/20 p-2 rounded-lg 
                transition duration-300 hover:bg-emerald-500/30 hover:scale-104 cursor-pointer"
                onClick={() => handleToggle("bachelors-" + idx)}
                style={
                  activeIndex === "bachelors-" + idx
                    ? { transform: "scale(1.04)", background: "rgba(16,185,129,0.3)" }
                    : {}
                }
              >
                <BookOpen className="w-5 h-5 text-amber-400 mt-1" />
                <p className="text-slate-200">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Intermediate */}
        <motion.div
          className="glass-effect p-6 rounded-2xl shadow-lg 
        transition duration-300 hover:bg-emerald-500/10 hover:scale-[1.02] cursor-pointer"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onClick={() => handleToggle("intermediate")}
          style={
            activeIndex === "intermediate"
              ? { transform: "scale(1.02)", background: "rgba(16,185,129,0.1)" }
              : {}
          }
        >
          <div className="text-4xl font-semibold mb-2 flex items-center">
            <GraduationCap size={60} className="inline mr-2 text-emerald-400" />
            Intermediate in Computer Science
          </div>
          <p className="text-slate-300 pt-2 pb-2">
            Government College University, Lahore
          </p>

          <div className="flex items-center mb-2 pt-2">
            <Calendar className="inline mr-2 text-emerald-400" />
            <p className="text-slate-300">2020-2022</p>
          </div>
          <div className="flex pt-2">
            <MapPin className="inline mr-2 text-emerald-400" />
            <p className="text-slate-300 mb-2"> Lahore, Pakistan</p>
          </div>
          <h2 className="text-slate-300 text-1xl mt-1 mb-3">
            Completed intermediate studies with a focus on Computer Science, laying the foundation for advanced programming concepts and problem-solving skills.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {[
              "Computer Science specialization with programming fundamentals",
              "Strong foundation in mathematics and logical thinking",
              "Participated in science exhibitions and competitions",
              "Developed basic programming skills in C++ and Python",
            ].map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-emerald-500/20 p-2 rounded-lg 
                transition duration-300 hover:bg-emerald-500/30 hover:scale-104 cursor-pointer"
                onClick={() => handleToggle("intermediate-" + idx)}
                style={
                  activeIndex === "intermediate-" + idx
                    ? { transform: "scale(1.04)", background: "rgba(16,185,129,0.3)" }
                    : {}
                }
              >
                <BookOpen className="w-5 h-5 text-amber-400 mt-1" />
                <p className="text-slate-200">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Matric */}
        <motion.div
          className="glass-effect p-6 rounded-2xl shadow-lg 
        transition duration-300 hover:bg-emerald-500/10 hover:scale-[1.02] cursor-pointer"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          onClick={() => handleToggle("matric")}
          style={
            activeIndex === "matric"
              ? { transform: "scale(1.02)", background: "rgba(16,185,129,0.1)" }
              : {}
          }
        >
          <div className="text-4xl font-semibold mb-2 flex items-center">
            <GraduationCap size={60} className="inline mr-2 text-emerald-400" />
            Matriculation in Science
          </div>
          <p className="text-slate-300 pt-2 pb-2">
            Moon Public Schools
          </p>

          <div className="flex items-center mb-2 pt-2">
            <Calendar className="inline mr-2 text-emerald-400" />
            <p className="text-slate-300">2017-2019</p>
          </div>
          <div className="flex pt-2">
            <MapPin className="inline mr-2 text-emerald-400" />
            <p className="text-slate-300 mb-2"> Lahore, Pakistan</p>
          </div>
          <h2 className="text-slate-300 text-1xl mt-1 mb-3">
            Completed matriculation with science group, developing strong analytical and problem-solving skills that would later support my programming journey.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {[
              "Science group with mathematics and physics focus",
              "Developed analytical thinking and problem-solving skills",
              "Active participation in academic competitions",
              "Strong foundation in logical reasoning and mathematics",
            ].map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-emerald-500/20 p-2 rounded-lg 
                transition duration-300 hover:bg-emerald-500/30 hover:scale-104 cursor-pointer"
                onClick={() => handleToggle("matric-" + idx)}
                style={
                  activeIndex === "matric-" + idx
                    ? { transform: "scale(1.04)", background: "rgba(16,185,129,0.3)" }
                    : {}
                }
              >
                <BookOpen className="w-5 h-5 text-amber-400 mt-1" />
                <p className="text-slate-200">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Profile;
