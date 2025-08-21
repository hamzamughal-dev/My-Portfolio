import React from "react";
import { Code2, Github, ExternalLink } from "lucide-react";

function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <div
      className="bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-lg 
      transition duration-300 hover:scale-[1.02] hover:bg-white/10"
    >
      {/* Title */}
      <div className="flex items-center mb-4">
        <Code2 className="text-blue-400 mr-2" size={30} />
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-3">{description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, idx) => (
          <span
            key={idx}
            className="bg-gray-800/60 px-3 py-1 rounded-lg text-sm text-gray-200"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
          >
            <Github size={20} /> Code
          </a>
        )}
        {demo && demo !== "#" && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-green-400 hover:text-green-300"
          >
            <ExternalLink size={20} /> Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
