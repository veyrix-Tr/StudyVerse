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
                href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/studyverse.learn"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 hover:border-gray-500"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 2.163c-3.259 0-3.667.014-4.947.072-1.688.072-2.59.771-2.659 2.659-.058 1.28-.072 1.689-.072 4.948 0 3.259.014 3.668.072 4.948.069 1.887.971 2.586 2.659 2.659 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 1.887-.069 2.586-.971 2.659-2.659.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.069-1.888-.971-2.587-2.659-2.66-1.28-.058-1.689-.072-4.948-.072zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href={process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/veyrix-Tr/StudyVerse"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 hover:border-gray-500"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || "studyversehq@gmail.com"}`}
                className="text-gray-400 hover:text-white transition-colors flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 hover:border-gray-500"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <li><a href="/#how-it-works" className="text-gray-400 hover:text-white">What We Offer</a></li>
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
