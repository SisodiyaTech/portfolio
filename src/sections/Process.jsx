import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: 'Discovery',
    description: 'We dive deep into your goals, target audience, and market landscape to build a solid foundation.'
  },
  {
    title: 'Design',
    description: 'Creating high-fidelity prototypes and visual concepts that align with your brand identity.'
  },
  {
    title: 'Development',
    description: 'Transforming designs into high-performance, responsive code using the latest technologies.'
  },
  {
    title: 'Delivery',
    description: 'Rigorous testing and optimization before launching your project to the world.'
  }
];

const Process = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    stepsRef.current.forEach((step) => {
      if (!step) return;
      
      gsap.fromTo(
        step,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  return (
    <section 
      id="process"
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-8 bg-[#0f0f0f]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-normal tracking-tighter mb-6">
            MY PROCESS
          </h2>
          <p className="text-neutral-400 uppercase tracking-widest text-xs sm:text-sm font-medium">
            How I bring your vision to life
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          <div className="flex flex-col gap-12 lg:gap-0">
            {steps.map((step, index) => (
              <div 
                key={index}
                ref={el => stepsRef.current[index] = el}
                className="flex flex-col lg:flex-row items-center gap-6 lg:gap-20 lg:mb-20 last:mb-0"
              >
                {/* Desktop Left Side */}
                <div className="hidden lg:block flex-1 text-right">
                  {index % 2 === 0 && (
                    <div className="pr-12">
                      <h3 className="text-2xl sm:text-3xl font-display font-medium mb-4 uppercase tracking-tight text-white">
                        {step.title}
                      </h3>
                      <p className="text-neutral-400 leading-relaxed max-w-md ml-auto text-sm sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Center Step Badge */}
                <div className="relative z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-display font-bold text-xl shadow-lg shadow-white/10 shrink-0">
                  {index + 1}
                </div>

                {/* Desktop Right Side */}
                <div className="hidden lg:block flex-1 text-left">
                  {index % 2 !== 0 && (
                    <div className="pl-12">
                      <h3 className="text-2xl sm:text-3xl font-display font-medium mb-4 uppercase tracking-tight text-white">
                        {step.title}
                      </h3>
                      <p className="text-neutral-400 leading-relaxed max-w-md mr-auto text-sm sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Mobile Content View (Clean single render without duplicates) */}
                <div className="block lg:hidden text-center max-w-md mx-auto">
                  <h3 className="text-2xl font-display font-medium mb-3 uppercase tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
