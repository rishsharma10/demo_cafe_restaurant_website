import { Instagram, Heart, MessageCircle } from 'lucide-react';

const instagramPosts = [
  {
    src: 'https://images.pexels.com/photos/11385490/pexels-photo-11385490.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    likes: 124,
    comments: 12,
  },
  {
    src: 'https://images.pexels.com/photos/18142622/pexels-photo-18142622.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    likes: 342,
    comments: 45,
  },
  {
    src: 'https://images.pexels.com/photos/33312980/pexels-photo-33312980.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    likes: 215,
    comments: 28,
  },
  {
    src: 'https://images.pexels.com/photos/13062441/pexels-photo-13062441.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    likes: 189,
    comments: 15,
  },
  {
    src: 'https://images.pexels.com/photos/11485199/pexels-photo-11485199.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    likes: 276,
    comments: 31,
  },
  {
    src: 'https://images.pexels.com/photos/19247563/pexels-photo-19247563.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    likes: 412,
    comments: 52,
  }
];

export default function InstagramFeed() {
  return (
    <section id="instagram" className="relative py-24 sm:py-32 bg-white overflow-hidden border-t border-primary/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center sm:text-left">
            <p className="reveal text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
              Follow us on Instagram
            </p>
            <h2 className="reveal font-display font-bold text-3xl sm:text-4xl text-espresso">
              @Vidhyonix.chandigarh
            </h2>
          </div>
          <a
            href="https://instagram.com/vidhyonix"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal inline-flex items-center gap-2 rounded-full bg-accent/10 text-accent px-6 py-2.5 text-sm font-bold hover:bg-accent hover:text-white transition-colors"
          >
            <Instagram className="h-4 w-4" />
            Follow Us
          </a>
        </div>

        <div className="reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramPosts.map((post, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl bg-latte"
            >
              <img
                src={post.src}
                alt="Instagram post from Vidhyonix Cafe"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-espresso/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white">
                <span className="flex items-center gap-1.5 font-bold text-sm">
                  <Heart className="h-4 w-4 fill-white" />
                  {post.likes}
                </span>
                <span className="flex items-center gap-1.5 font-bold text-sm">
                  <MessageCircle className="h-4 w-4 fill-white" />
                  {post.comments}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
