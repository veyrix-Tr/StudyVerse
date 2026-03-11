"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  // Load saved profile state
  useEffect(() => {
    const saved = localStorage.getItem("showProfile");
    if (saved === "true") setShowProfile(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("showProfile", showProfile.toString());
  }, [showProfile]);

  // Scroll detection
  useEffect(() => {
    if (pathname === "/") {
      const handleScroll = () => {
        const sections = [
          "home",
          "offers",
          "testimonials",
          "community",
          "about",
        ];

        const scrollPosition = window.scrollY + 120;

        let current = "home";

        for (const section of sections) {
          const element = document.getElementById(section);

          if (element) {
            const { offsetTop, offsetHeight } = element;

            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              current = section;
              break;
            }
          }
        }

        setActiveSection(current);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();

    if (pathname !== "/") {
      window.location.href = `/#${targetId}`;
      return;
    }

    const element = document.getElementById(targetId);

    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="StudyVerse Logo" 
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className={`nav-link ${activeSection === "home" ? "active" : ""}`}
            >
              Home
            </a>

            <a
              href="#testimonials"
              onClick={(e) => handleNavClick(e, "testimonials")}
              className={`nav-link ${activeSection === "testimonials" ? "active" : ""}`}
            >
              Testimonials
            </a>

            <a
              href="#community"
              onClick={(e) => handleNavClick(e, "community")}
              className={`nav-link ${activeSection === "community" ? "active" : ""}`}
            >
              Get in touch
            </a>
            
            <div className="w-px h-6 bg-gray-400 mx-2"></div>

            <a
              href="/courses"
              className={`nav-link ${activeSection === "courses" ? "active" : ""}`}
            >
              Courses
            </a>

            <a
              href="/about"
              className={`nav-link ${pathname === "/about" ? "active" : ""}`}
            >
              About
            </a>
          </div>

          {/* Right Side - StudyVerse Logo */}
          <div className="hidden md:flex items-center">
            <img 
              src="/logo-bg.png" 
              alt="StudyVerse" 
              className="h-12 object-contain"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              )}
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <div className="px-4 py-4 space-y-4">

            <a href="#home" onClick={(e) => handleNavClick(e,"home")} className="nav-link block">
              Home
            </a>

            <a href="#testimonials" onClick={(e) => handleNavClick(e,"testimonials")} className="nav-link block">
              Testimonials
            </a>

            <a href="#community" onClick={(e) => handleNavClick(e,"community")} className="nav-link block">
              Get in touch
            </a>

            <div className="w-full h-px bg-gray-600 my-2"></div>
            
            <a href="/courses" className="nav-link block">
              Courses
            </a>

            <a href="/about" className="nav-link block">
              About
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}