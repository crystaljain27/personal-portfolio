// @flow strict
import Link from 'next/link';
import { BsGithub } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";

function Collaboration() {
  return (
    <div className="py-12 lg:py-20 text-center">
      <h3 className="text-lg text-gray-400 mb-6">
        Interested in seeing more of my work or collaborating on a project?
      </h3>
      <div className="flex justify-center gap-4">
        {/* 'View All Projects' Button, now styled and linked to GitHub */}
        <a
          href="https://github.com/crystaljain27?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
        >
          <button className="px-6 py-3 bg-[#0d1224] rounded-full border-none text-center text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out flex items-center gap-2 hover:gap-3">
            <span>All Projects</span>
            <BsGithub size={18} />
          </button>
        </a>

        {/* 'Let's Collaborate' Button, now styled */}
        <Link
          href="/#contact"
          className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
        >
          <button className="px-6 py-3 bg-[#0d1224] rounded-full border-none text-center text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out flex items-center gap-2 hover:gap-3">
            <span>Collaborate</span>
            <RiContactsFill size={18} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Collaboration;
