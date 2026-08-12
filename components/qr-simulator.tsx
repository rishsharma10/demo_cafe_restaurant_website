"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, X, ShoppingCart, Bell, Plus, Minus, ArrowLeft, CheckCircle, Clock, Mic, Gift, Home } from "lucide-react";
import { menuCategories } from "@/lib/data";

type CartItem = { id: string; name: string; price: string; quantity: number };

export default function QrSimulator() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<'menu' | 'rewards' | 'checkout' | 'success'>('menu');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [waiterStatus, setWaiterStatus] = useState<'idle' | 'calling' | 'called'>('idle');
  
  // Voice Order State
  const [voiceStatus, setVoiceStatus] = useState<'idle' | 'listening' | 'processing' | 'done'>('idle');
  const [voiceText, setVoiceText] = useState("");

  // Checkout Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [tableNo, setTableNo] = useState("4");
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    setIsClient(true);
    const savedCart = localStorage.getItem("qr-cart-data");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("qr-cart-data", JSON.stringify(cart));
    }
  }, [cart, isClient]);

  const addToCart = (item: { id: string; name: string; price: string }) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("qr-cart-data");
  };

  const cartTotal = cart.reduce((total, item) => {
    const priceNum = parseInt(item.price.replace(/\D/g, ""));
    return total + priceNum * item.quantity;
  }, 0);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !tableNo) return;
    
    // Generate fake order ID
    const randomId = Math.floor(1000 + Math.random() * 9000);
    setOrderId(`#ORD-${randomId}`);
    
    setView('success');
  };
  
  const handleCallWaiter = () => {
    if (waiterStatus !== 'idle') return;
    setWaiterStatus('calling');
    setTimeout(() => {
      setWaiterStatus('called');
      setTimeout(() => setWaiterStatus('idle'), 5000); // Reset after 5 seconds
    }, 800);
  };
  
  const startNewOrder = () => {
    clearCart();
    setView('menu');
    setName("");
    setPhone("");
    // Keep table number
  };

  const simulateVoiceOrder = () => {
    if (voiceStatus !== 'idle') return;
    setVoiceStatus('listening');
    setVoiceText("Listening...");
    
    setTimeout(() => {
      setVoiceStatus('processing');
      setVoiceText("I want 2 cappuccinos and a margherita pizza");
      
      setTimeout(() => {
        // Add items
        const cap = menuCategories.flatMap(c => c.items).find(i => i.id === 'cappuccino');
        const pizza = menuCategories.flatMap(c => c.items).find(i => i.id === 'margherita-pizza');
        if (cap) {
          addToCart(cap);
          addToCart(cap);
        }
        if (pizza) {
          addToCart(pizza);
        }
        
        setVoiceStatus('done');
        setVoiceText("Added 2x Cappuccino, 1x Margherita Pizza to cart!");
        
        setTimeout(() => {
          setVoiceStatus('idle');
          setVoiceText("");
        }, 3000);
      }, 1500);
    }, 2000);
  };

  if (!isClient) return null;

  return (
    <>
      {/* Launcher Button */}
      <motion.button
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 left-4 md:bottom-6 md:left-6 z-40 flex items-center justify-center gap-2 bg-espresso text-caramel px-4 py-3 md:px-5 md:py-4 rounded-full shadow-2xl border-2 border-caramel hover:bg-caramel hover:text-espresso transition-colors duration-300"
      >
        <Smartphone className="h-5 w-5" />
        <span className="font-display font-bold text-sm md:text-base hidden sm:inline">Simulate QR</span>
        <span className="font-display font-bold text-sm md:text-base sm:hidden">QR</span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="relative w-full max-w-[375px] h-[800px] max-h-[90vh] bg-[#f8f6f3] rounded-[40px] shadow-2xl overflow-hidden border-[8px] border-black flex flex-col"
            >
              
              {/* === MENU VIEW === */}
              {view === 'menu' && (
                <>
                  <div className="bg-espresso text-cream p-5 pt-8 rounded-b-2xl shadow-md relative z-10 shrink-0">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute top-6 right-5 text-cream/70 hover:text-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-xs font-bold tracking-widest text-caramel uppercase">Table</span>
                      <select 
                        value={tableNo}
                        onChange={(e) => setTableNo(e.target.value)}
                        className="bg-transparent text-xs font-bold tracking-widest text-caramel uppercase outline-none cursor-pointer hover:text-white transition-colors appearance-none"
                        style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                      >
                        <option value="Takeaway" className="bg-espresso text-cream">Takeaway</option>
                        {[...Array(20)].map((_, i) => (
                          <option key={i} value={i+1} className="bg-espresso text-cream">{i+1}</option>
                        ))}
                      </select>
                      <svg className="w-3 h-3 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    <h2 className="font-display font-bold text-2xl flex items-center justify-between">
                      Vidhyonix Cafe
                      <button 
                        onClick={simulateVoiceOrder}
                        className={`h-10 w-10 rounded-full flex items-center justify-center transition-all shadow-lg ${
                          voiceStatus === 'idle' ? 'bg-caramel text-espresso hover:scale-110' :
                          voiceStatus === 'listening' ? 'bg-red-500 text-white animate-pulse' :
                          'bg-green-500 text-white'
                        }`}
                      >
                        <Mic className="w-5 h-5" />
                      </button>
                    </h2>
                    
                    {voiceStatus !== 'idle' && (
                      <div className="mt-3 bg-white/10 p-3 rounded-lg text-sm text-center font-bold">
                        {voiceText}
                      </div>
                    )}
                    
                    <div className="mt-4 flex gap-2">
                      <button 
                        onClick={handleCallWaiter}
                        disabled={waiterStatus !== 'idle'}
                        className={`flex-1 py-2 rounded-lg text-xs font-bold flex justify-center items-center gap-2 transition-all ${
                          waiterStatus === 'called' 
                            ? 'bg-green-500/20 text-green-300'
                            : waiterStatus === 'calling'
                            ? 'bg-caramel/20 text-caramel'
                            : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                      >
                        {waiterStatus === 'called' ? (
                          <><CheckCircle className="w-3.5 h-3.5" /> Waiter on the way</>
                        ) : waiterStatus === 'calling' ? (
                          <><span className="w-3.5 h-3.5 rounded-full border-2 border-caramel border-t-transparent animate-spin" /> Calling...</>
                        ) : (
                          <><Bell className="w-3.5 h-3.5" /> Call Waiter</>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto pb-32 scroll-smooth">
                    {/* Sticky Sliding Categories */}
                    <div 
                      className="sticky top-0 z-20 bg-[#f8f6f3] px-4 py-3 shadow-sm border-b border-black/5 flex gap-2 overflow-x-auto snap-x"
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                      <style>{`
                        div::-webkit-scrollbar { display: none; }
                      `}</style>
                      {menuCategories.map((cat) => (
                        <button 
                          key={cat.id}
                          onClick={() => {
                            document.getElementById(`cat-${cat.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }}
                          className="shrink-0 snap-start bg-white border border-black/10 px-4 py-1.5 rounded-full text-xs font-bold text-espresso hover:border-caramel hover:text-caramel transition-colors"
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>

                    <div className="p-4 pt-6">
                      {menuCategories.map((cat) => (
                        <div key={cat.id} id={`cat-${cat.id}`} className="mb-8 scroll-mt-20">
                        <h3 className="font-display font-bold text-xl text-espresso mb-4">
                          {cat.label}
                        </h3>
                        <div className="space-y-4">
                          {cat.items.map((item) => {
                            const cartItem = cart.find((i) => i.id === item.id);
                            return (
                              <div
                                key={item.id}
                                className="bg-white p-3 rounded-2xl shadow-sm border border-black/5 flex gap-3"
                              >
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-20 h-20 rounded-xl object-cover"
                                />
                                <div className="flex-1 flex flex-col justify-between">
                                  <div>
                                    <h4 className="font-display font-bold text-sm text-espresso leading-tight">
                                      {item.name}
                                    </h4>
                                    {item.popularity && (
                                      <span className="inline-block mt-0.5 text-[8px] font-bold text-[#ff6b6b] bg-[#ff6b6b]/10 px-1.5 py-0.5 rounded border border-[#ff6b6b]/20">
                                        {item.popularity}
                                      </span>
                                    )}
                                    <p className="text-[10px] text-espresso/60 mt-0.5 line-clamp-2">
                                      {item.desc}
                                    </p>
                                  </div>
                                  <div className="flex items-center justify-between mt-2">
                                    <span className="font-bold text-xs">{item.price}</span>
                                    {cartItem ? (
                                      <div className="flex items-center gap-2 bg-espresso rounded-lg text-white">
                                        <button
                                          onClick={() => removeFromCart(item.id)}
                                          className="w-7 h-7 flex items-center justify-center"
                                        >
                                          <Minus className="w-3 h-3" />
                                        </button>
                                        <span className="text-xs font-bold w-3 text-center">
                                          {cartItem.quantity}
                                        </span>
                                        <button
                                          onClick={() => addToCart(item)}
                                          className="w-7 h-7 flex items-center justify-center text-caramel"
                                        >
                                          <Plus className="w-3 h-3" />
                                        </button>
                                      </div>
                                    ) : (
                                      <button
                                        onClick={() => addToCart(item)}
                                        className="px-3 py-1.5 bg-caramel/20 text-espresso font-bold text-xs rounded-lg hover:bg-caramel transition-colors"
                                      >
                                        Add
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                    </div>
                  </div>
                </>
              )}


              {/* === REWARDS VIEW === */}
              {view === 'rewards' && (
                <div className="flex flex-col h-full bg-[#f8f6f3] relative">
                  <div className="bg-espresso text-cream p-5 pt-8 rounded-b-2xl shadow-md relative z-10 shrink-0">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute top-6 right-5 text-cream/70 hover:text-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <h2 className="font-display font-bold text-2xl">Vidhyonix Rewards</h2>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-5 pb-32">
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-black/5 text-center">
                      <div className="w-16 h-16 bg-caramel/20 text-caramel rounded-full flex items-center justify-center mx-auto mb-4">
                        <Gift className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-espresso text-xl mb-1">Buy 5, Get 1 Free</h3>
                      <p className="text-sm text-espresso/60 mb-6">You are 1 coffee away from a free pastry!</p>
                      
                      <div className="flex justify-between items-center px-2 mb-4">
                        {[1, 2, 3, 4, 5].map(step => (
                          <div key={step} className="flex flex-col items-center gap-2">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                              step <= 4 ? 'bg-espresso text-caramel shadow-inner' : 
                              step === 5 ? 'bg-caramel/20 text-caramel border-2 border-dashed border-caramel' :
                              'bg-black/5 text-espresso/40'
                            }`}>
                              {step <= 4 ? <CheckCircle className="w-5 h-5" /> : step}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="w-full h-2 bg-black/5 rounded-full overflow-hidden">
                        <div className="h-full bg-caramel w-4/5 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              )}


              {/* === CHECKOUT VIEW === */}
              {view === 'checkout' && (
                <div className="flex flex-col h-full bg-white relative">
                  <div className="bg-espresso text-cream p-5 pt-8 rounded-b-2xl shadow-md relative z-10 shrink-0 flex items-center gap-4">
                    <button onClick={() => setView('menu')} className="text-cream/70 hover:text-white">
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <h2 className="font-display font-bold text-xl">Checkout</h2>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-5 pb-32">
                    <h3 className="font-bold text-espresso mb-4">Your Order</h3>
                    <div className="space-y-3 mb-8">
                      {cart.map(item => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <div>
                            <span className="font-bold text-espresso">{item.quantity}x</span> {item.name}
                          </div>
                          <span className="font-bold">
                            ₹{parseInt(item.price.replace(/\D/g, "")) * item.quantity}
                          </span>
                        </div>
                      ))}
                      <div className="border-t border-black/10 pt-3 flex justify-between font-bold text-lg mt-2">
                        <span>Total</span>
                        <span>₹{cartTotal}</span>
                      </div>
                    </div>

                    <h3 className="font-bold text-espresso mb-4">Your Details</h3>
                    <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-espresso/70 uppercase mb-1">Full Name</label>
                        <input 
                          type="text" 
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-[#f8f6f3] border border-black/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-caramel" 
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-espresso/70 uppercase mb-1">Phone Number</label>
                        <input 
                          type="tel" 
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-[#f8f6f3] border border-black/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-caramel" 
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-espresso/70 uppercase mb-1">Table Number</label>
                        <select 
                          required
                          value={tableNo}
                          onChange={(e) => setTableNo(e.target.value)}
                          className="w-full bg-[#f8f6f3] border border-black/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-caramel appearance-none"
                        >
                          <option value="Takeaway">Takeaway</option>
                          {[...Array(20)].map((_, i) => (
                            <option key={i} value={i+1}>Table {i+1}</option>
                          ))}
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
              )}


              {/* === SUCCESS VIEW === */}
              {view === 'success' && (
                <div className="flex flex-col h-full bg-white relative justify-center p-6 text-center">
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-12 h-12" />
                  </motion.div>
                  
                  <h2 className="font-display font-bold text-3xl text-espresso mb-2">Order Received!</h2>
                  <p className="text-espresso/70 mb-8">
                    Hey {name.split(' ')[0]}, your order has been sent to the kitchen.
                  </p>
                  
                  <div className="bg-[#f8f6f3] rounded-2xl p-5 mb-8 text-left border border-black/5 shadow-sm">
                    <p className="text-xs font-bold uppercase text-espresso/60 mb-1">Order ID</p>
                    <p className="font-bold text-xl text-espresso mb-4">{orderId}</p>
                    
                    <div className="flex items-center gap-3 text-espresso">
                      <div className="w-10 h-10 bg-caramel/20 text-caramel rounded-full flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold">Status: Preparing</p>
                        <p className="text-xs text-espresso/70">Estimated time: 15 mins</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 space-y-3">
                    <button 
                      onClick={() => setIsOpen(false)}
                      className="w-full border-2 border-espresso text-espresso py-3 rounded-xl font-bold hover:bg-espresso/5 transition-colors"
                    >
                      Close App
                    </button>
                    <button 
                      onClick={startNewOrder}
                      className="w-full text-espresso/60 text-sm font-bold hover:text-espresso"
                    >
                      Start New Order
                    </button>
                  </div>
                </div>
              )}

              {/* Bottom Fixed Area (Cart/Nav/Checkout) */}
              <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-black/5 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] rounded-b-[32px] z-20">
                {/* Checkout CTA */}
                {view === 'menu' && cartTotal > 0 && (
                  <div className="p-4 pb-0">
                    <button 
                      onClick={() => setView('checkout')}
                      className="w-full bg-espresso text-cream p-4 rounded-2xl shadow-xl flex items-center justify-between font-bold hover:bg-espresso/90 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5 text-caramel" />
                        <span>{cart.reduce((sum, item) => sum + item.quantity, 0)} Items</span>
                      </div>
                      <span>Review (₹{cartTotal})</span>
                    </button>
                  </div>
                )}
                
                {view === 'checkout' && (
                  <div className="p-4">
                    <button 
                      form="checkout-form"
                      type="submit"
                      className="w-full bg-caramel text-espresso p-4 rounded-2xl shadow-xl flex items-center justify-center font-bold text-lg hover:bg-caramel/90 transition-colors"
                    >
                      Place Order (₹{cartTotal})
                    </button>
                  </div>
                )}
                
                {/* Bottom Navigation */}
                {view !== 'checkout' && view !== 'success' && (
                  <div className="flex items-center justify-around p-4 px-6 pb-6 text-espresso/60">
                    <button 
                      onClick={() => setView('menu')}
                      className={`flex flex-col items-center gap-1 transition-colors ${view === 'menu' ? 'text-espresso' : ''}`}
                    >
                      <Home className="w-6 h-6" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Menu</span>
                    </button>
                    <button 
                      onClick={() => setView('rewards')}
                      className={`flex flex-col items-center gap-1 transition-colors ${view === 'rewards' ? 'text-espresso' : ''}`}
                    >
                      <Gift className="w-6 h-6" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Rewards</span>
                    </button>
                  </div>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
