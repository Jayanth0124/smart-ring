import { motion } from 'framer-motion';
import { Package, Ruler, Circle } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const steps = [
  {
    number: '01',
    icon: Package,
    title: 'Order The Kit',
    description: 'We ship a complimentary sizing kit to your door — a set of precision-molded sample rings.',
  },
  {
    number: '02',
    icon: Ruler,
    title: 'Find Your Fit',
    description: 'Wear each sample for 24 hours across daily activities to find your ideal size and comfort.',
  },
  {
    number: '03',
    icon: Circle,
    title: 'Order Your Ring',
    description: 'Return the kit, select your confirmed size, and your AURA ring ships within 3 business days.',
  },
];

export default function SizingKit() {
  return (
    <section id="sizing" className="bg-espresso-50 py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden aspect-square max-w-lg mx-auto lg:mx-0">
            <img
              src="https://images.pexels.com/photos/7319075/pexels-photo-7319075.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="AURA Sizing Kit"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-espresso-100/20 to-transparent pointer-events-none" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-5 -right-5 hidden md:block bg-espresso-800 text-espresso-50 px-6 py-4"
          >
            <p className="font-sans text-xs tracking-widest uppercase text-espresso-400 mb-1">Complimentary</p>
            <p className="font-serif text-lg text-espresso-100">Free Sizing Kit</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge>Getting Started</Badge>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl font-medium text-espresso-800 tracking-tight">
            The perfect fit,
            <br />
            <em className="italic text-espresso-500">guaranteed.</em>
          </h2>
          <p className="mt-4 font-sans text-sm text-espresso-500 leading-relaxed">
            A ring that doesn't fit perfectly is a ring you'll take off. We engineered a
            sizing process that ensures AURA feels like a second skin.
          </p>

          <div className="mt-10 space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-5"
              >
                <div className="flex-shrink-0 w-10 h-10 border border-espresso-300 flex items-center justify-center">
                  <step.icon size={16} strokeWidth={1.5} className="text-espresso-600" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-sans text-xs text-espresso-400 tracking-widest">{step.number}</span>
                    <h3 className="font-serif text-lg text-espresso-800">{step.title}</h3>
                  </div>
                  <p className="font-sans text-sm text-espresso-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg">
              Order Sizing Kit — Free
            </Button>
            <p className="self-center font-sans text-xs text-espresso-400">
              Ships within 48 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
