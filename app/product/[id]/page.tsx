import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Plus, ShoppingBag, Star } from 'lucide-react';
import { menuCategories, MenuItem } from '@/lib/data';
import Navbar from '@/components/navbar';
import Footer from '@/components/sections/footer';

export function generateStaticParams() {
  const allItems = menuCategories.flatMap(c => c.items);
  return allItems.map(item => ({
    id: item.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  // Find the product
  let product: MenuItem | null = null;
  let categoryName = '';
  
  for (const category of menuCategories) {
    const found = category.items.find(item => item.id === params.id);
    if (found) {
      product = found;
      categoryName = category.label;
      break;
    }
  }

  if (!product) {
    notFound();
  }

  // Get 3 random/featured products from other categories
  const featuredProducts = menuCategories
    .flatMap(c => c.items)
    .filter(item => item.id !== product!.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      
      {/* Product Hero */}
      <div className="pt-24 sm:pt-32 pb-16 px-5 sm:px-8 max-w-7xl mx-auto">
        <Link href="/menu" className="inline-flex items-center gap-2 text-mocha/70 hover:text-espresso transition-colors font-bold text-sm mb-8 group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Menu
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.tag && (
              <span className="absolute top-6 left-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-espresso bg-caramel px-4 py-2 rounded-full shadow-lg">
                <Star className="h-4 w-4 fill-espresso text-espresso" />
                {product.tag}
              </span>
            )}
          </div>

          {/* Details Side */}
          <div className="flex flex-col">
            <p className="text-caramel font-bold uppercase tracking-widest text-sm mb-2">{categoryName}</p>
            <h1 className="font-display font-bold text-5xl sm:text-6xl text-espresso mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-mocha mb-8">{product.price}</p>
            
            <div className="h-px w-full bg-espresso/10 mb-8"></div>
            
            <p className="text-lg text-mocha/80 leading-relaxed mb-10 max-w-lg">
              {product.desc}
              <br /><br />
              Prepared fresh daily by our expert chefs and baristas, ensuring the highest quality in every single order.
            </p>
            
            <button className="flex items-center justify-center gap-3 bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-full shadow-[0_10px_20px_-10px_rgba(200,100,50,0.5)] hover:bg-espresso hover:text-cream hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full md:w-auto max-w-md">
              <ShoppingBag className="w-5 h-5" /> Add to Order — {product.price}
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="py-20 bg-espresso text-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-end gap-4 mb-12">
            <div>
              <p className="text-caramel font-bold uppercase tracking-[0.2em] text-xs mb-2">Explore More</p>
              <h2 className="font-display font-bold text-4xl sm:text-5xl">You Might Also Like</h2>
            </div>
            <Link href="/menu" className="text-sm font-bold text-cream/70 hover:text-caramel transition-colors">View full menu &rarr;</Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((item) => (
              <Link 
                key={item.id} 
                href={`/product/${item.id}`}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-caramel/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso to-transparent" />
                  <span className="absolute top-4 right-4 font-display font-bold text-lg text-cream bg-espresso/70 backdrop-blur px-3 py-1 rounded-full">
                    {item.price}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-transparent to-espresso/50">
                  <h3 className="font-display font-bold text-2xl text-cream group-hover:text-caramel transition-colors mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-cream/70 line-clamp-2">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
