import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const rings = [
  { id: 'titanium', name: 'Titanium Stealth', price: '$349', image: '/p1.jpg' },
  { id: 'gold', name: 'Heritage Gold', price: '$399', image: '/p2.jpg' },
  { id: 'silver', name: 'Silver Sleek', price: '$299', image: '/p3.jpg' }
];

// Custom Animated Biometric Symbols
const AnimatedSymbols = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
    {/* Sine Wave (Heart Rate) */}
    <motion.svg className="absolute top-[20%] left-[5%] w-64 h-32 stroke-teal-200" fill="none" strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: [0, 1, 0], x: [0, 50] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    >
      <path d="M0 50 Q 20 10, 40 50 T 80 50 T 120 50 T 160 50" />
    </motion.svg>

    {/* Concentric Breathing Circles */}
    <motion.div 
      className="absolute bottom-[20%] right-[10%] w-48 h-48 border border-blue-100 rounded-full"
      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div 
      className="absolute bottom-[20%] right-[10%] w-48 h-48 border border-blue-100 rounded-full"
      animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.8, 0, 0.8] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
  </div>
);

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveIndex((c) => (c + 1) % rings.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const currentRing = rings[activeIndex];

  return (
    <section id="hero" className="relative min-h-screen bg-white pt-32 lg:pt-40 pb-20 flex flex-col justify-center">
      <AnimatedSymbols />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        <div className="flex flex-col items-start">
          <Badge className="mb-6">The 2026 Masterpiece</Badge>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-medium text-zinc-900 tracking-tight leading-[1.02]">
            Health,
            <br />
            <em className="italic font-light text-zinc-400">decrypted.</em>
          </h1>

          <p className="mt-8 font-sans text-lg md:text-xl text-zinc-500 max-w-lg leading-relaxed">
            The world's most advanced biometric sensor is not a watch. It is an ultra-lightweight titanium ring that maps your physiology 24/7 with unprecedented clinical accuracy.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-12 w-full sm:w-auto">
            <Button variant="primary" size="lg" className="px-12 py-5 text-lg">
              Order Now — {currentRing.price}
            </Button>
            <div className="flex flex-col">
              <span className="font-sans text-xs font-bold text-zinc-900 uppercase tracking-widest">FSA/HSA Eligible</span>
              <span className="font-sans text-xs text-zinc-400 mt-1">Ships in 48 hours globally.</span>
            </div>
          </div>
        </div>

        {/* Ring Morph Container */}
        <div className="relative w-full flex flex-col items-center justify-center mt-10 lg:mt-0">
          <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRing.id}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 flex items-center justify-center w-full h-full">
                  <div className="absolute inset-0 scale-[1.05] bg-zinc-50/80 backdrop-blur-2xl rounded-full shadow-2xl border border-white" />
                  <img src={currentRing.image} alt={currentRing.name} className="relative w-full h-full object-cover rounded-full shadow-2xl border-[4px] border-white" />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-14 flex items-center gap-4">
            {rings.map((ring, index) => (
              <button key={ring.id} onClick={() => setActiveIndex(index)} className="group relative flex items-center justify-center w-10 h-10">
                <motion.div className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-teal-600' : 'bg-zinc-200'}`} />
                {index === activeIndex && <motion.div layoutId="activeDot" className="absolute inset-0 rounded-full border-2 border-teal-600" />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}