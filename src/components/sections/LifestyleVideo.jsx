import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Badge from '../ui/Badge';

export default function LifestyleVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-espresso-100 py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge>A Day With Your Ring</Badge>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl font-medium text-espresso-800 tracking-tight">
            Wear it. <em className="italic text-espresso-500">Forget it.</em>
          </h2>
          <p className="mt-4 font-sans text-base text-espresso-500 max-w-lg mx-auto leading-relaxed">
            From morning workouts to deep sleep, AURA silently records 100+ health signals —
            24 hours a day, 7 days a week.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full overflow-hidden group cursor-pointer"
          style={{ aspectRatio: '16/9' }}
          onClick={() => setPlaying(!playing)}
        >
          <img
            src="https://images.pexels.com/photos/3764538/pexels-photo-3764538.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="AURA lifestyle"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-espresso-900/40 group-hover:bg-espresso-900/30 transition-colors duration-300" />

          {!playing && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-espresso-50 bg-espresso-50/20 backdrop-blur-sm flex items-center justify-center text-espresso-50 mb-6"
              >
                <Play size={24} fill="currentColor" className="translate-x-0.5" />
              </motion.button>
              <p className="font-serif text-2xl md:text-3xl text-espresso-50 tracking-tight text-center px-4">
                "The quietest revolution in personal health."
              </p>
              <p className="mt-3 font-sans text-sm text-espresso-200 tracking-widest uppercase">
                Watch the film
              </p>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 grid grid-cols-3 gap-4 md:gap-8 text-center"
        >
          {[
            { value: '24/7', label: 'Continuous Monitoring' },
            { value: '100+', label: 'Health Signals' },
            { value: '7 days', label: 'Battery Life' },
          ].map((stat) => (
            <div key={stat.label} className="border-t border-espresso-300 pt-6">
              <p className="font-serif text-3xl md:text-4xl text-espresso-800">{stat.value}</p>
              <p className="mt-1 font-sans text-xs text-espresso-500 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
