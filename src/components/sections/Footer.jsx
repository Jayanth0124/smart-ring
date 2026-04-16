import { useState } from 'react';
import { motion } from 'framer-motion';
import { Circle, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const links = {
  Shop: ['Smart Ring', 'Sizing Kit', 'Accessories', 'Gift Cards'],
  Support: ['Getting Started', 'App Guide', 'Battery Care', 'Contact Us'],
  Company: ['About', 'Science', 'Advisory Board', 'Careers'],
  Legal: ['Privacy Policy', 'Terms of Use', 'Cookie Settings', 'Accessibility'],
};

const socials = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-espresso-800 text-espresso-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 md:gap-8 pb-14 border-b border-espresso-600/50">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Circle size={20} strokeWidth={1.5} fill="#FDFBF7" className="text-espresso-50" />
              <span className="font-serif text-xl font-semibold tracking-widest text-espresso-50 uppercase">
                Aura
              </span>
            </div>
            <p className="font-sans text-sm text-espresso-400 leading-relaxed max-w-xs">
              The most refined health tracker ever worn. Built for those who demand precision
              without compromise.
            </p>

            <div className="mt-8">
              <p className="font-sans text-xs text-espresso-400 tracking-widest uppercase mb-3">
                The Intelligence Newsletter
              </p>
              {subscribed ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-sans text-sm text-espresso-300"
                >
                  Welcome to the circle.
                </motion.p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex border border-espresso-600">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-transparent px-3 py-2.5 font-sans text-sm text-espresso-100 placeholder-espresso-600 outline-none"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-4 border-l border-espresso-600 text-espresso-400 hover:text-espresso-100 transition-colors"
                  >
                    <ArrowRight size={16} />
                  </motion.button>
                </form>
              )}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-sans text-xs tracking-widest uppercase text-espresso-500 mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-sans text-sm text-espresso-400 hover:text-espresso-100 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-espresso-600">
            © 2025 AURA Technologies, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
                className="text-espresso-500 hover:text-espresso-200 transition-colors duration-200"
              >
                <Icon size={17} strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
