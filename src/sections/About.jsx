import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import myPhoto from "../assets/Images/MyIMG.png";

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
    <section id="about" ref={sectionRef} className="py-32 px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div ref={textRef} className="flex flex-col gap-8">
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
            ABOUT <br /> ME
          </h2>
          <p className="text-xl md:text-2xl text-muted leading-relaxed font-light">
            I&apos;m a full-stack developer with a passion for building high-end
            digital experiences. With over 2 years of experience, I&apos;ve
            helped startups and established brands transform their ideas into
            reality.
          </p>
          <p className="text-lg text-muted/80 leading-relaxed">
            I believe that great design is invisible. My goal is to create
            interfaces that are not only beautiful but also highly functional
            and intuitive. Every pixel and every line of code is crafted with
            purpose.
          </p>
        </div>

        <div ref={statsRef} className="grid grid-cols-1 gap-8">
          <div className="flex justify-center items-center">
            <img
              src={myPhoto}
              alt="My Photo"
              className="w-[80%] rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
