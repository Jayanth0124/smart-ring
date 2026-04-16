import { motion } from 'framer-motion';
import { Cpu, Radio, Battery, Shield } from 'lucide-react';
import Badge from '../ui/Badge';

const specs = [
  {
    category: 'Sensors',
    icon: Radio,
    items: ['PPG Optical Heart Rate', 'Red + Infrared SpO₂', 'NTC Temperature Sensor', '3-Axis Accelerometer', 'Capacitive Touch'],
  },
  {
    category: 'Processor',
    icon: Cpu,
    items: ['Dual-Core ARM Cortex-M4', '512KB Flash Memory', 'Ultra-low-power DSP', 'Real-time Analytics'],
  },
  {
    category: 'Power',
    icon: Battery,
    items: ['72-hour continuous use', '7-day standard mode', 'Wireless charging dock', 'Charges in 80 minutes'],
  },
  {
    category: 'Build',
    icon: Shield,
    items: ['Grade 5 Titanium shell', 'Scratch-resistant coating', 'Water-resistant 100m', 'Polished inner band'],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function TechSpecs() {
  return (
    <section id="technology" className="bg-espresso-800 py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="bg-espresso-700 text-espresso-100">Inside The Ring</Badge>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl font-medium text-espresso-50 tracking-tight">
            Engineered to
            <br />
            <em className="italic text-espresso-300">hospital standards.</em>
          </h2>
          <p className="mt-4 font-sans text-base text-espresso-400 max-w-lg mx-auto leading-relaxed">
            Every component inside AURA was chosen for precision, longevity, and minimal footprint —
            packed into an 8-gram shell.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-48 h-48 rounded-full border-2 border-espresso-600 opacity-20"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {specs.map((spec) => (
              <motion.div
                key={spec.category}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="border border-espresso-600/50 bg-espresso-700/30 backdrop-blur-sm p-6 group"
              >
                <div className="w-10 h-10 border border-espresso-600 flex items-center justify-center mb-5 group-hover:border-espresso-400 transition-colors duration-300">
                  <spec.icon size={18} strokeWidth={1.5} className="text-espresso-300" />
                </div>
                <h3 className="font-serif text-lg text-espresso-100 mb-4">{spec.category}</h3>
                <ul className="space-y-2">
                  {spec.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-espresso-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="font-sans text-xs text-espresso-400 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-espresso-600/50 pt-12"
        >
          {[
            { value: '8g', label: 'Total Weight' },
            { value: '2.55mm', label: 'Profile Height' },
            { value: '±0.1°C', label: 'Temperature Accuracy' },
            { value: 'BLE 5.3', label: 'Wireless Standard' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-3xl text-espresso-100">{s.value}</p>
              <p className="mt-1 font-sans text-xs text-espresso-500 tracking-wide">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
