import Navbar from '@/components/navbar';
import Footer from '@/components/sections/footer';
import VisitSection from '@/components/sections/visit';
import FAQ from '@/components/sections/faq';
import ScrollReveal from '@/components/scroll-reveal';

export default function VisitPage() {
  return (
    <main>
      <ScrollReveal />
      <Navbar />
      <div className="pt-24 bg-cream">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center pb-12">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-espresso">Visit Us</h1>
          <p className="mt-4 text-mocha/80 max-w-2xl mx-auto">Find our location, check our hours, or get in touch. We can't wait to host you.</p>
        </div>
      </div>
      <VisitSection />
      <FAQ />
      <Footer />
    </main>
  );
}
