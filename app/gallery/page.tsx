import Navbar from '@/components/navbar';
import Footer from '@/components/sections/footer';
import GallerySection from '@/components/sections/gallery';
import InstagramFeed from '@/components/sections/instagram-feed';
import ScrollReveal from '@/components/scroll-reveal';

export default function GalleryPage() {
  return (
    <main>
      <ScrollReveal />
      <Navbar />
      <div className="pt-24 bg-cream">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center pb-12">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-espresso">Gallery</h1>
          <p className="mt-4 text-mocha/80 max-w-2xl mx-auto">Take a visual tour of our cozy ambiance and delicious creations.</p>
        </div>
      </div>
      <GallerySection />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
