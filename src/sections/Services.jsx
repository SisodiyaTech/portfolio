import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: '01',
    title: 'Performance',
    description: 'Lightning-fast loading speeds optimized for core web vitals and user retention.'
  },
  {
    number: '02',
    title: 'UX/UI Design',
    description: 'Intuitive interfaces that guide users and create memorable brand experiences.'
  },
  {
    number: '03',
    title: 'Strategy',
    description: 'Data-driven approaches to ensure your digital presence aligns with business goals.'
  },
  {
    number: '04',
    title: 'Quality',
    description: 'Clean, maintainable code built with the latest industry standards and best practices.'
  }
];

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;
      
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  return (
    <section 
      id="services"
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-8 bg-[#0f0f0f]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 sm:mb-20 gap-6 sm:gap-8">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-normal tracking-tighter">
            MY <br /> SERVICES
          </h2>
          <p className="max-w-xs text-neutral-400 text-xs sm:text-sm uppercase tracking-widest leading-relaxed">
            Specialized in creating high-end digital solutions that drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-[#0a0a0a] p-8 sm:p-10 lg:p-12 flex flex-col gap-8 sm:gap-12 group hover:bg-white hover:text-black transition-colors duration-500 cursor-default"
            >
              <span className="text-4xl font-display font-light opacity-30 group-hover:opacity-100 transition-opacity">
                {service.number}
              </span>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-display font-medium uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-neutral-400 group-hover:text-black/70 transition-colors leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
