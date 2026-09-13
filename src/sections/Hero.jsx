import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown, FileText } from "lucide-react";
import videoSrc from "../assets/Videos/BackgroundVideo.webm";
import resumePdf from "../assets/Abhishek Sisodiya.pdf";

const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const HeroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          delay: 0.8,
        }
      )
        .fromTo(
          subRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.4"
        );
    }, HeroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={HeroRef} className="relative w-full min-h-screen overflow-hidden" id="heroSec">
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/webm" />
        </video>
      </div>
      <section
        ref={containerRef}
        className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 py-24 sm:py-28 overflow-hidden"
      >
        <div className="max-w-6xl w-full text-center">
          <h1
            ref={titleRef}
            className="text-[12vw] sm:text-[10vw] md:text-[7.5vw] font-display text-center font-normal leading-[0.9] tracking-tighter mb-8 break-words"
          >
            I BUILD <br />
            <span className="italic text-center font-light opacity-80">
              HIGH-PERFORMANCE
            </span>{" "}
            <br />
            WEBSITES
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-8 sm:mt-12">
            <p
              ref={subRef}
              className="max-w-md text-base sm:text-lg md:text-xl text-neutral-400 text-center md:text-left leading-relaxed"
            >
              Focused on conversion, speed, and premium aesthetics. Helping
              brands stand out in the digital noise.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#projects"
                className="w-full sm:w-auto bg-white text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full font-display font-bold text-sm sm:text-base hover:scale-105 transition-transform duration-300 shadow-xl text-center"
              >
                VIEW PROJECTS
              </a>

              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white hover:text-black border border-white/20 px-6 sm:px-8 py-4 sm:py-5 rounded-full font-display font-semibold text-sm sm:text-base transition-all duration-300 text-center text-white"
              >
                <FileText size={18} />
                <span>RESUME</span>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <ArrowDown size={22} />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      </section>
    </div>
  );
};

export default Hero;