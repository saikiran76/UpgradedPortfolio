import Image from "next/image";

import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from '@/assets/icons/star.svg'
import { HeroOrbit } from "@/components/HeroOribit";

export const HeroSection = () => {
  return (
    <section className="py-32 md:py-48 lg:py-60 relative z-5 max-w-screen overflow-x-clip">
        <div 
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            background: `url(${grainImage.src})`,
          }}
        ></div>

        <div className="absolute inset-0">

          <div className="size-[620px] ring"></div>
          <div className="size-[820px] ring"></div>
          <div className="size-[1080px] ring"></div>
          <div className="size-[1250px] ring"></div>

        </div>

        <HeroOrbit deg={-45} className="md:size-[500px] size-[250px] lg:size-[750px]">
          <StarIcon className="lg:size-32 sm:size-10 md:size-14 text-emerald-300"/>
        </HeroOrbit>

        <HeroOrbit deg={90} className="md:size-[300px] size-[150px] lg:size-[500px]">
          <StarIcon className="lg:size-20 sm:size-8 md:size-16 text-emerald-300"/>
        </HeroOrbit>

        <HeroOrbit deg={180} className="md:size-[500px] size-[250px] lg:size-[750px]">
          <StarIcon className="lg:size-32 sm:size-18 text-emerald-300"/>
        </HeroOrbit>

        <HeroOrbit deg={-115} className="md:size-[500px] size-[250px] lg:size-[750px]">
          <StarIcon className="size-28 text-emerald-300 sm:size-14"/>
        </HeroOrbit>

        <HeroOrbit deg={180} className="md:size-[300px] size-[150px] lg:size-[450px]">
          <StarIcon className="size-[6rem] text-emerald-300 sm:size-14"/>
        </HeroOrbit>

        <HeroOrbit deg={98} className="md:size-[200px] size-[100px] lg:size-[350px]">
          <StarIcon className="size-[4rem] text-emerald-300 sm:size-14"/>
        </HeroOrbit>

        <HeroOrbit deg={188} className="md:size-[150px] size-[70px] lg:size-[250px]">
          <StarIcon className="size-[3rem] text-emerald-300 sm:size-14"/>
        </HeroOrbit>

      
        
        <div className="container z-2 ">
          <div className="flex flex-col items-center">
            <Image src={memojiImage} alt="Memoji" className="size-[100px]" />
            <div>
              <div className="bg-black/90 text-white/80 px-4 py-2 border border-white/15 rounded-md text-sm font-medium flex items-center justify-center gap-5">
                <div className="bg-green-500/90 rounded-full size-2.5 relative">
                  <div className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-75"></div>
                </div>
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
