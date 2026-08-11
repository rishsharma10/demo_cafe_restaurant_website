import About from '@/components/sections/about';
import Footer from '@/components/sections/footer';
import Gallery from '@/components/sections/gallery';
import Hero from '@/components/sections/hero';
import Menu from '@/components/sections/menu';
import Reviews from '@/components/sections/reviews';
import Visit from '@/components/sections/visit';
import Navbar from '@/components/navbar';
import ScrollReveal from '@/components/scroll-reveal';

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reviews />
      <Visit />
      <Footer />
    </main>
  );
}
