import Navbar from '@/components/navbar';
import Footer from '@/components/sections/footer';
import MenuSection from '@/components/sections/menu';
import SignatureDrinks from '@/components/sections/signature-drinks';
import ScrollReveal from '@/components/scroll-reveal';

export default function MenuPage() {
  return (
    <main>
      <ScrollReveal />
      <Navbar />
      <div className="pt-24 bg-[#f8f6f3]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center pb-12">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-espresso">Our Menu</h1>
          <p className="mt-4 text-mocha/80 max-w-2xl mx-auto">Explore our curated selection of artisanal coffee, wood-fired pizzas, and fresh bakes.</p>
        </div>
      </div>
      <SignatureDrinks />
      <MenuSection />
      <Footer />
    </main>
  );
}
