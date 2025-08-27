// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload, MdEmail } from "react-icons/md"; // <-- Import the Email icon
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";


function HeroSection() {
  const resumeUrl = "/Crystal-Jain-Resume.pdf"; // Define the resume path

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero Background"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />


      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-12 gap-y-8">
        {/* Left Column: Text Content */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is {' '}
            <span className=" text-pink-500">{personalData.name}</span>
            {`, I'm a Professional `}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>
            .
          </h1>


          {/* Social Icons Container */}
          <div className="my-12 flex items-center gap-5">
            {personalData.github && (
              <Link href={personalData.github} target='_blank' className="transition-all text-pink-500 hover:scale-125 duration-300">
                <BsGithub size={30} />
              </Link>
            )}
            {personalData.linkedIn && (
              <Link href={personalData.linkedIn} target='_blank' className="transition-all text-pink-500 hover:scale-125 duration-300">
                <BsLinkedin size={30} />
              </Link>
            )}
            {personalData.leetcode && (
              <Link href={personalData.leetcode} target='_blank' className="transition-all text-pink-500 hover:scale-125 duration-300">
                <SiLeetcode size={30} />
              </Link>
            )}
            {/* New Email Icon */}
            {personalData.email && (
              <a href={`mailto:${personalData.email}`} target='_blank' className="transition-all text-pink-500 hover:scale-125 duration-300">
                <MdEmail size={30} />
              </a>
            )}
          </div>


          {/* Buttons Container */}
          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Resume</span>
                <MdDownload size={16} />
              </button>
            </a>
          </div>
        </div>
        
        {/* Right Column: Your SVG Image */}
        <div className="order-1 lg:order-2 flex items-center justify-center">
          <Image
            src="/hero-image.svg"
            width={450}
            height={450}
            alt="Developer illustration"
          />
        </div>
      </div>
    </section>
  );
};


export default HeroSection;
