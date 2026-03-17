"use client";

import { useEffect, useRef } from 'react';

export default function Community() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const communityPlatforms = [
    {
      title: "Join the Studyverse Community",
      description: "Exclusive tips, content drops, practice questions, mentor advice — free on Telegram",
      buttonText: "Join on Telegram",
      icon: (
        <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.56l-1.46 6.87c-.11.49-.4.61-.81.38l-2.25-1.65-1.08 1.04c-.12.12-.22.22-.43.22l.15-2.27 4.16-3.76c.18-.16-.04-.25-.28-.09l-5.14 3.24-2.22-.69c-.48-.15-.49-.48.1-.71l8.68-3.34c.4-.14.75.09.62.71z"/>
        </svg>
      ),
      color: "from-blue-500 to-cyan-600",
      hoverColor: "hover:border-blue-500/60",
      link: process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/studyverse"
    },
    {
      title: "Master Studies with Our YouTube Channel",
      description: "Daily strategy tips, problem solving, conceptual questions — subscribe now!",
      buttonText: "Subscribe on YouTube",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: "from-red-500 to-pink-600",
      hoverColor: "hover:border-red-500/60",
      link: process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://youtube.com/@studyverse"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col items-center justify-center text-center mb-16 space-y-4 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold whitespace-nowrap overflow-visible">
            <span className="text-gray-200">Join Our </span><span className="gradient-text">Learning Community</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl">
            Connect with thousands of JEE & NEET aspirants. Get daily content, practice questions, and expert mentorship — completely free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mx-5">
          {communityPlatforms.map((platform, index) => (
            <div 
              key={index} 
              className="scroll-reveal group"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`p-7 rounded-3xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all duration-500 ${platform.hoverColor} hover:scale-[0.93] hover:shadow-lg transform scale-85`}>
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {platform.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {platform.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {platform.description}
                </p>
                
                {/* Button */}
                <a 
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600/70 to-green-700/10 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                >
                  {platform.buttonText}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="scroll-reveal mt-10">
          <div className="p-6 rounded-3xl border border-gray-800 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm transform scale-95">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-2">50K+</div>
                <div className="text-gray-400 text-xs">Active Students</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-400 mb-2">1000+</div>
                <div className="text-gray-400 text-xs">Daily Questions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-gray-400 text-xs">Strategy Videos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-400 text-xs">Mentor Support</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
