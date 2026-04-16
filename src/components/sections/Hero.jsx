import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Moon, Shield } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const rings = [
  {
    id: 'titanium',
    name: 'Titanium Stealth',
    tagline: 'Forged for absolute durability.',
    price: '$349',
    // Start with a forward slash to point to the public folder
    image: '/p1.jpg', 
  },
  {
    id: 'gold',
    name: 'Heritage Gold',
    tagline: 'Classic aesthetics. Clinical sensors.',
    price: '$399',
    image: '/p2.jpg',
  },
  {
    id: 'silver',
    name: 'Silver Sleek',
    tagline: 'Minimalist finish. Maximum data.',
    price: '$299',
    image: '/p3.jpg',
  }
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % rings.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentRing = rings[activeIndex];

  return (
    <section id="hero" className="relative min-h-screen bg-espresso-50 pt-32 lg:pt-40 pb-20 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none flex justify-end items-center">
        <div className="w-[500px] h-[500px] bg-gradient-radial from-espresso-200/40 to-transparent rounded-full blur-3xl translate-x-1/4" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Content */}
        <div className="flex flex-col items-start">
          <Badge className="bg-espresso-200 text-espresso-800 mb-6 border border-espresso-300">
            World's First Clinical Smart Ring
          </Badge>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-espresso-900 tracking-tight leading-[1.05]">
            Intelligence
            <br />
            <em className="italic font-light text-espresso-500">evolved.</em>
          </h1>

          <p className="mt-6 font-sans text-lg text-espresso-600 max-w-md leading-relaxed">
            Focus on all four health pillars: Fitness, Nutrition, Sleep, and Stress — 
            packed into an ultra-lightweight titanium shell.
          </p>

          <div className="flex flex-wrap items-center gap-4 lg:gap-6 mt-8 mb-10">
            <div className="flex items-center gap-2 text-espresso-800">
              <Activity size={18} className="text-espresso-500" />
              <span className="font-sans text-sm font-medium">99% Accuracy</span>
            </div>
            <div className="flex items-center gap-2 text-espresso-800">
              <Moon size={18} className="text-espresso-500" />
              <span className="font-sans text-sm font-medium">Sleep Staging</span>
            </div>
            <div className="flex items-center gap-2 text-espresso-800">
              <Shield size={18} className="text-espresso-500" />
              <span className="font-sans text-sm font-medium">No Subscription</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto px-10 shadow-lg">
              Buy Now — {currentRing.price}
            </Button>
            <p className="font-sans text-xs text-espresso-500 uppercase tracking-widest font-bold">
              Zero Cost EMI Available
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Product Morph */}
        <div className="relative w-full flex flex-col items-center justify-center mt-10 lg:mt-0">
          
          <div className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRing.id}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)', y: 0 }}
                // Added a continuous floating 'y' animation
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: [0, -10, 0] }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)', y: 0 }}
                transition={{ 
                  // Separate transition configs so the entrance is fast, but the float is slow and infinite
                  opacity: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  scale: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  filter: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="absolute inset-0 scale-[1.05] bg-white/40 backdrop-blur-lg rounded-full shadow-xl border border-white/50" />
                <img
                  src={currentRing.image}
                  alt={currentRing.name}
                  className="relative w-full h-full object-cover rounded-full shadow-[0_15px_30px_-10px_rgba(62,39,35,0.3)] border-2 border-white/80"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dynamic Ring Details */}
          <div className="mt-12 text-center h-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRing.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-serif text-2xl text-espresso-900">{currentRing.name}</h3>
                <p className="font-sans text-sm text-espresso-500 mt-2">{currentRing.tagline}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Indicators */}
          <div className="flex items-center gap-4 mt-6">
            {rings.map((ring, index) => (
              <button
                key={ring.id}
                onClick={() => setActiveIndex(index)}
                className="group relative flex items-center justify-center w-8 h-8 cursor-pointer"
                aria-label={`View ${ring.name}`}
              >
                <motion.div
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                    index === activeIndex ? 'bg-espresso-800' : 'bg-espresso-300 group-hover:bg-espresso-400'
                  }`}
                  animate={index === activeIndex ? { scale: 1.2 } : { scale: 1 }}
                />
                {index === activeIndex && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute inset-0 rounded-full border border-espresso-800"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}