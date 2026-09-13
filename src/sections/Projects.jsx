import { useState, useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Github } from "lucide-react";
import Portfolio from "../assets/Images/portfolio.png";
import colorPicker from "../assets/Images/colorPicker.png";
import mahakalFinance from "../assets/Images/mahakalFinance.png";
import moneyTracker from "../assets/Images/moneyTracker.png";
import noteBoox from "../assets/Images/NoteBoox.png";
import taskOwn from "../assets/Images/TaskOwn.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "NoteBoox",
    category: "Productivity / Notes",
    filterTag: "MERN Stack",
    github: "https://github.com/SisodiyaTech/NoteBoox",
    live: "https://note-boox.vercel.app/",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
    ],
    description:
      "Full-stack note management application with secure authentication, protected routes, CRUD operations, and a clean responsive interface for creating, editing, and organizing personal notes.",
    image: noteBoox,
  },
  {
    id: 2,
    title: "TaskOwn",
    category: "Productivity / Task Management",
    filterTag: "MERN Stack",
    github: "https://github.com/SisodiyaTech/TaskOwn",
    live: "https://taskown.vercel.app/",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
    ],
    description:
      "Full-stack task management application for organizing daily and special tasks with authentication, task tracking, completion status, and persistent data management through a RESTful API.",
    image: taskOwn,
  },
  {
    id: 3,
    title: "Portfolio",
    category: "Personal Website",
    filterTag: "Web Tools & Apps",
    github: "https://github.com/SisodiyaTech/portfolio",
    live: "https://portfolio-ivory-one-40.vercel.app/",
    technologies: ["React 19", "Tailwind CSS", "GSAP", "Lenis", "Vite"],
    description:
      "A high-performance modern developer portfolio built with React 19, Tailwind CSS, GSAP ScrollTrigger animations, and Lenis smooth scrolling.",
    image: Portfolio,
  },
  {
    id: 4,
    title: "Color Picker",
    category: "Tool / Utility",
    filterTag: "Web Tools & Apps",
    github: "https://github.com/SisodiyaTech/Colors_Picker_byRaz",
    live: "https://sisodiyatech.github.io/Colors_Picker_byRaz/",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Canvas API"],
    description:
      "Interactive color palette and gradient generator tool with real-time preview, hex/RGB conversion, and one-click CSS export.",
    image: colorPicker,
  },
  {
    id: 5,
    title: "Mahakal Finance Services",
    category: "Business Website",
    filterTag: "Client Websites",
    github: "https://github.com/SisodiyaTech/MahakalFinance",
    live: "https://sisodiyatech.github.io/MahakalFinance/",
    technologies: ["React", "Tailwind CSS", "GSAP", "Responsive UI"],
    description:
      "Modern corporate financial services platform offering business loans, investment consultation, and interactive financial calculators.",
    image: mahakalFinance,
  },
  {
    id: 6,
    title: "Money Tracker",
    category: "Finance App",
    filterTag: "Web Tools & Apps",
    github: "https://github.com/SisodiyaTech/MoneyTracker",
    live: "https://sisodiyatech.github.io/MoneyTracker/",
    technologies: ["React", "JavaScript", "LocalStorage", "CSS3"],
    description:
      "Personal budget and expense management application with real-time balance tracking, transaction records, and financial analytics.",
    image: moneyTracker,
  },
];

const filterCategories = [
  "All",
  "MERN Stack",
  "Web Tools & Apps",
  "Client Websites",
];

const Projects = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    return activeFilter === "All"
      ? projects
      : projects.filter((p) => p.filterTag === activeFilter);
  }, [activeFilter]);

  const visibleProjects = useMemo(() => {
    return showAll ? filteredProjects : filteredProjects.slice(0, 3);
  }, [filteredProjects, showAll]);

  useEffect(() => {
    visibleProjects.forEach((_, index) => {
      const item = itemsRef.current[index];
      if (!item) return;

      gsap.fromTo(
        item,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.05,
          ease: "power3.out",
        },
      );
    });

    ScrollTrigger.refresh();
  }, [visibleProjects]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6 sm:gap-8">
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-normal tracking-tighter">
              SELECTED <br /> PROJECTS
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-white/30" />
            <p className="text-neutral-400 text-xs sm:text-sm uppercase tracking-widest font-medium">
              2024 — 2026
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12 sm:mb-16">
          {filterCategories.map((category) => {
            const count =
              category === "All"
                ? projects.length
                : projects.filter((p) => p.filterTag === category).length;
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => {
                  setActiveFilter(category);
                  setShowAll(false);
                }}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-white text-black font-semibold shadow-lg shadow-white/10 scale-105"
                    : "bg-white/[0.04] text-neutral-400 border border-white/10 hover:border-white/25 hover:text-white"
                }`}
              >
                {category}{" "}
                <span className="text-[11px] opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (itemsRef.current[index] = el)}
              className="group flex flex-col p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#161616] to-[#101010] border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/70"
            >
              {/* Project Image (Clicks to Live Preview) */}
              <a
                href={project.live || project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl bg-[#0a0a0a] border border-white/5 block group/img"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center text-black scale-0 group-hover/img:scale-100 transition-transform duration-300 shadow-xl">
                    <ArrowUpRight size={22} />
                  </div>
                </div>
              </a>

              {/* Project Content */}
              <div className="mt-5 sm:mt-6 flex flex-col flex-1">
                {/* Category & Arrow Badge */}
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400">
                    {project.category}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0"
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-xl sm:text-2xl font-display font-medium tracking-tight text-white group-hover:text-white transition-colors mb-4 line-clamp-1 break-words"
                  title={project.title}
                >
                  {project.title}
                </h3>

                {/* Uses Technologies */}
                <div className="flex flex-col gap-2 mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-xs px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 group-hover:border-white/20 group-hover:bg-white/[0.08] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-6">
                  {project.description}
                </p>

                {/* Project Links: Live Preview & GitHub Repo */}
                <div className="pt-4 mt-auto border-t border-white/10 flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white text-neutral-300 hover:text-black border border-white/10 hover:border-white transition-all duration-300"
                    >
                      <span>Live Preview</span>
                      <ArrowUpRight
                        size={13}
                        className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                      />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/git inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white text-neutral-300 hover:text-black border border-white/10 hover:border-white transition-all duration-300"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github size={13} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length > 3 && (
          <div className="mt-20 sm:mt-24 text-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="text-base sm:text-lg font-display font-bold border-b border-white/20 pb-2 hover:border-white transition-colors cursor-pointer tracking-wider"
            >
              {showAll
                ? "SHOW LESS"
                : `VIEW MORE (${filteredProjects.length - 3} MORE)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
