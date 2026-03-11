"use client";

import { useEffect, useRef } from "react";

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll(".scroll-reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-24 px-4 bg-gradient-to-b from-black via-cyan-900/20 to-black overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="space-y-10 scroll-reveal">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500 mb-6">
              What Students Say
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              Students across India are using StudyVerse to learn smarter,
              strengthen concepts, and prepare confidently for competitive
              exams like JEE and NEET.
            </p>
          </div>

          {/* Testimonials grid */}
          <div className="pt-12 relative max-w-5xl mx-auto scroll-reveal">

            {/* Center Star (desktop only) */}
            <div className="hidden md:flex absolute top-[54%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 rounded-full items-center justify-center shadow-lg shadow-cyan-500/50 flex">
                <svg className="w-11 h-11 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>

            {/* Connecting Lines */}
            <div className="hidden md:block absolute top-[55%] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent transform -translate-y-1/2"></div>
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent transform -translate-x-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              <div className="p-8 rounded-2xl bg-gray-900/60 backdrop-blur-xl border border-gray-800/60 hover:border-cyan-500/40 hover:bg-yellow-500/10 transition-all duration-300">

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
                    AS
                  </div>

                  <div>
                    <h4 className="text-white font-bold">Aarav Sharma</h4>
                    <p className="text-gray-400 text-sm">Kota</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  “StudyVerse's personalized topic learning helped me identify
                  my weak areas and improve much faster than traditional study
                  methods. The mentors genuinely care about my progress and
                  guide me with practical strategies instead of just giving
                  more material to memorize. Because of their support, I now
                  approach JEE preparation with far more confidence.”
                </p>

              </div>

              <div className="p-8 rounded-2xl bg-gray-900/60 backdrop-blur-xl border border-gray-800/60 hover:border-cyan-500/40 hover:bg-yellow-500/10 transition-all duration-300">

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-green-600 flex items-center justify-center text-white font-bold">
                    VG
                  </div>

                  <div>
                    <h4 className="text-white font-bold">Vivek Gupta</h4>
                    <p className="text-gray-400 text-sm">Agra</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  “StudyVerse isn’t a typical NEET coaching class—it feels more
                  like a learning companion. There are no rigid schedules or
                  unnecessary pressure. Instead, you get personalized guidance,
                  smart study strategies, and a supportive environment where
                  real understanding matters more than rote learning. The
                  quizzes, concept explanations, and wellness sessions make
                  studying productive without feeling overwhelming.”
                </p>

              </div>

              <div className="p-8 rounded-2xl bg-gray-900/60 backdrop-blur-xl border border-gray-800/60 hover:border-cyan-500/40 hover:bg-yellow-500/10 transition-all duration-300">

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    RD
                  </div>

                  <div>
                    <h4 className="text-white font-bold">Riya Deshmukh</h4>
                    <p className="text-gray-400 text-sm">Pune</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  “StudyVerse made my NEET preparation much easier to manage.
                  The structured notes, visual mind maps, and extensive
                  question bank helped me revise concepts quickly without
                  getting lost in too many resources. Their NCERT-focused
                  approach ensures that every important topic is covered
                  properly. It almost feels like having a smart study partner
                  guiding me throughout the preparation.”
                </p>

              </div>

              <div className="p-8 rounded-2xl bg-gray-900/60 backdrop-blur-xl border border-gray-800/60 hover:border-cyan-500/40 hover:bg-yellow-500/10 transition-all duration-300">

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold">
                    NK
                  </div>

                  <div>
                    <h4 className="text-white font-bold">Nikhil Khanna</h4>
                    <p className="text-gray-400 text-sm">Delhi</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  “What I like most about StudyVerse is how structured yet
                  flexible the learning experience is. Instead of just rushing
                  through chapters, the platform focuses on building strong
                  conceptual foundations. The regular assessments and feedback
                  helped me track my progress clearly and improve my weak
                  areas step by step.”
                </p>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}