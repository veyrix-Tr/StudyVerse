import Courses from '@/components/Courses';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function CoursesPage() {
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
