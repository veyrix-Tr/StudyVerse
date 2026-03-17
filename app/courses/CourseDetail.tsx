"use client";

import { Course } from './courseContent';

interface CourseDetailProps {
  course: Course;
}

export default function CourseDetail({ course }: CourseDetailProps) {
  return (
    <>
      <div className="min-h-screen bg-black">
        
        <main className="pt-28 px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <a href="/courses" className="inline-flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-400 hover:text-white transition-all duration-300 group">
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-sm font-medium">Back to Courses</span>
              </a>
            </div>
            
            {/* Course Header */}
            <div className="text-center mb-12">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1 pr-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${course.iconBg} flex items-center justify-center text-white text-3xl font-bold flex-shrink-0`}>
                      {course.title.charAt(0)}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 text-left">
                      {course.title}
                    </h1>
                  </div>
                  <p className="text-lg text-gray-400 max-w-3xl leading-relaxed text-left mb-6">
                    {course.description}
                  </p>
                  
                  {/* Course Meta Info - Shifted with heading */}
                  <div className="flex flex-wrap gap-3 text-gray-300 text-left">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/50 rounded-full">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/50 rounded-full">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium text-sm">{course.level}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/50 rounded-full">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="font-medium text-sm">{course.mode}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/50 rounded-full">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                      <span className="font-medium text-sm">{course.fee}</span>
                    </div>
                  </div>
                </div>
                
                {/* Key Features - Top Right - More Vertical */}
                <div className="hidden lg:block w-72 flex-shrink-0">
                  <div className="p-4 rounded-2xl border border-gray-800 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm">
                    <h3 className="text-lg font-bold text-white mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {course.highlights.slice(0, 4).map((highlight: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300 text-sm leading-tight">{highlight.length > 40 ? highlight.substring(0, 40) + '...' : highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Mobile Key Features */}
              <div className="lg:hidden mb-6">
                <div className="p-4 rounded-2xl border border-gray-800 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm">
                  <h3 className="text-lg font-bold text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {course.highlights.slice(0, 3).map((highlight: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-xs">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Course Overview Section */}
            <div className="grid lg:grid-cols-3 gap-6 mb-12">
              {/* What You'll Learn */}
              <div className="lg:col-span-2">
                <div className="p-6 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm">
                  <h2 className="text-3xl font-bold text-white mb-4">What You'll Learn</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.focus.map((item: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">{item}</h3>
                          <p className="text-gray-400 text-sm">Master core concepts and advanced techniques in {item.toLowerCase()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Course Info Sidebar */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-3">Course Info</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-1.5 border-b border-gray-800">
                      <span className="text-gray-400">Duration</span>
                      <span className="text-white font-medium">{course.duration}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-gray-800">
                      <span className="text-gray-400">Level</span>
                      <span className="text-white font-medium">{course.level}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-gray-800">
                      <span className="text-gray-400">Mode</span>
                      <span className="text-white font-medium">{course.mode}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5">
                      <span className="text-gray-400">Fee</span>
                      <span className="text-white font-medium">{course.fee}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Curriculum */}
            <div className="mb-12">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-white mb-2">Detailed Curriculum</h2>
                <p className="text-gray-400 text-sm">Comprehensive learning path designed for success</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {course.curriculum.map((item: string, index: number) => (
                  <div key={index} className="p-4 rounded-2xl border border-gray-800 bg-gray-900/50 hover:border-blue-500/30 hover:bg-gray-900/70 transition-all duration-300 group cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors duration-200">
                        <span className="text-blue-400 font-semibold text-sm group-hover:text-white transition-colors duration-200">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-300 text-base group-hover:text-white transition-colors duration-200">{item}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="mb-12">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-white mb-2">Learning Outcomes</h2>
                <p className="text-gray-400 text-sm">What you'll achieve after completing this course</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {course.outcomes.map((outcome: string, index: number) => (
                  <div key={index} className="p-4 rounded-2xl border border-gray-800 bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300 group cursor-pointer">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-500/40 transition-colors duration-200">
                        <svg className="w-3 h-3 text-green-400 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-200">{outcome}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Highlights */}
            <div className="mb-12">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-white mb-2">Course Highlights</h2>
                <p className="text-gray-400 text-sm">What makes this course exceptional</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {course.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="p-4 rounded-2xl border border-gray-800 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 hover:border-yellow-500/30 hover:from-yellow-500/20 hover:to-orange-500/20 transition-all duration-300 group cursor-pointer">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                      <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-200">{highlight}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="p-8 rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-3">Ready to Start Learning?</h3>
                  <p className="text-gray-400 text-lg mb-2">Join thousands of students preparing smarter with StudyVerse.</p>
                  <p className="text-gray-500 text-sm">Transform your learning journey today.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <a href="https://studyverseacademy.testpress.in/courses" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-800 text-white font-semibold rounded-xl text-lg hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Enroll Now
                  </a>
                  <a href="/courses" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-xl text-lg hover:border-gray-400 hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    View All Courses
                  </a>
                </div>
                
                <div className="flex justify-center gap-8 text-gray-400 text-sm">
                  <div className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Flexible Schedule
                  </div>
                  <div className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Affordable Fees
                  </div>
                  <div className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Expert Mentors
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
