export interface Course {
  title: string;
  description: string;
  duration: string;
  focus: string[];
  iconBg: string;
  level: string;
  mode: string;
  fee: string;
  details: string[];
  curriculum: string[];
  highlights: string[];
  outcomes: string[];
}

export const courseDetails: Record<string, Course> = {
  jee: {
    title: "JEE Preparation",
    description: "Advanced IIT-JEE mentorship program designed to build strong conceptual understanding, problem-solving mastery, and disciplined consistency for engineering aspirants aiming for top institutions.",
    duration: "9–12 Months",
    focus: ["Physics", "Chemistry", "Mathematics"],
    iconBg: "from-orange-500 to-red-600",
    level: "Advanced",
    mode: "Online + Offline",
    fee: "₹45,000 - ₹75,000",
    details: [
      "Comprehensive Physics, Chemistry, and Mathematics coverage",
      "Advanced problem-solving techniques and strategies",
      "Regular mock tests with detailed performance analysis",
      "Personalized doubt resolution and mentorship sessions",
      "Complete study material and revision strategies",
      "Time management and exam preparation techniques",
      "Previous 10 years JEE question paper analysis",
      "Peer learning groups and competitive environment"
    ],
    curriculum: [
      "Physics: Mechanics, Electrodynamics, Modern Physics, Optics, Thermodynamics",
      "Chemistry: Organic, Inorganic, Physical Chemistry, Coordination Compounds",
      "Mathematics: Algebra, Calculus, Coordinate Geometry, Trigonometry, Vectors",
      "JEE Advanced problem patterns and solving techniques",
      "Speed and accuracy improvement methodologies",
      "Previous 10 years JEE question analysis with solutions",
      "Time management strategies for exam day",
      "Stress management and performance optimization"
    ],
    highlights: [
      "500+ hours of live interactive sessions with expert faculty",
      "10,000+ practice questions with detailed solutions",
      "Weekly mock tests with comprehensive analysis and feedback",
      "One-on-one mentorship sessions with IIT alumni",
      "Peer learning groups and competitive study environment",
      "Complete study material including notes and question banks",
      "Regular parent-teacher meetings for progress updates",
      "Dedicated mobile app for practice and tests"
    ],
    outcomes: [
      "Complete JEE syllabus mastery with deep conceptual understanding",
      "Improved problem-solving speed and accuracy by 60%",
      "Confidence to tackle advanced level JEE Advanced questions",
      "Better time management skills for optimal exam performance",
      "Proven rank improvement strategies with average 200+ rank gain",
      "Strong foundation for engineering studies at top institutions",
      "Enhanced analytical and logical reasoning abilities",
      "Disciplined study habits and consistency in preparation"
    ]
  },
  neet: {
    title: "NEET Preparation", 
    description: "Comprehensive NEET mentorship designed to build strong Biology foundations, medical accuracy, and exam confidence for medical aspirants aiming for top medical colleges.",
    duration: "9–12 Months",
    focus: ["Biology", "Physics", "Chemistry"],
    iconBg: "from-red-500 to-pink-600",
    level: "Intermediate to Advanced",
    mode: "Online + Offline",
    fee: "₹40,000 - ₹65,000",
    details: [
      "In-depth Biology coverage with NCERT focus and advanced concepts",
      "Physics and Chemistry specifically designed for medical entrance",
      "Regular biological diagram practice and illustration sessions",
      "Previous year NEET question analysis and pattern recognition",
      "Time management strategies optimized for NEET exam pattern",
      "Medical college counseling and career guidance",
      "Health and wellness tips for medical aspirants",
      "Regular mock tests with AI-based performance analysis"
    ],
    curriculum: [
      "Biology: Botany, Zoology, Human Physiology, Genetics, Biotechnology",
      "Physics: Mechanics, Optics, Modern Physics, Thermodynamics for medical",
      "Chemistry: Organic, Inorganic, Physical Chemistry with medical focus",
      "NCERT based comprehensive study with advanced concepts",
      "Medical entrance exam patterns and question types",
      "Biological diagram practice and illustration techniques",
      "Previous 15 years NEET question analysis with solutions",
      "Time management strategies for biology-heavy exam pattern"
    ],
    highlights: [
      "450+ hours of Biology focused sessions with medical experts",
      "8,000+ NEET practice questions with detailed explanations",
      "Biological diagram and illustration practice sessions",
      "Medical college counseling and career guidance programs",
      "Regular health and wellness tips for medical aspirants",
      "Special sessions for medical ethics and healthcare awareness",
      "Dedicated mobile app with medical question bank",
      "Regular interaction with medical professionals and alumni"
    ],
    outcomes: [
      "Complete NEET syllabus coverage with 95%+ accuracy",
      "Strong biological concepts foundation for medical studies",
      "Improved diagram drawing skills for biology sections",
      "Better understanding of medical concepts and healthcare",
      "Confidence for medical entrance exams and interviews",
      "Enhanced speed and accuracy in biology sections",
      "Strong foundation for MBBS and other medical courses",
      "Comprehensive preparation for medical college counseling"
    ]
  },
  school: {
    title: "School Exams Foundation",
    description: "Build strong academic foundations through conceptual learning, disciplined study habits, and personalized guidance for school students aiming for excellence in board exams and competitive preparation.",
    duration: "Ongoing",
    focus: ["Core Subjects", "Concept Building", "Study Discipline"],
    iconBg: "from-indigo-500 to-blue-600",
    level: "Foundation",
    mode: "Online + Offline",
    fee: "₹15,000 - ₹30,000 per year",
    details: [
      "Strong foundation in core subjects with conceptual clarity",
      "Concept-based learning approach rather than rote memorization",
      "Regular assessments and detailed performance feedback",
      "Study habit development and time management training",
      "Parent-teacher coordination for holistic development",
      "Preparation for school competitions and Olympiads",
      "Early exposure to competitive exam patterns",
      "Personality development and communication skills"
    ],
    curriculum: [
      "Mathematics: Basic to Advanced concepts with problem-solving",
      "Science: Physics, Chemistry, Biology fundamentals and experiments",
      "Language: English grammar, literature, and communication skills",
      "Social Studies: History, Geography, Civics with current affairs",
      "Logical reasoning and aptitude development",
      "Computer science and digital literacy basics",
      "Art and creativity for holistic development",
      "Physical education and sports activities"
    ],
    highlights: [
      "Personalized learning pace based on student's capability",
      "Regular parent-teacher meetings for progress monitoring",
      "Monthly progress reports with detailed analysis",
      "Interactive learning methods with visual aids and experiments",
      "Skill development activities and competitions",
      "Weekend workshops for special topics and projects",
      "Summer camps and educational field trips",
      "Dedicated mobile app for practice and homework"
    ],
    outcomes: [
      "Strong academic foundation with 80%+ marks in school exams",
      "Improved study habits and disciplined learning approach",
      "Better conceptual understanding than rote learning",
      "Increased confidence in academics and competitions",
      "Early preparation for competitive exams like JEE/NEET",
      "Enhanced problem-solving and analytical skills",
      "Better time management and organizational skills",
      "Well-rounded personality development"
    ]
  },
  special: {
    title: "Special Courses",
    description: "Focused short-term programs for targeted improvement in problem-solving, exam strategy, and advanced concept mastery for students seeking quick performance enhancement.",
    duration: "Short Term (1-3 Months)",
    focus: ["Problem Solving", "Strategy", "Advanced Topics"],
    iconBg: "from-orange-500 to-red-600",
    level: "Advanced",
    mode: "Online",
    fee: "₹8,000 - ₹20,000",
    details: [
      "Targeted problem-solving workshops for weak areas",
      "Exam strategy sessions with time management techniques",
      "Advanced concept mastery for complex topics",
      "Quick revision techniques and crash courses",
      "Performance optimization and score improvement",
      "Stress management and exam psychology",
      "Subject-specific intensive programs",
      "Last minute preparation and exam tips"
    ],
    curriculum: [
      "Advanced problem-solving techniques and shortcuts",
      "Exam time management strategies and optimization",
      "Quick revision methods for last-minute preparation",
      "Stress management techniques during exams",
      "Last minute preparation tips and tricks",
      "Subject-specific crash courses for weak areas",
      "Advanced concept mastery for complex topics",
      "Performance analysis and improvement strategies"
    ],
    highlights: [
      "Intensive short-term programs with focused learning",
      "Expert faculty guidance from industry professionals",
      "Focused skill development for specific areas",
      "Flexible timing options for working students",
      "Quick results and measurable improvement",
      "Affordable pricing with value for money",
      "Dedicated doubt clearance sessions",
      "Recorded sessions for revision and practice"
    ],
    outcomes: [
      "Enhanced problem-solving skills with 40% improvement",
      "Better exam strategies and time management",
      "Quick performance improvement in target areas",
      "Reduced exam anxiety and increased confidence",
      "Mastery of specific weak subjects or topics",
      "Improved speed and accuracy in problem-solving",
      "Better understanding of exam patterns and strategies",
      "Enhanced overall academic performance"
    ]
  }
};
