// @flow strict
import dynamic from 'next/dynamic';
import AboutSection from "@/app/components/homepage/about";
import Collaboration from "@/app/components/homepage/collaboration";
import ContactSection from "@/app/components/homepage/contact";
import HeroSection from "@/app/components/homepage/hero-section";
import Projects from "@/app/components/homepage/projects";
import Skills from "@/app/components/homepage/skills";
import AdditionalWork from "@/app/components/homepage/additional-work";

// Dynamically import the Education component with Server-Side Rendering (SSR) turned off.
// This is the correct way to handle components that cause build errors like "document is not defined".
const Education = dynamic(() => import('@/app/components/homepage/education'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <AdditionalWork />
      <Collaboration />
      <Education />
      <ContactSection />
    </>
  );
};
