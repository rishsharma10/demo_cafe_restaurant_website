export type MenuItem = {
  id: string;
  name: string;
  desc: string;
  price: string;
  image: string;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  blurb: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: 'coffee',
    label: 'Coffee & Crushers',
    blurb: 'Hand-pulled espresso, silky milk & house cold brews.',
    items: [
      { id: 'cappuccino', name: 'Cappuccino', desc: 'Double shot, velveted micro-foam, cocoa dust.', price: '₹140', tag: 'House classic', image: 'https://images.pexels.com/photos/11385490/pexels-photo-11385490.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'caf-latte', name: 'Café Latte', desc: 'Smooth espresso, steamed milk, soft latte art.', price: '₹150', image: 'https://images.pexels.com/photos/459489/pexels-photo-459489.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'cold-coffee', name: 'Cold Coffee', desc: 'Blended chilled coffee, ice cream crown.', price: '₹180', tag: 'Guest favourite', image: 'https://images.pexels.com/photos/31321650/pexels-photo-31321650.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'hazelnut-frappe', name: 'Hazelnut Frappe', desc: 'Espresso, hazelnut, crushed ice, whipped cream.', price: '₹210', image: 'https://images.pexels.com/photos/19252265/pexels-photo-19252265.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'iced-americano', name: 'Iced Americano', desc: 'Chilled espresso over sparkling water.', price: '₹130', image: 'https://images.pexels.com/photos/34932738/pexels-photo-34932738.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'cookies-cream-crusher', name: 'Cookies & Cream Crusher', desc: 'Vanilla ice cream, crushed cookies, milk.', price: '₹220', tag: 'Must try', image: 'https://images.pexels.com/photos/7091582/pexels-photo-7091582.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
    ],
  },
  {
    id: 'shakes',
    label: 'Shakes & Coolers',
    blurb: 'Thick shakes, fruit coolers & refreshing iced teas.',
    items: [
      { id: 'chocolate-oreo-shake', name: 'Chocolate Oreo Shake', desc: 'Thick chocolate shake loaded with Oreos.', price: '₹240', tag: 'Most loved', image: 'https://images.pexels.com/photos/18142621/pexels-photo-18142621.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'peach-iced-tea', name: 'Peach Iced Tea', desc: 'Brewed peach tea, fresh citrus, chilled.', price: '₹120', tag: 'Refreshing', image: 'https://images.pexels.com/photos/12997015/pexels-photo-12997015.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'strawberry-cheesecake-shake', name: 'Strawberry Cheesecake Shake', desc: 'Cheesecake blended with strawberry & cream.', price: '₹260', image: 'https://images.pexels.com/photos/18142623/pexels-photo-18142623.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'blue-lagoon-cooler', name: 'Blue Lagoon Cooler', desc: 'Blue curaçao soda, lemon, mint fizz.', price: '₹140', image: 'https://images.pexels.com/photos/16678544/pexels-photo-16678544.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'kitkat-crunch-shake', name: 'KitKat Crunch Shake', desc: 'Milkshake blended with KitKat & wafer.', price: '₹250', image: 'https://images.pexels.com/photos/18142622/pexels-photo-18142622.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'watermelon-mint-cooler', name: 'Watermelon Mint Cooler', desc: 'Fresh watermelon, mint, lime over ice.', price: '₹130', image: 'https://images.pexels.com/photos/37981025/pexels-photo-37981025.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
    ],
  },
  {
    id: 'mains',
    label: 'Pizza & Pasta',
    blurb: 'Wood-fired pizzas & slow-simmered pastas.',
    items: [
      { id: 'peri-peri-pizza', name: 'Peri Peri Pizza', desc: 'Spiced peri peri sauce, peppers, mozzarella.', price: '₹320', tag: 'Guest favourite', image: 'https://images.pexels.com/photos/29173102/pexels-photo-29173102.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'margherita-pizza', name: 'Margherita Pizza', desc: 'San Marzano tomato, basil, fresh mozzarella.', price: '₹260', image: 'https://images.pexels.com/photos/35123984/pexels-photo-35123984.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'white-sauce-pasta', name: 'White Sauce Pasta', desc: 'Creamy alfredo, herbs, garden veggies.', price: '₹280', tag: 'Comfort pick', image: 'https://images.pexels.com/photos/9546272/pexels-photo-9546272.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'pink-sauce-pasta', name: 'Pink Sauce Pasta', desc: 'Tomato-cream sauce, chilli flakes, parmesan.', price: '₹290', image: 'https://images.pexels.com/photos/35123973/pexels-photo-35123973.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'cheese-burst-pizza', name: 'Cheese Burst Pizza', desc: 'Double cheese, garlic butter crust.', price: '₹360', tag: 'Cheese lovers', image: 'https://images.pexels.com/photos/27583261/pexels-photo-27583261.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'arrabbiata-pasta', name: 'Arrabbiata Pasta', desc: 'Spicy tomato, garlic, olives, chilli.', price: '₹270', image: 'https://images.pexels.com/photos/8108159/pexels-photo-8108159.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
    ],
  },
  {
    id: 'bites',
    label: 'Bites & Burgers',
    blurb: 'Shareable starters, burgers & loaded snacks.',
    items: [
      { id: 'garlic-bread', name: 'Garlic Bread', desc: 'Toasted, buttery, herb garlic, cheese edge.', price: '₹140', tag: 'Soft & fresh', image: 'https://images.pexels.com/photos/13062441/pexels-photo-13062441.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'honey-chilli-potato', name: 'Honey Chilli Potato', desc: 'Crispy potato, honey, chilli, sesame toss.', price: '₹190', tag: 'Must try', image: 'https://images.pexels.com/photos/11485199/pexels-photo-11485199.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'aloo-cheese-burger', name: 'Aloo Cheese Burger', desc: 'Spiced potato patty, melted cheese, brioche.', price: '₹170', image: 'https://images.pexels.com/photos/19247563/pexels-photo-19247563.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'french-fries', name: 'French Fries', desc: 'Golden fries, sea salt, house dip.', price: '₹120', image: 'https://images.pexels.com/photos/8848610/pexels-photo-8848610.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'cheese-quesadilla', name: 'Cheese Quesadilla', desc: 'Grilled tortilla, cheese, peppers, salsa.', price: '₹220', tag: 'Guest favourite', image: 'https://images.pexels.com/photos/32333982/pexels-photo-32333982.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'peri-peri-wings', name: 'Peri Peri Wings', desc: 'Smoky peri peri glaze, blue cheese dip.', price: '₹250', image: 'https://images.pexels.com/photos/29908653/pexels-photo-29908653.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
    ],
  },
  {
    id: 'bakes',
    label: 'Bakery & Desserts',
    blurb: 'Fresh-baked brownies, cakes & sweet treats.',
    items: [
      { id: 'brownie-with-ice-cream', name: 'Brownie with Ice Cream', desc: 'Warm fudge brownie, vanilla scoop, drizzle.', price: '₹190', tag: 'Signature', image: 'https://images.pexels.com/photos/33312980/pexels-photo-33312980.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'chocolate-lava-cake', name: 'Chocolate Lava Cake', desc: 'Molten centre, dusted cocoa, ice cream.', price: '₹210', image: 'https://images.pexels.com/photos/5638516/pexels-photo-5638516.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'new-york-cheesecake', name: 'New York Cheesecake', desc: 'Baked vanilla cheesecake, berry coulis.', price: '₹240', tag: 'Dessert pick', image: 'https://images.pexels.com/photos/29653160/pexels-photo-29653160.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'fresh-fruit-tart', name: 'Fresh Fruit Tart', desc: 'Custard shell, seasonal fruit glaze.', price: '₹180', image: 'https://images.pexels.com/photos/12125027/pexels-photo-12125027.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'cinnamon-roll', name: 'Cinnamon Roll', desc: 'Pillowy roll, cream cheese glaze.', price: '₹150', image: 'https://images.pexels.com/photos/5507698/pexels-photo-5507698.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
      { id: 'tiramisu-cup', name: 'Tiramisu Cup', desc: 'Espresso-soaked layers, mascarpone, cocoa.', price: '₹220', image: 'https://images.pexels.com/photos/16785686/pexels-photo-16785686.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
    ],
  },
];

export const galleryImages = [
  { src: 'https://images.pexels.com/photos/11696469/pexels-photo-11696469.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Cozy café interior with coffee-themed wall art', span: 'lg:col-span-2 lg:row-span-2' },
  { src: 'https://images.pexels.com/photos/11385490/pexels-photo-11385490.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Cappuccino with intricate latte art' },
  { src: 'https://images.pexels.com/photos/13062441/pexels-photo-13062441.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Garlic bread with dip' },
  { src: 'https://images.pexels.com/photos/18142622/pexels-photo-18142622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Chocolate milkshake with whipped cream' },
  { src: 'https://images.pexels.com/photos/33312980/pexels-photo-33312980.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Chocolate brownie with ice cream', span: 'lg:col-span-2' },
  { src: 'https://images.pexels.com/photos/19247563/pexels-photo-19247563.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Cheeseburger with fries' },
  { src: 'https://images.pexels.com/photos/12997015/pexels-photo-12997015.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Refreshing iced peach tea' },
  { src: 'https://images.pexels.com/photos/11485199/pexels-photo-11485199.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Honey chilli fries', span: 'lg:col-span-2' },
];

export const reviews = [
  {
    name: 'Shikha Bhat',
    role: 'Local Guide · 23 reviews',
    initial: 'S',
    rating: 5,
    time: '4 months ago',
    text: 'Visited Vidhyonix Cafe yesterday with my daughter, and it was such a lovely experience from start to finish. Prices were reasonable as per tast and dish..pasta and pizza 🍕 was yummy 😋.',
  },
  {
    name: 'Ethan Walker',
    role: 'Local Guide · 25 reviews',
    initial: 'E',
    rating: 4,
    time: '3 months ago',
    text: 'Vidhyonix Cafe offers a relaxed and welcoming spot for casual dining in the city. The ambiance is clean and modern, making it a comfortable place to hang out with friends or enjoy a quiet break. Their menu covers a good range of café favorites.',
  },
  {
    name: 'Tushaar Goel',
    role: 'Local Guide · 222 reviews',
    initial: 'T',
    rating: 5,
    time: '6 months ago',
    text: 'Amazing food and excellent service! Everything we ordered was fresh, flavorful, and delicious. The staff was friendly, attentive, and made us feel very welcome. Vidhyonix Cafe is a great spot and definitely worth a visit. Highly recommend!',
  },
];

export const ratingBreakdown = [
  { stars: 5, count: 52 },
  { stars: 4, count: 28 },
  { stars: 3, count: 12 },
  { stars: 2, count: 5 },
  { stars: 1, count: 3 },
];
