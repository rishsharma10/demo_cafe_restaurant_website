import Navbar from '@/components/navbar';
import Footer from '@/components/sections/footer';
import OurStory from '@/components/sections/our-story';
import AboutSection from '@/components/sections/about';
import ScrollReveal from '@/components/scroll-reveal';

export default function AboutPage() {
  return (
    <main>
      <ScrollReveal />
      <Navbar />
      <div className="pt-24 bg-cream">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center pb-12">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-espresso">About Us</h1>
          <p className="mt-4 text-mocha/80 max-w-2xl mx-auto">Discover the passion and history behind Cafe JC's culinary excellence.</p>
        </div>
      </div>
      <OurStory />
      <AboutSection />
      <Footer />
    </main>
  );
}
