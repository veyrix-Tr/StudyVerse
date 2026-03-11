import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import HowItWorks from '@/components/HowItWorks';
import Community from '@/components/Community';
import CTA from '@/components/CTA';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen">
        <section id="home">
          <Hero />
          <HowItWorks />
        </section>
        <section id="testimonials">
          <CTA />
        </section>
        <section id="community">
          <Community />
          <ContactForm />
        </section>
        <Footer />
      </main>
    </>
  );
}
