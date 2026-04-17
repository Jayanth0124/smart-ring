import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Philosophy() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  return (
    <section ref={ref} className="py-32 md:py-48 bg-zinc-50 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          style={{ opacity, y }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-zinc-900 leading-tight md:leading-tight"
        >
          Aura is not a medical device. It is a <span className="text-teal-600 italic">quiet observer</span> of your daily rhythms, translating microscopic shifts in your body into clear, actionable clarity.
        </motion.h2>
      </div>
    </section>
  );
}