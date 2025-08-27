// @flow strict
import Link from 'next/link';

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-8 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        
        {/* Centered content */}
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-base">
            © Developer Portfolio by <Link target="_blank" href="https://www.linkedin.com/in/crystal-jain-a00631249" className="text-[#16f2b3] hover:underline">Crystal Jain</Link>
          </p>
          <p className="text-sm text-gray-400">
            Built with Next.js, Tailwind CSS, and deployed on Vercel.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
