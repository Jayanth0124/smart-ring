import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';
import Button from '../ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Ensure your header tag in Navbar.jsx looks exactly like this:
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled
          ? 'bg-espresso-50/80 backdrop-blur-xl border-b border-espresso-200/50 py-2'
          : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <motion.div whileHover={{ rotate: 15 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Circle
              size={22}
              strokeWidth={1.5}
              className="text-espresso-800"
              fill="#3E2723"
            />
          </motion.div>
          <span className="font-serif text-xl font-semibold tracking-widest text-espresso-800 uppercase">
            Aura
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {['Features', 'Technology', 'Sizing', 'Reviews'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-sans text-sm text-espresso-600 hover:text-espresso-800 tracking-wide transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        <Button variant="primary" size="sm">
          Buy Now — $349
        </Button>
      </div>
    </motion.header>
  );
}
