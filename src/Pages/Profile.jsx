import React from "react";
import profilePic from "../assets/images/img.jpg"; // replace with your image path
import { Calendar, MapPin, GraduationCap, BookOpen } from "lucide-react";

function Profile() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white px-6 py-25">
      {/* Profile Image */}
      <img
        src={profilePic}
        alt="Profile"
        className="w-50 h-50 rounded-full shadow-lg mb-8 border-4 border-gray-700 
        transform transition duration-300 hover:scale-105 hover:shadow-blue-500/50"
      />

      {/* Education Section */}
      <div className="w-full max-w-5xl space-y-8">
        {/* Bachelors */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg 
        transition duration-300 hover:bg-white/10 hover:scale-[1.02]">
          <div className="text-4xl font-semibold mb-2 flex items-center">
            <GraduationCap size={60} className="inline mr-2 text-blue-400" />
            Bachelor in Computer Science
          </div>
          <p className="text-gray-300 pt-2 pb-2">
            Punjab University College Of Information and Technology
          </p>

          <div className="flex items-center mb-2 pt-2">
            <Calendar className="inline mr-2 text-blue-400" />
            <p className="text-gray-300">2022-2026 (Ongoing)</p>
          </div>
          <div className="flex pt-2">
            <MapPin className="inline mr-2 text-blue-400" />
            <p className="text-gray-300 mb-2"> Lahore, Pakistan</p>
          </div>
          <h2 className="text-gray-300 text-1xl mt-1 mb-3">
            Currently pursuing a comprehensive degree in Computer Science with focus on software development, algorithms, data structures, and modern web technologies.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {[
              "Relevant Coursework: Data Structures, Algorithms, Web Development",
              "Active participation in coding competitions and hackathons",
              "Member of Computer Science Society",
              "Maintaining strong academic performance",
            ].map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-gray-800/40 p-2 rounded-lg 
                transition duration-300 hover:bg-gray-700/60 hover:scale-104"
              >
                <BookOpen className="w-5 h-5 text-green-400 mt-1" />
                <p className="text-gray-200">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Intermediate */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg 
        transition duration-300 hover:bg-white/10 hover:scale-[1.02]">
          <h2 className="text-4xl font-semibold mb-2 flex items-center">
            <GraduationCap size={60} className="inline mr-2 text-blue-400" />
            Intermediate in FSc Pre-Engineering
          </h2>
          <div className="flex items-center mb-2">
            <p className="text-gray-300">Government College University (GCU)</p>
          </div>
          <div className="flex items-center mb-2 pt-2">
            <Calendar className="inline mr-2 text-blue-400" />
            <p className="text-gray-300">2019-2021</p>
          </div>
          <div className="flex pt-2">
            <MapPin className="inline mr-2 text-blue-400" />
            <p className="text-gray-300 mb-2"> Lahore, Pakistan</p>
          </div>
          <h2 className="text-gray-300 mt-1 mb-3">Completed intermediate-level studies in the Faculty of Science with a focus on foundational subjects including Mathematics, Physics, and Chemistry. Built a strong academic base for further education in the field of Computer Science.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {[
              "Scored 98% marks overall",
              "Relevant Subjects: Mathematics, Physics, Chemistry",
              "Consistently maintained excellent academic performance",
              "Active participation in science exhibitions and inter-college competitions",
            ].map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-gray-800/40 p-2 rounded-lg 
                transition duration-300 hover:bg-gray-700/60 hover:scale-104"
              >
                <BookOpen className="w-5 h-5 text-green-400 mt-1" />
                <p className="text-gray-200">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
