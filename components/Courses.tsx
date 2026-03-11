"use client";

import { useEffect, useRef, useState } from "react";

export default function Courses() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".course-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const courses = [
    {
      id: "jee",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      iconBg: "from-cyan-500 to-blue-600",
      hoverBgColor: "rgba(6,182,212,0.2)",
      title: "JEE Preparation",
      description:
        "Mentorship-driven IIT-JEE preparation focused on deep conceptual clarity and disciplined consistency.",
      duration: "9–12 Months",
      focus: ["Physics", "Chemistry", "Mathematics"],
    },
    {
      id: "neet",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      iconBg: "from-red-500 to-pink-600",
      hoverBgColor: "rgba(239,68,68,0.2)",
      title: "NEET Preparation",
      description:
        "Comprehensive NEET mentorship designed to build strong Biology understanding and exam accuracy.",
      duration: "9–12 Months",
      focus: ["Biology", "Physics", "Chemistry"],
    },
    {
      id: "school",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        </svg>
      ),
      iconBg: "from-purple-500 to-indigo-600",
      hoverBgColor: "rgba(139,92,246,0.2)",
      title: "School Exams Foundation",
      description:
        "Build strong academic foundations through conceptual learning and disciplined study habits.",
      duration: "Ongoing",
      focus: ["Core Subjects", "Concept Building", "Study Discipline"],
    },
    {
      id: "special",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3l2 2 3-1-1 3 2 2-3 1-1 3-2-2-3 1 1-3-2-2 3-1z" />
        </svg>
      ),
      iconBg: "from-orange-500 to-amber-600",
      hoverBgColor: "rgba(249,115,22,0.2)",
      title: "Special Courses",
      description:
        "Focused short programs for problem solving, exam strategy, and advanced concept mastery.",
      duration: "Short Term",
      focus: ["Problem Solving", "Strategy", "Advanced Topics"],
    },
  ];

  return (
    <section ref={sectionRef} id="courses" className="relative py-24 px-4 bg-black">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
            Our Courses
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Mentorship-driven programs designed to build clarity, consistency,
            emotional stability, and academic excellence.
          </p>
        </div>

        {/* 2 x 2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <a
                key={index}
                href={`/courses?courses=${course.id}`}
                className="course-card opacity-0 translate-y-10 cursor-pointer"
                style={{ transitionDelay: `${index * 120}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="p-6 rounded-3xl border border-gray-800 backdrop-blur-sm transition-all duration-500"
                  style={{
                    backgroundColor: isHovered
                      ? course.hoverBgColor
                      : "rgba(17,24,39,0.5)",
                    transform: isHovered ? "scale(1.04)" : "scale(1)",
                    borderColor: isHovered ? "#4b5563" : "#1f2937",
                  }}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${course.iconBg} flex items-center justify-center mb-4 text-white`}
                  >
                    {course.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {course.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {course.focus.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
