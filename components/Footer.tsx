"use client";

import { useEffect, useRef } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = footerRef.current?.querySelectorAll(".scroll-reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative pt-12 pb-4 px-4 bg-black border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10 scroll-reveal">

          {/* Brand */}
          <div className="md:col-span-2">

            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent mb-4">
              StudyVerse
            </h3>

            <p className="text-gray-400 mb-5 max-w-md">
              StudyVerse helps JEE and NEET aspirants learn smarter through
              personalized learning paths, expert mentorship, structured
              revision tools, and concept-focused preparation.
            </p>

            <div className="flex gap-4">

              {/* Instagram */}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07
                  3.252.148 4.771 1.691 4.919 4.919
                  .058 1.265.069 1.645.069 4.849
                  0 3.205-.012 3.584-.069 4.849
                  -.149 3.225-1.664 4.771-4.919 4.919
                  -1.266.058-1.644.07-4.85.07
                  -3.204 0-3.584-.012-4.849-.07
                  -3.26-.149-4.771-1.699-4.919-4.92
                  -.058-1.265-.07-1.644-.07-4.849
                  0-3.204.013-3.583.07-4.849
                  .149-3.227 1.664-4.771 4.919-4.919
                  1.266-.057 1.645-.069 4.849-.069z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569
                  c0-1.328-.027-3.037-1.852-3.037
                  -1.853 0-2.136 1.445-2.136 2.939v5.667
                  H9.351V9h3.414v1.561h.046
                  c.477-.9 1.637-1.85 3.37-1.85
                  3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@studyverse.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7
                    a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/#offers" className="text-gray-400 hover:text-white">What We Offer</a></li>
              <li><a href="/#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
              <li><a href="/#community" className="text-gray-400 hover:text-white">Community</a></li>
              <li><a href="/courses" className="text-gray-400 hover:text-white">Courses</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/coming-soon" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="/coming-soon" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-5 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 StudyVerse. All rights reserved.
          </p>
          <p className="text-yellow-200 text-sm">
            Made with ❤️ by <i className="text-yellow-400 font-bold text-base">StudyVerse Team</i>
          </p>
        </div>
      </div>
    </footer>
  );
}
