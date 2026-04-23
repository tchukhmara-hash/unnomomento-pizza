import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Menu as MenuIcon, 
  X, 
  Bike, 
  Star, 
  MapPin, 
  Clock, 
  Instagram, 
  ChefHat, 
  Heart, 
  Maximize, 
  ArrowRight,
  Pizza,
  ShoppingBag,
  Quote
} from 'lucide-react';

// --- DATA ---

const MENU_ITEMS = [
  {
    id: 1,
    name: 'Карбонара',
    description: 'Сливочный соус, моцарелла, бекон, пармезан, желток, черный перец.',
    price: '280 грн',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800',
    tag: null
  },
  {
    id: 2,
    name: '4 Мяса',
    description: 'Томатный соус, моцарелла, пепперони, охотничьи колбаски, бекон, ветчина.',
    price: '320 грн',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800',
    tag: null
  },
  {
    id: 3,
    name: 'Джульетта',
    description: 'Сливочный соус, моцарелла, куриное филе, ананасы, дор блю.',
    price: '290 грн',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
    tag: 'Хит!'
  },
  {
    id: 4,
    name: 'Ромео',
    description: 'Томатный соус, моцарелла, салями, острый перец халапеньо, красный лук.',
    price: '310 грн',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=800',
    tag: null
  },
  {
    id: 5,
    name: 'Прошутто',
    description: 'Томатный соус, моцарелла, прошутто, руккола, томаты черри, пармезан.',
    price: '350 грн',
    image: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?auto=format&fit=crop&q=80&w=800',
    tag: null
  },
  {
    id: 6,
    name: 'Цезарь',
    description: 'Сливочный соус, моцарелла, курица, бекон, айсберг, перепелиные яйца, соус цезарь.',
    price: '300 грн',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
    tag: null
  },
  {
    id: 7,
    name: 'Салат с лососем',
    description: 'Слабосоленый лосось, микс салата, авокадо, черри, фирменная заправка.',
    price: '260 грн',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    tag: null
  },
  {
    id: 8,
    name: 'Крафтовый Бургер Beef',
    description: 'Мраморная говядина, чеддер, карамелизированный лук, бекон, соус BBQ.',
    price: '240 грн',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    tag: null
  }
];

const REVIEWS = [
  {
    name: 'Andrew Khrapach',
    role: 'Местный эксперт',
    text: 'Очень вкусно, все из ингредиентов, что написано в меню, можно найти в пицце нормального качества. Молодцы!',
    rating: 5
  },
  {
    name: 'Olesya Aleksandrova',
    role: 'Местный эксперт',
    text: 'Мой фаворит среди пиццерий в Днепре! Рекомендую любую пиццу со сливочным соусом. Любимая пицца мужа - Джульетта.',
    rating: 5
  },
  {
    name: 'Марина Бородина',
    role: 'Клиент',
    text: 'Понравилась пицца и внимание к деталям: коробочку перевязали верёвочкой, не поленились добавить специй. Пицца в полной комплектации!',
    rating: 5
  }
];

// --- COMPONENTS ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-graphite/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Pizza className="w-8 h-8 text-crust transition-transform hover:rotate-12" />
            <span className="font-display text-3xl tracking-widest text-white">UN MOMENTO</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-gray-300 hover:text-crust transition-colors text-sm font-medium uppercase tracking-wider">Меню</a>
            <a href="#delivery" className="text-gray-300 hover:text-crust transition-colors text-sm font-medium uppercase tracking-wider">Доставка</a>
            <a href="#reviews" className="text-gray-300 hover:text-crust transition-colors text-sm font-medium uppercase tracking-wider">Отзывы</a>
            <a href="#footer" className="text-gray-300 hover:text-crust transition-colors text-sm font-medium uppercase tracking-wider">Контакты</a>
            
            <a 
              href="tel:0997774782"
              className="flex items-center gap-2 border border-crust/50 hover:bg-crust/10 text-crust px-5 py-2 rounded-full transition-all duration-300 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>099 777 4782</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-graphite pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6 text-center">
              <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display tracking-widest text-gray-300 hover:text-crust">Меню</a>
              <a href="#delivery" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display tracking-widest text-gray-300 hover:text-crust">Доставка</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display tracking-widest text-gray-300 hover:text-crust">Отзывы</a>
              <a href="#footer" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display tracking-widest text-gray-300 hover:text-crust">Контакты</a>
              
              <a 
                href="tel:0997774782"
                className="mt-8 flex items-center justify-center gap-2 bg-crust text-white px-6 py-4 rounded-full font-bold text-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Позвонить: 099 777 4782</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1564936056743-3467b7fccaa6?auto=format&fit=crop&q=80&w=2000" 
          alt="Craft Pizza Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite w-full via-graphite/90 to-graphite/40 md:to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-graphite-lighter/80 backdrop-blur border border-white/10 rounded-full mb-6">
              <Star className="w-4 h-4 text-crust fill-crust" />
              <span className="text-sm font-medium tracking-wide">Оценка 4.8 в Google</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display leading-[0.9] tracking-wide mb-6">
              КРАФТОВАЯ ПИЦЦА <br/>
              <span className="text-crust">&</span> БУРГЕРЫ В ДНЕПРЕ
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 font-light max-w-lg mb-10 leading-relaxed">
              Щедрая начинка, идеальное ферментированное тесто и доставка прямо к вашей двери. Готовим с душой каждый заказ.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#menu"
                className="group flex items-center justify-center gap-2 bg-crust hover:bg-crust/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Смотреть меню
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#delivery"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Условия доставки
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <ChefHat className="w-8 h-8 text-crust" />,
      title: "Честные порции",
      desc: "Никаких доплат за экстра-сыр или мясо — в наших рецептах всё уже в изобилии."
    },
    {
      icon: <Heart className="w-8 h-8 text-crust" />,
      title: "Крафтовая подача",
      desc: "Каждая коробочка перевязана фирменной веревочкой, плюс мы всегда добавляем специи."
    },
    {
      icon: <Maximize className="w-8 h-8 text-crust" />,
      title: "Секретный размер",
      desc: "Наш стандарт — огромные 30 см, но по секрету для больших компаний сделаем все 45 см!"
    }
  ];

  return (
    <section className="py-20 bg-graphite-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-graphite p-8 rounded-3xl border border-white/5 hover:border-crust/30 transition-colors group"
            >
              <div className="bg-graphite-lighter w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Menu = () => {
  return (
    <section id="menu" className="py-24 bg-graphite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display mb-4">Наше Меню</h2>
          <div className="inline-flex items-center gap-4 text-sm uppercase tracking-widest text-gray-400 font-semibold border-y border-white/10 py-2">
            <span>Еда в заведении</span>
            <span className="w-1.5 h-1.5 rounded-full bg-crust"></span>
            <span>Еда навынос</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_ITEMS.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-graphite-light rounded-3xl overflow-hidden border border-white/5 hover:border-crust/50 transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                {item.tag && (
                  <div className="absolute top-4 left-4 z-10 bg-crust text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.tag}
                  </div>
                )}
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-light via-transparent to-transparent opacity-80" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold font-display tracking-wide">{item.name}</h3>
                  <span className="text-crust font-semibold whitespace-nowrap ml-4">{item.price}</span>
                </div>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>
                <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-crust hover:border-crust focus:outline-none focus:ring-2 focus:ring-crust/50 focus:ring-offset-2 focus:ring-offset-graphite-light transition-all flex items-center justify-center gap-2 font-medium">
                  <ShoppingBag className="w-4 h-4" />
                  Заказать
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Delivery = () => {
  return (
    <section id="delivery" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=2000" 
          alt="Delivery Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-graphite/90 backdrop-blur-sm" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-graphite-lighter/80 p-8 md:p-12 rounded-[3rem] border border-white/10 backdrop-blur-md"
        >
          <div className="w-20 h-20 bg-crust rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(217,119,6,0.4)]">
            <Bike className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display mb-6">Быстрая Доставка</h2>
          
          <div className="flex flex-col gap-4 max-w-lg mx-auto mb-8">
            <div className="flex items-center gap-4 bg-graphite/50 p-4 rounded-2xl border border-white/5">
              <MapPin className="text-crust w-6 h-6 flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-lg">Радиус 3 км — 40 грн</p>
                <p className="text-gray-400 text-sm">Привезем горячим прямо из печи</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-graphite/50 p-4 rounded-2xl border border-white/5">
              <Star className="text-crust w-6 h-6 flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-lg">Бесконтактная доставка</p>
                <p className="text-gray-400 text-sm">Оставим заказ у двери для вашей безопасности</p>
              </div>
            </div>
          </div>
          
          <a 
            href="tel:0997774782"
            className="inline-flex items-center gap-2 bg-white text-graphite hover:bg-gray-200 px-8 py-4 rounded-full font-bold text-lg transition-colors"
          >
            Сделать заказ
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-graphite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-4">Говорят наши клиенты</h2>
          <p className="text-crust flex items-center justify-center gap-2 font-medium">
            <Star className="w-5 h-5 fill-crust" />
            Рейтинг 4.8 в Google
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-graphite-light p-8 rounded-3xl border border-white/5 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
              <div className="flex text-crust mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-crust" />
                ))}
              </div>
              <p className="text-gray-300 font-light italic mb-6 leading-relaxed relative z-10">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-graphite-lighter flex flex-shrink-0 items-center justify-center font-bold font-display text-lg text-white border border-white/10">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm tracking-wide">{review.name}</p>
                  <p className="text-xs text-crust mt-0.5">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="footer" className="bg-graphite-lighter border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Pizza className="w-6 h-6 text-crust" />
              <span className="font-display text-2xl tracking-widest text-white">UN MOMENTO</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Крафтовая пиццерия в Днепре. Мы не просто готовим, мы создаем моменты.
            </p>
            <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-graphite border border-white/10 hover:border-crust hover:text-crust transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-white">Контакты</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:0997774782" className="flex items-center gap-3 text-gray-400 hover:text-crust transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>099 777 4782</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>г. Днепр, рынок «Образцовый»,<br/> ул. Калиновая, 78/1 (82Д)</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-white">Режим работы</h4>
            <div className="flex items-center gap-3 text-gray-400">
              <Clock className="w-4 h-4" />
              <span>Ежедневно<br/> 10:00 – 21:00</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-white">Как нас найти</h4>
            <a 
              href="https://maps.google.com/?q=Днепр+ул.Калиновая+78" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-graphite border border-white/20 hover:border-crust hover:bg-crust/10 text-white py-3 px-4 rounded-xl font-medium transition-all"
            >
              <MapPin className="w-4 h-4 text-crust" />
              Проложить маршрут
            </a>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} UN MOMENTO. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans text-gray-100 selection:bg-crust selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Menu />
      <Delivery />
      <Reviews />
      <Footer />
    </div>
  );
}
