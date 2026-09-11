import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import Portfolio from "../assets/Images/portfolio1.png"
import colorPicker from "../assets/Images/colorPicker.png"
import mahakalFinance from "../assets/Images/mahakalFinance.png"
import SearchEngine from "../assets/Images/SearchEngine.png"
import moneyTracker from "../assets/Images/moneyTracker.png"
import samyakClasses from "../assets/Images/samyakClasses.png"
import AITools from "../assets/Images/AI-Tools.png"

gsap.registerPlugin(ScrollTrigger);


const projects = [
  {
    id: 1,
    title: "Portfolio Project",
    category: "Portfolio Website",
    image: Portfolio,
  },
  {
    id: 2,
    title: "Color Picker",
    category: "Tool / Utility",
    image: colorPicker,
  },
  {
    id: 3,
    title: "Mahakal Finance Services",
    category: "Business Website",
    image: mahakalFinance,
  },
  {
    id: 4,
    title: "Search Engine",
    category: "Web Tool",
    image: SearchEngine,
  },
  {
    id: 5,
    title: "Money Tracker",
    category: "Finance App",
    image: moneyTracker,
  },
  {
    id: 6,
    title: "Samyak Computer Classes",
    category: "Educational Website",
    image: samyakClasses,
  },
  {
    id: 7,
    title: "AI Tools Blog",
    category: "Blog / Directory",
    image: AITools,
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((item) => {
      if (!item) return;
      
      gsap.fromTo(
        item,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
          }
        }
      );
    });
  }, []);

  return (
    <section 
      id="projects"
      ref={sectionRef}
      className="py-32 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
            SELECTED <br /> PROJECTS
          </h2>
          <div className="flex gap-4">
            <div className="w-12 h-px bg-white/30 self-center" />
            <p className="text-muted text-sm uppercase tracking-widest">
              2024 — 2026
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              ref={el => itemsRef.current[index] = el}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#1a1a1a]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display font-bold tracking-tight mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm uppercase tracking-widest">
                    {project.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <button className="text-lg font-display font-bold border-b border-white/20 pb-2 hover:border-white transition-colors">
            VIEW ALL WORK
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
