import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FileText,
  Download,
  Eye,
  CheckCircle2,
  GraduationCap,
  Code2,
  Sparkles,
} from "lucide-react";
import resumePdf from "../assets/Abhishek Sisodiya.pdf";

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: 40, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-8 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 sm:mb-20 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 mb-3 font-semibold">
              <FileText size={16} />
              <span>Qualifications & Experience</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-normal tracking-tighter">
              CURRICULUM <br /> VITAE
            </h2>
          </div>
          <p className="max-w-md text-neutral-400 text-sm sm:text-base leading-relaxed">
            Download my resume for an in-depth summary of my education, technical capabilities, and full-stack software development experience.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Details & CTA Column */}
          <div
            ref={infoRef}
            className="lg:col-span-7 flex flex-col justify-between gap-8 sm:gap-10"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-neutral-300">
                <Sparkles size={14} className="text-amber-400" />
                <span>Available for Full-time Roles & Internships</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-medium tracking-tight text-white leading-tight">
                Abhishek Sisodiya — Full Stack Developer
              </h3>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Specializing in the MERN stack (MongoDB, Express.js, React, Node.js), modern frontend animation workflows (GSAP, Tailwind CSS), and secure RESTful backend API architectures.
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-white shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white mb-0.5">BCA Degree</h4>
                    <p className="text-xs text-neutral-400">Devi Ahilya Vishwavidyalaya, 2023–2026</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-white shrink-0">
                    <Code2 size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white mb-0.5">MERN Architecture</h4>
                    <p className="text-xs text-neutral-400">REST APIs, JWT Auth, Database Modeling</p>
                  </div>
                </div>
              </div>

              {/* Core Attributes */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Clean Code Practice",
                  "Responsive UI/UX",
                  "Git Version Control",
                  "API Integration",
                  "Database Optimization",
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs text-neutral-300 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-full font-medium"
                  >
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-white/10">
              <a
                href={resumePdf}
                download="Abhishek_Sisodiya_Resume.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-display font-bold text-sm sm:text-base hover:scale-105 hover:bg-neutral-200 transition-all duration-300 shadow-xl shadow-white/10 cursor-pointer text-center"
              >
                <Download size={18} />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/5 text-white border border-white/20 hover:border-white hover:bg-white/10 font-display font-semibold text-sm sm:text-base transition-all duration-300 cursor-pointer text-center"
              >
                <Eye size={18} />
                <span>View in Browser</span>
              </a>
            </div>
          </div>

          {/* Right Visual Document Preview Card */}
          <div ref={cardRef} className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative group p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#181818] to-[#0f0f0f] border border-white/15 shadow-2xl shadow-black/80 hover:border-white/30 transition-all duration-500">
              {/* Subtle top badge */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white tracking-wide">
                      Abhishek Sisodiya
                    </h4>
                    <p className="text-[11px] text-neutral-400">Resume.pdf • Updated 2026</p>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  Verified
                </span>
              </div>

              {/* Document Mockup View */}
              <div className="my-6 p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/5 flex flex-col gap-4 font-mono text-xs text-neutral-400">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-white font-semibold tracking-wider font-display text-sm">
                    SKILLS & COMPETENCIES
                  </span>
                  <span className="text-[10px] text-neutral-500">MERN Stack</span>
                </div>

                <div className="space-y-2 text-[11px] leading-relaxed">
                  <p>
                    <span className="text-white font-medium">Frontend:</span> React.js, Tailwind CSS, GSAP, HTML5, CSS3
                  </p>
                  <p>
                    <span className="text-white font-medium">Backend:</span> Node.js, Express.js, REST APIs, JWT
                  </p>
                  <p>
                    <span className="text-white font-medium">Database:</span> MongoDB, Mongoose, LocalStorage
                  </p>
                  <p>
                    <span className="text-white font-medium">Education:</span> BCA @ DAVV Indore (CGPA 6.8/10)
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <span>Status: Available</span>
                  <span className="text-white">India (GMT+5:30)</span>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs font-semibold text-white transition-colors text-center"
                >
                  <Eye size={14} />
                  <span>Preview</span>
                </a>
                <a
                  href={resumePdf}
                  download="Abhishek_Sisodiya_Resume.pdf"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-black hover:bg-neutral-200 text-xs font-bold transition-colors text-center"
                >
                  <Download size={14} />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
