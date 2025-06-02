import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import FeaturedPackages from '@/components/FeaturedPackages';
import DestinationShowcase from '@/components/DestinationShowcase';
import ExperienceShowcase from '@/components/ExperienceShowcase';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedPackages />
      <DestinationShowcase />
      <ExperienceShowcase />
      <AboutSection />
      <CTASection />
      <ContactSection />
    </main>
  );
}