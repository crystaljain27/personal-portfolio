// @flow strict
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  return (
    <div id='projects' className="py-12 lg:py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
          Featured Projects
        </h2>
        {/* Updated subtitle for multiple domains */}
        <p className="text-lg text-gray-400 mt-4">
          A collection of my recent work and personal projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
