import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function Accordion({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-4 group cursor-pointer outline-none"
      >
        <span className="font-serif text-xl text-zinc-900 group-hover:text-teal-600 transition-colors duration-200">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-shrink-0 text-zinc-400 group-hover:text-teal-600"
        >
          {open ? <Minus size={20} /> : <Plus size={20} />}
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="font-sans text-zinc-500 text-base leading-relaxed pb-6 pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}