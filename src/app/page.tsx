
import HeroSection from '@/components/shared/HeroSection';
import FeaturedPackages from '@/components/showcase/FeaturedPackages';
import DestinationShowcase from '@/components/showcase/DestinationShowcase';
import ExperienceShowcase from '@/components/showcase/ExperienceShowcase';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedPackages />
      <DestinationShowcase />
      <ExperienceShowcase />
      <AboutSection />      
      <CTASection />
      <ContactSection />
    </div>
  );
}
