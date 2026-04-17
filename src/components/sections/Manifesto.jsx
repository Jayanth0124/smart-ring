import { motion } from 'framer-motion';

export default function Manifesto() {
  const text = "The human body generates terabytes of data every second. For most of history, we have been blind to it. We engineered Aura to decode your biology. Not on a screen that demands your attention, but on a ring that quietly disappears into your life. Real intelligence isn't loud. It's invisible.";
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0.2, y: 5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section className="py-32 md:py-48 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px w-12 bg-teal-600" />
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-teal-600">
            The Philosophy
          </span>
        </div>

        <motion.p 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.25] tracking-tight flex flex-wrap gap-x-3 gap-y-2 md:gap-y-4"
        >
          {words.map((word, i) => (
            <motion.span key={i} variants={wordVariants} className="text-zinc-900">
              {word}
            </motion.span>
          ))}
        </motion.p>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-zinc-200 pt-12">
          {[
            { metric: "120+", label: "Biomarkers Tracked Daily" },
            { metric: "99.1%", label: "Clinical Accuracy Match" },
            { metric: "0", label: "Screens or Distractions" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 + 1 }} 
            >
              <h4 className="font-serif text-4xl text-zinc-900 mb-2">{item.metric}</h4>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-zinc-400">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}