import React from "react";
import { Code2, Github, ExternalLink } from "lucide-react";

function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <div
      className="glass-effect rounded-2xl p-6 shadow-lg 
      transition duration-300 hover:scale-[1.02] hover:bg-emerald-500/10"
    >
      {/* Title */}
      <div className="flex items-center mb-4">
        <Code2 className="text-emerald-400 mr-2" size={30} />
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-slate-300 mb-3">{description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, idx) => (
          <span
            key={idx}
            className="bg-emerald-500/20 px-3 py-1 rounded-lg text-sm text-slate-200 border border-emerald-500/30"
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
            className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors duration-300 cursor-pointer"
          >
            <Github size={20} /> Code
          </a>
        )}
        {demo && demo !== "#" && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors duration-300 cursor-pointer"
          >
            <ExternalLink size={20} /> Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
