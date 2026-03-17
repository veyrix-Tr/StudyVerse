"use client";

export default function Hero() {

  const handleExploreCourses = () => {
    const coursesSection = document.getElementById("courses");
    coursesSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLearnMethodology = () => {
    const methodologySection = document.getElementById("methodology");
    methodologySection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section">
      <div className="spline-background">
        <div className="fallback-background">
          <img 
            src="/bg.png" 
            alt="Studyverse Background"
            className="w-full h-full object-cover"
            onLoad={() => console.log('Image loaded successfully')}
            onError={(e) => {
              console.error('Image failed to load:', e);
              console.log('Current src:', e.currentTarget.src);
            }}
          />
          <div className="bg-overlay"></div>
        </div>
      </div>

      <div className="overlay"></div>

      <div className="hero-content">
        <div className="content-wrapper">
          <h1 className="hero-title">
            Beyond the Rank...
            <br/>
            <span className="gradient-text">Why Your Child's Success Demands a Mentorship-Led Journey</span>
          </h1>

          <p className="hero-description">
            A strategic rejection of the ‘Coaching Factory.’ We provide human-centric mentorship for JEE & NEET that prioritizes grit and conceptual clarity over rote memorization.
          </p>

          <p className="text-sm text-gray-400 mt-2">
            The Human-Centric Gurukul for JEE & NEET Aspirants.
          </p>

          <div className="button-group">
            <a href="/courses" className="primary-button">
              <span className="button-glow"></span>
              <span className="button-bg-2"></span>
              <span className="button-text">
                Explore Courses
              </span>
              
            </a>

            <a href="https://studyverseacademy.testpress.in/" target="_blank" rel="noopener noreferrer" className="primary-button">
              <span className="button-glow"></span>
              <span className="button-bg"></span>
              <span className="button-text">
                Get started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-box">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
