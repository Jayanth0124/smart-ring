import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Circle, Menu, X } from 'lucide-react';
import Button from '../ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Metrics', href: '#metrics' },
    { name: 'Lifestyle', href: '#lifestyle' },
    { name: 'Coaching', href: '#coaching' },
    { name: 'Technology', href: '#technology' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-white/80 backdrop-blur-xl border-b border-zinc-100 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 z-50 group">
          <Circle size={22} strokeWidth={2} className="text-teal-600 transition-transform group-hover:rotate-45" />
          <span className="font-serif text-xl font-medium tracking-widest text-zinc-900 uppercase">
            Aura
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <a key={item.name} href={item.href} className="font-sans text-xs uppercase tracking-[0.15em] font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
              {item.name}
            </a>
          ))}
          <Button variant="primary" size="sm" className="ml-4">Order Now</Button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden z-50 p-2 text-zinc-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl text-zinc-900 hover:text-teal-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button variant="primary" size="lg" className="mt-4 w-64">Order Now</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}