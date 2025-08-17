import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectionAbout from '@/components/SectionAbout';
import SectionServices from '@/components/SectionServices';
import SectionPortfolio from '@/components/SectionPortfolio';
import SectionTestimonials from '@/components/SectionTestimonials';
import SectionContact from '@/components/SectionContact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SectionAbout />
        <SectionServices />
        <SectionPortfolio />
        <SectionTestimonials />
        <SectionContact />
      </main>
      <Footer />
    </div>
  );
}
