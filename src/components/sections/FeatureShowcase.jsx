import { motion } from 'framer-motion';
import { Activity, Moon, Thermometer, Droplets, Zap, Smartphone } from 'lucide-react';
import Badge from '../ui/Badge';

const cards = [
  {
    icon: Activity,
    title: 'Continuous Heart Rate',
    description: 'Optical PPG sensors capture every beat with clinical-grade precision, day and night.',
    span: 'md:col-span-2',
    image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Moon,
    title: 'Deep Sleep Analysis',
    description: 'Identify REM, deep, and light cycles. Wake up at the optimal moment.',
    span: 'md:col-span-1',
    image: null,
  },
  {
    icon: Thermometer,
    title: 'Body Temperature',
    description: 'Track nightly skin temperature deviations for early illness detection.',
    span: 'md:col-span-1',
    image: null,
  },
  {
    icon: Droplets,
    title: 'Blood Oxygen SpO₂',
    description: 'Monitor oxygen saturation during sleep to catch disturbances instantly.',
    span: 'md:col-span-1',
    image: null,
  },
  {
    icon: Zap,
    title: '7-Day Battery Life',
    description: 'A single charge powers a full week of continuous monitoring, seamlessly.',
    span: 'md:col-span-1',
    image: null,
  },
  {
    icon: Smartphone,
    title: 'Unified Dashboard',
    description: 'Every metric unified in one elegantly minimal app. iOS & Android.',
    span: 'md:col-span-2',
    image: 'https://images.pexels.com/photos/3850838/pexels-photo-3850838.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function FeatureShowcase() {
  return (
    <section id="features" className="bg-espresso-50 py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge>Sculpted For You</Badge>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl font-medium text-espresso-800 tracking-tight">
            Everything you need.
            <br />
            <em className="italic text-espresso-500">Nothing you don't.</em>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`${card.span} group relative bg-espresso-100 border border-espresso-200 overflow-hidden`}
            >
              {card.image ? (
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-800/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <card.icon size={16} strokeWidth={1.5} className="text-espresso-200" />
                      <span className="font-sans text-xs tracking-widest uppercase text-espresso-300">
                        {card.title}
                      </span>
                    </div>
                    <p className="font-sans text-sm text-espresso-200 leading-relaxed max-w-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-8">
                  <div className="w-10 h-10 bg-espresso-200 flex items-center justify-center mb-5">
                    <card.icon size={18} strokeWidth={1.5} className="text-espresso-700" />
                  </div>
                  <h3 className="font-serif text-xl text-espresso-800 mb-3">{card.title}</h3>
                  <p className="font-sans text-sm text-espresso-500 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
