import Image from "next/image";

import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from '@/assets/icons/star.svg'

export const HeroSection = () => {
  return (
    <section className="py-32 md:py-48 lg:py-60 relative z-0 sm:overflow-x-hidden">
      <div 
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          background: `url(${grainImage.src})`,
        }}
      ></div>

      <div className="size-[620px] ring"></div>
      <div className="size-[820px] ring"></div>
      <div className="size-[1020px] ring"></div>
      <div className="absolute left-[22%] top-[0.4rem] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute size-[750px] animate-spin [animation-duration:30s] overflow-x-hidden">
            <div className="inline-flex animate-spin [animation-duration:5s]">
            <StarIcon className="size-28 text-emerald-300"/>
        </div>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col items-center z-1 overflow-x-clip">
          <Image src={memojiImage} alt="Memoji" className="size-[100px]" />
          <div>
            <div className="bg-black/90 text-white/80 px-4 py-2 border border-white/15 rounded-md text-sm font-medium flex items-center justify-center gap-5">
              <div className="bg-green-500/90 rounded-full size-2.5"></div>
              <div>Available for new projects</div>
            </div>
          </div>
        </div>
        <div className="mt-7 max-w-lg mx-auto">
          <h1 className="text-center text-3xl md:text-5xl  font-serif mt-7 text-white/90">Building Exceptional User Experiences</h1>
        </div>
        <p className="text-center text-white/55 mt-4 max-w-2xl md:max-w-md mx-auto">
          I specialize in crafting designs into seamless experiences that has high performance. Let&apos;s discuss 👋
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-4">
          <button className="bg-transparent backdrop-blur border border-gray-500/60 text-white/95 px-6 py-4 mt-3 rounded-xl text-lg/3 font-medium inline-flex items-center justify-center gap-2">
            <span>Explore my work</span>
            <ArrowDown className="size-4" />
          </button>

          <button className="bg-white border border-gray-500/60 text-gray-900 px-4 py-3 mt-3 rounded-xl text-base font-bold inline-flex items-center justify-center gap-2">
            <span>👋 Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </section>
  );
};
