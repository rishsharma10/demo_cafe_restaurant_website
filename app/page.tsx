import About from '@/components/sections/about';
import ArtOfRoast from '@/components/sections/art-of-roast';
import Footer from '@/components/sections/footer';
import Gallery from '@/components/sections/gallery';
import Hero from '@/components/sections/hero';
import Menu from '@/components/sections/menu';
import Reviews from '@/components/sections/reviews';
import Visit from '@/components/sections/visit';
import Navbar from '@/components/navbar';
import ScrollReveal from '@/components/scroll-reveal';
import InstagramFeed from '@/components/sections/instagram-feed';
import Newsletter from '@/components/sections/newsletter';
import FloatingActions from '@/components/floating-actions';
import FAQ from '@/components/sections/faq';
import Events from '@/components/sections/events';
import PrivateEvents from '@/components/sections/private-events';
import OurStory from '@/components/sections/our-story';
import SignatureDrinks from '@/components/sections/signature-drinks';

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <Navbar />
      <Hero />
      <ArtOfRoast />
      <About />
      <SignatureDrinks />
      <Menu />
      <Gallery />
      <Reviews />
      <InstagramFeed />
      <OurStory />
      <Events />
      <PrivateEvents />
      <FAQ />
      <Visit />
      <Newsletter />
      <Footer />
      <FloatingActions />
    </main>
  );
}
