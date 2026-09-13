import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download, Eye, FileText } from "lucide-react";
import myPhoto from "../assets/Images/MyIMG.png";
import resumePdf from "../assets/Abhishek Sisodiya.pdf";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    if (!textRef.current || !statsRef.current) return;

    gsap.fromTo(
      textRef.current.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      },
    );

    gsap.fromTo(
      statsRef.current.children,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
        },
      },
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 sm:py-32 px-4 sm:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div ref={textRef} className="flex flex-col gap-6 sm:gap-8">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-normal tracking-tighter">
            ABOUT <br /> ME
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 leading-relaxed font-light">
            I&apos;m a passionate Full Stack MERN Developer focused on building modern, scalable, and user-friendly web applications. I work with React.js, Node.js, Express.js, and MongoDB, and enjoy turning real-world problems into practical software solutions.
          </p>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            I have hands-on experience building projects with authentication, REST APIs, database management, responsive interfaces, and third-party API integrations. I&apos;m continuously improving my skills in backend development, system design, DSA, and modern web technologies.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={resumePdf}
              download="Abhishek_Sisodiya_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:scale-105 transition-transform shadow-lg shadow-white/10"
            >
              <Download size={16} />
              <span>Download CV</span>
            </a>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium text-xs sm:text-sm hover:bg-white/10 transition-colors"
            >
              <Eye size={16} />
              <span>View Resume</span>
            </a>
          </div>
        </div>

        <div ref={statsRef} className="grid grid-cols-1 gap-8">
          <div className="flex justify-center items-center">
            <img
              src={myPhoto}
              alt="Abhishek Sisodiya"
              className="w-full max-w-sm sm:max-w-md rounded-2xl sm:rounded-3xl border border-white/10 grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-700 ease-out shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
