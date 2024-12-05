import darkSaasLandingPage from "@/assets/images/P1.png";
import lightSaasLandingPage from "@/assets/images/BS.png";
import aiStartupLandingPage from "@/assets/images/collab.png";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import alertImage from "@/assets/images/alert.png"
import { Github } from 'lucide-react'; 
import grainImage from '@/assets/images/grain.jpg'
import Image from "next/image";
import Link from "next/link";

const portfolioProjects = [
  {
    "company": "Hava Havai (Product Startup)",
    "year": "2024",
    "title": "SDE Intern Project",
    "results": [
        { "title": "Developed a core notification feature using Node.js to enhance user engagement with real-time updates enhancing the user experiences." },
        { "title": "Collaborated with stakeholders to gather, document, and analyze requirements, ensuring alignment with project goals." }
    ],
    "link": "",
    "github": "",
    "image": alertImage
  },
  {
    company: "Personal Project #1",
    year: "2024",
    title: "Saas Landing Page",
    results: [
      { title: "Nextjs" },
      { title: "Tailwind CSS" },
      { title: "Lucide & Pixel Perfect, Eye Catching Frontend & optimized" },
      { title: "Work In Progress.. 🏗️" },
    ],
    link: "https://landing-five-beta-80.vercel.app/",
    github: "https://github.com/saikiran76/Landing",
    image: darkSaasLandingPage,
  },
  {
    company: "Excalidraw Open Source",
    year: "2024",
    title: "Brain Storming AI feature",
    results: [
      { title: "Generate some interesting questions" },
      { title: "Based on the content of your canvas" },
      { title: "Note: Added this feature to the existing Excalidraw Open Source project personally (in a private repo) since I am a big fan of this project :)" },
      { title: "My own digital canvas application is right below and going to have new features added soon..🚀" },
    ],
    link: "https://edbs-six.vercel.app/",
    image: lightSaasLandingPage,
  },
  {
    "company": "Collabboard 2.0",
    "year": "2024",
    "title": "Real-time Collaborative Drawing Platform",
    "results": [
        { "title": "Developed a real-time collaborative drawing tool supporting multiple users with live mouse tracking." },
        { "title": "Implemented room management with unique room IDs, persistent state, and 12-user limit." },
        { "title": "Built a Node.js backend for room-based WebSocket communication, ensuring low-latency updates." }
    ],
    "link": "https://collabboard-2-0.vercel.app/",
    "github": "https://github.com/saikiran76/Collabboard-2.0",
    "image": aiStartupLandingPage
},

{
  "company": "Many more to come..",
  "year": "",
  "title": "",
  "results": [
      { "title": "" },
      { "title": "" },
      { "title": "" }
  ],
  "link": "",
  "github": "",
  "image": ""
},



];

export const ProjectsSection = () => {
  return (
  <section>
    <div className="container">
      {/* <div className="flex flex-col gap-10 justify-center items-center"> */}
        {/* <div className="flex flex-col justify-center items-center"> */}
          <div className="flex justify-center">
            <p className="text-center tracking-widest font-semibold bg-gradient-to-r from-emerald-300 to-sky-500 uppercase bg-clip-text text-transparent">Real World Projects</p>
          </div>
         <h2 className="text-3xl lg:text-5xl font-normal text-white text-center mt-5 font-serif">Featured Projects</h2>
         <p className="text-white/20 mt-3 text-lg lg:text-xl max-w-lg mx-auto text-center">
           See how I transformed concepts into engaging experiences.
         </p>
        {/* </div> */}
        <div className="mt-6 flex flex-col gap-16 mb-5">
          {portfolioProjects.map((project, projectIndex)=>(
            <div className="px-5 py-8 rounded-3xl bg-gray-800 z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl backdrop-blur border border-white/30 after:outline-white/20 p-8 sticky top-16" key={project.link}
            style={{
              top: `calc(64px  + ${projectIndex * 30}px)`
              
            }}>
              <div className="absolute inset-0 -z-10 opacity-5">
                <Image src={grainImage} alt="grain" className="w-full h-full object-cover"/>
              </div>
              <div className="flex">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-500 inline-flex gap-2 justify-center items-center uppercase font-bold tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
              </div>
              <p className="text-xl font-semibold mt-2">{project.title}</p>
              <hr className="border-t-2 border-white/5 mt-4"/>
              <ul className="mt-4 text-white/50 text-sm flex flex-col gap-4">
              {project.results.map((res)=>(
                <li className="mb-2 flex gap-2 items-center" key={res.title}>
                  <CheckIcon className="size-4"/>
                  <span>{res.title}</span>
                </li>
              ))}
              </ul>
              {/* <div className="absolute z-20"> */}
              {project.title === "SDE Intern Project" || project.company === "Many more to come.." ? <div></div> : (<div className="flex flex-col gap-4 justify-center mt-4">
                <a href={project.link}>
                
              <button className="bg-white text-black px-4 py-2 rounded-xl w-[88%] md:w-[96.5%] font-bold inline-flex items-center justify-center gap-2 cursor-pointer hover:bg-gradient-to-r hover:from-bg-neutral-100 hover:to-bg-neutral-200 transition duration-300 absolute z-20">Visit Live Site
                <ArrowUpRightIcon className="size-4"/>

                
              </button>
              </a>

              <button className="bg-white text-black px-4 py-2 rounded-xl w-full font-bold inline-flex items-center justify-center gap-2 cursor-pointer mt-8">Visit Github Repo
                <Github className="size-4"/>
              </button>
              </div>)}
              {/* </div> */}
              
              <div>
                <Image className="mt-4 -mb-4 rounded-tl-3xl rounded-tr-3xl border border-white/10" src={project.image} alt={project.title}/>
              </div>
            </div>
            
          ))}
          <div className="max-w-[30rem] mx-auto absolute top-[40rem]">
            <p className="text-white/50 text-sm text-center">
              And many more will be added progressively...🚀 stay tuned!
            </p>
          </div>
        </div>
        
    </div>
    {/* </div> */}
  </section>
);
};
