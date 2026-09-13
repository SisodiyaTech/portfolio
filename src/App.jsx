import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

import About from "./sections/About";
import Contacts from "./sections/Contacts";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Process from "./sections/Process";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import Resume from "./sections/Resume";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateRaf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateRaf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Services />
      <About />
      <Resume />
      <Process />
      <Contacts />
    </div>
  );
}

export default App;
