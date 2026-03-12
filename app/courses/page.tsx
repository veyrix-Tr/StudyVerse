"use client";

import { useSearchParams } from 'next/navigation';
import Courses from '@/components/Courses';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import CourseDetail from './CourseDetail';
import { courseDetails } from './courseContent';

export default function CoursesPage() {
  const searchParams = useSearchParams();
  const courseParam = searchParams.get('courses');

  // If there's a course parameter, show individual course page
  if (courseParam) {
    const course = courseDetails[courseParam.toLowerCase()];
    
    if (!course) {
      return (
        <>
          <div className="min-h-screen bg-black">
            <Navbar />
            <div className="pt-32 px-4 pb-20">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-white mb-4">Course Not Found</h1>
                <p className="text-gray-400 mb-8">The course you're looking for doesn't exist.</p>
                <a href="/courses" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold rounded-full">
                  Back to Courses
                </a>
              </div>
            </div>
            <Footer />
          </div>
        </>
      );
    }
    
    return (
      <>
        <div className="min-h-screen bg-black">
          <Navbar />
          <CourseDetail course={course} />
          <Footer />
        </div>
      </>
    );
  }

  // Otherwise show all courses
  return (
    <>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Courses />
        <Footer />
      </div>
    </>
  );
}
