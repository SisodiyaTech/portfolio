import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Menu, X, Github, Linkedin, Mail, FileText } from "lucide-react";
import resumePdf from "../assets/Abhishek Sisodiya.pdf";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.5 },
    );

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 transition-all duration-500 ${
          isScrolled
            ? "py-4 sm:py-5 backdrop-blur-md bg-[#0f0f0f]/80 border-b border-white/10 shadow-lg shadow-black/30"
            : "py-6 sm:py-8 bg-transparent border-b border-transparent"
        }`}
      >
        <a
          href="#"
          className="text-lg sm:text-xl font-display font-bold tracking-tighter cursor-pointer"
          style={{ letterSpacing: "2.5px" }}
        >
          ABHISHEK<span className="text-neutral-500">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7 text-xs font-medium uppercase tracking-widest text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={resumePdf}
            download="Abhishek_Sisodiya_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider border border-white/10 rounded-full px-4 py-2 hover:bg-white hover:text-black transition-all duration-300"
          >
            <FileText size={14} />
            <span>CV</span>
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex group items-center gap-2 text-xs font-medium uppercase tracking-widest bg-white text-black rounded-full px-5 py-2 hover:bg-neutral-200 transition-all duration-300"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>

          {/* Hamburger Button (Mobile & Tablet) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-white/10 text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col justify-between px-6 sm:px-8 py-24 sm:py-28 transition-all duration-500 lg:hidden overflow-y-auto ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-6"
        }`}
      >
        <div className="flex flex-col gap-5">
          <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-1">
            Navigation
          </p>
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-neutral-300 hover:text-white transition-colors"
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Drawer Bottom Info */}
        <div className="pt-6 mt-8 border-t border-white/10 flex flex-col gap-5">
          <div className="flex gap-3">
            <a
              href={resumePdf}
              download="Abhishek_Sisodiya_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider"
            >
              <FileText size={16} />
              <span>Download CV</span>
            </a>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 text-white font-semibold text-xs uppercase tracking-wider border border-white/10"
            >
              <span>View Resume</span>
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-1">
              Direct Contact
            </p>
            <a
              href="mailto:7697abhishek@gmail.com"
              className="text-sm text-neutral-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <Mail size={15} />
              <span>7697abhishek@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/SisodiyaTech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-sisodiya-86ba9b387/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
