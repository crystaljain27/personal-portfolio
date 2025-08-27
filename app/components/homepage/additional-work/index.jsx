// Located at: app/components/homepage/additional-work/index.jsx

// @flow strict
import { moreProjectsData } from '@/utils/data/more-projects';
import ProjectCard from '../projects/project-card';

const AdditionalWork = () => {
  return (
    // Reduced top padding to decrease the gap
    <div className="pt-8 pb-12 lg:pb-16">
      <div className="text-center mb-12">
        {/* Changed title to "More Projects" and kept the main styling */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
          More Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {moreProjectsData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default AdditionalWork;
