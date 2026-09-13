import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Server, Database, Wrench, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    description: "Building responsive, animated, and performant user interfaces.",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "GSAP",
      "HTML5 / CSS3",
      "Responsive Design",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Developing scalable servers, secure authentication, and RESTful APIs.",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Authentication",
      "CRUD Architecture",
      "Middleware Design",
    ],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    description: "Designing schemas and managing persistent application data.",
    skills: [
      "MongoDB",
      "Mongoose ODM",
      "Data Modeling",
      "LocalStorage",
    ],
  },
  {
    title: "Tools & Deployment",
    icon: Wrench,
    description: "Modern development workflows, version control, and cloud hosting.",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Vite",
      "Vercel",
      "Render",
      "VS Code",
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 sm:py-32 px-4 sm:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 sm:mb-20 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 mb-3 font-semibold">
              <Layers size={16} />
              <span>Core Competencies</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-normal tracking-tighter">
              TECH STACK & <br /> SKILLS
            </h2>
          </div>
          <p className="max-w-md text-neutral-400 text-sm sm:text-base leading-relaxed">
            Proficient across the full MERN development stack, crafting clean backend systems and interactive modern frontends.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0d0d0d] border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/70"
              >
                <div>
                  {/* Category Icon & Title */}
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-display font-medium tracking-tight text-white mb-2">
                    {category.title}
                  </h3>

                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 group-hover:border-white/20 group-hover:bg-white/[0.08] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
