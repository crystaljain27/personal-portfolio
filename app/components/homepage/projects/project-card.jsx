// @flow strict
import Link from 'next/link';
import * as React from 'react';
import { FaCode } from 'react-icons/fa';
import { CgFolder } from "react-icons/cg";

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col justify-between h-full rounded-2xl bg-gray-900/60 p-6 border border-gray-800 shadow-xl shadow-black/20
                    transition-all duration-300 hover:border-blue-400/40 hover:shadow-blue-400/10">
      
      {/* Top part of the card (remains the same) */}
      <div>
        <div className="flex items-center gap-4 mb-5">
          <CgFolder size={36} className="text-blue-400" />
          <div>
            <p className="text-sm text-gray-500">{project.date}</p>
            <div className="flex gap-2 mt-1">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-semibold text-teal-300 bg-teal-900/50 px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>
      </div>

      {/* Bottom section with corrected alignment */}
      <div className="mt-6 flex justify-between items-end">
        <div className="flex flex-wrap gap-2 max-w-[75%]"> {/* Constrained width for tags */}
          {project.tools.slice(0, 5).map((tag) => (
            <span key={tag} className="text-xs text-gray-400 bg-gray-800 px-2.5 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        {project.code && (
          <Link href={project.code} target="_blank" rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 px-3 py-2 text-xs font-medium text-white bg-gray-800 rounded-lg
                       border border-gray-700 hover:bg-gray-700 transition-colors duration-300"
          >
            <FaCode />
            <span>Code</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
