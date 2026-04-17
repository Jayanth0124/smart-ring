import { motion } from 'framer-motion';
import { Package, Ruler, CheckCircle } from 'lucide-react';
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
    icon: CheckCircle,
    title: 'Order Your Ring',
    description: 'Return the kit, select your confirmed size, and your Aura ring ships within 3 business days.',
  },
];

export default function SizingKit() {
  return (
    <section id="sizing" className="bg-white py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] aspect-square max-w-lg mx-auto lg:mx-0 shadow-xl border border-zinc-100">
            <img
              src="https://images.pexels.com/photos/7319075/pexels-photo-7319075.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Aura Sizing Kit"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/40 to-transparent pointer-events-none" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-5 -right-5 hidden md:block bg-white border border-zinc-100 shadow-xl rounded-2xl px-6 py-5"
          >
            <p className="font-sans text-xs font-bold tracking-widest uppercase text-teal-600 mb-1">Complimentary</p>
            <p className="font-serif text-xl text-zinc-900">Free Sizing Kit</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge>Perfect Fit</Badge>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight leading-tight">
            Accuracy starts with 
            <br />
            <em className="italic text-zinc-400">comfort.</em>
          </h2>
          <p className="mt-4 font-sans text-lg text-zinc-500 leading-relaxed max-w-md">
            Biometric accuracy requires a snug, secure fit. We engineered a seamless sizing process that ensures Aura feels like a second skin.
          </p>

          <div className="mt-10 space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-5 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center group-hover:border-teal-300 group-hover:bg-teal-50 transition-colors">
                  <step.icon size={18} strokeWidth={2} className="text-zinc-400 group-hover:text-teal-600 transition-colors" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-sans text-xs font-bold text-zinc-300 tracking-widest">{step.number}</span>
                    <h3 className="font-serif text-xl text-zinc-900">{step.title}</h3>
                  </div>
                  <p className="font-sans text-sm text-zinc-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Order Sizing Kit — Free
            </Button>
            <p className="font-sans text-xs font-medium text-zinc-400 uppercase tracking-widest">
              Ships within 48 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}