// @flow strict
import { personalData } from "@/utils/data/personal-data";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="w-full">
        <h2 className="text-center text-4xl font-bold uppercase text-white mb-10 tracking-wider">
          ABOUT ME
        </h2>

        {/* The main container is now a 'group' to control hover effects on its children */}
        <div className="relative group">
          {/* The gradient shadow div. It changes opacity on hover. */}
          <div 
            className="absolute -inset-1 rounded-lg 
                       bg-gradient-to-r from-pink-500 to-violet-600 
                       opacity-75 blur-xl 
                       transition-all duration-300
                       group-hover:opacity-100 group-hover:blur-2xl"
          ></div>
          
          {/* The main content box. It scales up on hover. */}
          <div 
            className="relative rounded-lg bg-[#0d1224] p-8 
                       transition-all duration-300
                       group-hover:scale-105"
          >
            <p className="text-gray-300 text-lg leading-relaxed text-center md:text-left">
              {personalData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
