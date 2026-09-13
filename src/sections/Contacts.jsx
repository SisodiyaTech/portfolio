import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Github,
  Linkedin,
  GraduationCap,
  Calendar,
  Award,
  MapPin,
  Mail,
  ArrowUpRight,
  FileText,
} from "lucide-react";
import resumePdf from "../assets/Abhishek Sisodiya.pdf";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Left Column: Let's Connect */}
          <div className="flex flex-col justify-between gap-10">
            <div>
              <h2 className="text-5xl sm:text-7xl md:text-8xl font-display font-normal tracking-tighter leading-[0.9] mb-8">
                LET&apos;S <br /> WORK <br />{" "}
                <span className="text-neutral-500">TOGETHER</span>
              </h2>

              <p className="text-lg sm:text-xl text-neutral-400 max-w-md leading-relaxed">
                Have a project in mind or looking for a motivated developer?
                Feel free to reach out and connect.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <a
                href="mailto:7697abhishek@gmail.com"
                className="group inline-flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 max-w-md"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform shrink-0">
                    <Mail size={22} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
                      Send an Email
                    </p>
                    <p className="text-xs sm:text-base font-semibold text-white group-hover:text-white transition-colors truncate">
                      7697abhishek@gmail.com
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-neutral-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 ml-2"
                />
              </a>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/SisodiyaTech"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all hover:scale-105"
                  aria-label="GitHub Profile"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/abhishek-sisodiya-86ba9b387/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all hover:scale-105"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href={resumePdf}
                  download="Abhishek_Sisodiya_Resume.pdf"
                  className="p-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all hover:scale-105"
                  aria-label="Download Resume"
                  title="Download Resume"
                >
                  <FileText size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Education Card (Replaced Contact Form) */}
          <div className="p-8 sm:p-12 rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-b from-[#161616] to-[#0e0e0e] border border-white/10 flex flex-col justify-between gap-8 relative overflow-hidden shadow-2xl shadow-black/80">
            {/* Ambient background glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <GraduationCap size={28} />
                </div>
                <span className="text-[11px] uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-semibold">
                  Education
                </span>
              </div>

              {/* Degree & College Info */}
              <div className="flex flex-col gap-3">
                <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
                  Degree & Major
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-medium tracking-tight text-white leading-tight">
                  Bachelor of Computer Applications (BCA)
                </h3>

                <div className="flex items-center gap-2.5 text-base sm:text-lg text-neutral-300 font-medium mt-2">
                  <MapPin size={18} className="text-neutral-400 shrink-0" />
                  <span>Devi Ahilya Vishwavidyalaya, Indore</span>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white shrink-0">
                  <Calendar size={18} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">
                    Timeline
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Jul 2023 – Jun 2026
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white shrink-0">
                  <Award size={18} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">
                    Academic Score
                  </p>
                  <p className="text-sm font-semibold text-white">
                    CGPA: 6.8 / 10
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-24 sm:mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-neutral-500 text-xs sm:text-sm uppercase tracking-widest text-center md:text-left">
          <p>© 2026 ABHISHEK SISODIYA. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
