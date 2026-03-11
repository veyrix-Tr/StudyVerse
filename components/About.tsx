"use client";

import Navbar from './Navbar';
import Footer from './Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-32 px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Opening Statement */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-[#60A5FA]">Studyverse</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                Studyverse began with a question that most coaching systems never stop to ask:
              </p>
              <p className="text-white text-xl font-semibold leading-relaxed border-l-4 border-blue-500 pl-4 py-2">
                If thousands of students are studying harder than ever, why do so many still feel lost, inconsistent, and uncertain in their preparation?
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed text-lg">
                Over time, it became clear that the problem was rarely effort. It was structure. Students were given information, but not always direction. They were given schedules, but not always strategy. And when consistency broke—as it often does—there was no system designed to intervene early and restore clarity.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-800 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm">
              <p className="text-white text-xl font-semibold text-center mb-4">
                Studyverse was created to change that.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed text-lg">
                This is not built as a mass coaching platform. It is designed as a mentorship-driven environment where preparation is intentional, monitored, and guided. Every element—from performance tracking to revision planning—exists to help students build stability, discipline, and confidence over time.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed text-lg">
                Cohorts are kept deliberately limited so that mentorship remains real, not symbolic. Because meaningful guidance cannot exist at scale.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed text-lg">
                The goal of Studyverse is not simply to prepare students for an exam, but to help them become capable, self-directed individuals who know how to execute under pressure and sustain excellence.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-800 bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm">
              <p className="text-white text-lg font-medium text-center">
                If you have chosen to be here, it means you are ready to take your preparation seriously.
              </p>
            </div>
          </div>

          {/* Founder Signature */}
          <div className="mt-16 text-center">
            <div className="inline-block p-6 rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm">
              <p className="text-gray-400 text-lg">
                — Vinay Raj Pareta<br/>
                <span className="text-[#60A5FA]">Founder, Studyverse</span>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}