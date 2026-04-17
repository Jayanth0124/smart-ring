import { motion } from 'framer-motion';

const pressLogos = [
  "FORBES", "WIRED", "BLOOMBERG", "WALL STREET JOURNAL", "FAST COMPANY", "TECHCRUNCH", "THE VERGE"
];

export default function PressReel() {
  return (
    // FIX: Added 'relative' to this section so the absolute gradients stay trapped inside it!
    <section className="relative bg-zinc-50 py-10 border-y border-zinc-200 overflow-hidden flex items-center">
      
      {/* Edge Fades (Now properly locked inside the PressReel) */}
      <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />
      
      <motion.div 
        className="flex whitespace-nowrap items-center gap-24 px-12"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...pressLogos, ...pressLogos, ...pressLogos].map((logo, i) => (
          <span key={i} className="font-serif text-xl md:text-2xl font-bold tracking-widest text-zinc-300 uppercase">
            {logo}
          </span>
        ))}
      </motion.div>
    </section>
  );
}