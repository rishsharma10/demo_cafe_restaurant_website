import Navbar from '@/components/navbar';
import Footer from '@/components/sections/footer';
import ReviewsSection from '@/components/sections/reviews';
import ScrollReveal from '@/components/scroll-reveal';

export default function ReviewsPage() {
  return (
    <main>
      <ScrollReveal />
      <Navbar />
      <div className="pt-24 bg-espresso text-cream">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center pb-12">
          <h1 className="font-display font-bold text-5xl md:text-6xl">Guest Reviews</h1>
          <p className="mt-4 text-cream/70 max-w-2xl mx-auto">Read what our amazing community has to say about their experiences at Cafe JC.</p>
        </div>
      </div>
      <ReviewsSection />
      <Footer />
    </main>
  );
}
