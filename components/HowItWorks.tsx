"use client";

import { useEffect, useRef } from "react";

export default function WhatWeOffer() {
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

  const offerings = [
    {
      step: "01",
      title: "Mentorship-Driven Learning",
      description:
        "Every student learns under close mentorship rather than anonymous mass lectures. Mentors guide problem solving, track progress, and help students build strong study habits."
    },
    {
      step: "02",
      title: "Conceptual Clarity First",
      description:
        "Learning focuses on deep conceptual understanding instead of memorization. Students learn the logic behind problems so they can solve unfamiliar questions confidently."
    },
    {
      step: "03",
      title: "Small Cohort Learning",
      description:
        "Students learn in carefully selected small cohorts rather than large batches. This allows individual attention, open discussion, and active participation in every session."
    },
    {
      step: "04",
      title: "Structured Practice & Feedback",
      description:
        "Students follow a disciplined cycle of learning, application, testing, correction, and reflection with continuous mentor feedback after every evaluation."
    },
    {
      step: "05",
      title: "Emotional Stability & Exam Mindset",
      description:
        "Students develop the ability to handle exam pressure, maintain consistency, and perform calmly under challenging exam conditions."
    }
  ];

  return (
    <section ref={sectionRef} id="what-we-offer" className="relative py-12 sm:py-16 lg:py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12 sm:mb-16 space-y-4 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            What We Offer
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            A mentorship-driven learning ecosystem designed to build clarity,
            consistency, and long-term academic confidence.
          </p>
        </div>

        <div className="relative">

          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/0 via-indigo-500 to-indigo-500/0"></div>

          <div className="space-y-8 sm:space-y-12">
            {offerings.map((item, index) => (
              <div
                key={index}
                className={`scroll-reveal relative flex flex-col lg:flex-row gap-6 sm:gap-8 items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className="p-6 sm:p-8 rounded-2xl bg-gray-900/80 border-2 border-indigo-500/30 hover:border-indigo-500/60 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-indigo-500/20">

                    {/* Step Number at Top */}
                    <div className="text-center mb-4">
                      <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                        {item.step}
                      </span>
                    </div>

                    <div className="text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Center Circle */}
                <div className="hidden lg:block relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/50">
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500"></div>
                    </div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block"></div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
