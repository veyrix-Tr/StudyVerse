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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      iconBg: "from-cyan-500 to-blue-600",
      hoverBgColor: "rgba(6,182,212,0.2)",
      title: "JEE Preparation",
      description:
        "Advanced IIT-JEE mentorship program focused on deep conceptual clarity, problem-solving mastery, and disciplined consistency.",
      duration: "9–12 Months",
      focus: ["Physics", "Chemistry", "Mathematics"],
      level: "Advanced",
      mode: "Online + Offline",
      fee: "₹45,000 - ₹75,000",
      highlights: [
        "500+ hours of live sessions",
        "10,000+ practice questions",
        "Weekly mock tests",
        "1-on-1 mentorship"
      ],
      outcomes: [
        "Complete syllabus mastery",
        "Improved problem-solving speed",
        "Better time management",
        "Rank improvement"
      ]
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
        "Comprehensive NEET mentorship designed to build strong Biology foundations, medical accuracy, and exam confidence.",
      duration: "9–12 Months",
      focus: ["Biology", "Physics", "Chemistry"],
      level: "Intermediate to Advanced",
      mode: "Online + Offline",
      fee: "₹40,000 - ₹65,000",
      highlights: [
        "450+ hours of Biology sessions",
        "8,000+ NEET questions",
        "Diagram practice",
        "Medical counseling"
      ],
      outcomes: [
        "Complete syllabus coverage",
        "Strong biological concepts",
        "Better diagram skills",
        "Medical exam confidence"
      ]
    },
    {
      id: "school",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      iconBg: "from-indigo-500 to-blue-600",
      hoverBgColor: "rgba(99,102,241,0.2)",
      title: "School Exams Foundation",
      description:
        "Build strong academic foundations through conceptual learning, disciplined study habits, and personalized guidance.",
      duration: "Ongoing",
      focus: ["Core Subjects", "Concept Building", "Study Discipline"],
      level: "Foundation",
      mode: "Online + Offline",
      fee: "₹15,000 - ₹30,000/year",
      highlights: [
        "Personalized learning pace",
        "Parent-teacher meetings",
        "Monthly progress reports",
        "Interactive methods"
      ],
      outcomes: [
        "Strong foundation",
        "Better study habits",
        "Conceptual clarity",
        "Competitive readiness"
      ]
    },
    {
      id: "special",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      iconBg: "from-orange-500 to-amber-600",
      hoverBgColor: "rgba(249,115,22,0.2)",
      title: "Special Courses",
      description:
        "Focused short-term programs for targeted improvement in problem-solving, exam strategy, and advanced concepts.",
      duration: "1-3 Months",
      focus: ["Problem Solving", "Strategy", "Advanced Topics"],
      level: "Advanced",
      mode: "Online",
      fee: "₹8,000 - ₹20,000",
      highlights: [
        "Intensive programs",
        "Expert faculty",
        "Skill development",
        "Flexible timing"
      ],
      outcomes: [
        "Enhanced problem-solving",
        "Better strategies",
        "Quick improvement",
        "Reduced anxiety"
      ]
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
                className="course-card opacity-0 translate-y-10 cursor-pointer h-full"
                style={{ transitionDelay: `${index * 120}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="p-6 rounded-3xl border border-gray-800 backdrop-blur-sm transition-all duration-500 h-full flex flex-col"
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

                  {/* Course Meta Info */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full">
                      {course.level}
                    </span>
                    <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full">
                      {course.mode}
                    </span>
                    <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full">
                      {course.duration}
                    </span>
                    <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full">
                      {course.fee}
                    </span>
                  </div>

                  {/* Focus Areas */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.focus.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <p className="text-gray-500 text-xs mb-2 font-medium">Key Highlights:</p>
                    <div className="space-y-1">
                      {course.highlights.slice(0, 2).map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                          <span className="text-gray-400 text-xs">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="mb-4">
                    <p className="text-gray-500 text-xs mb-2 font-medium">Learning Outcomes:</p>
                    <div className="space-y-1">
                      {course.outcomes.slice(0, 2).map((outcome, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-400 text-xs">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA - Push to bottom */}
                  <div className="mt-auto pt-3 border-t border-gray-800">
                    <div className="flex items-center justify-between">
                      <a
                        href={`https://studyverseacademy.testpress.in/courses/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
                      >
                        Enroll Now
                      </a>
                      <div className="flex items-center gap-1">
                        <span className="text-gray-500 text-xs">Learn More</span>
                        <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
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
