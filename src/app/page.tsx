import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectionProjects from '@/components/SectionProjects';
import SectionExperience from '@/components/SectionExperience';
import SectionAbout from '@/components/SectionAbout';
import StripTestimonial from '@/components/StripTestimonial';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SectionProjects />
        <SectionExperience />
        <SectionAbout />
        <StripTestimonial />
      </main>
      <Footer />
    </div>
  );
}
