import { motion } from 'framer-motion';
import { HeartPulse, Brain, Zap, Activity } from 'lucide-react';

const features = [
  {
    id: "01",
    icon: HeartPulse,
    title: "Cardiovascular Mapping",
    desc: "The finger is the ideal physiological location for optical heart rate measurement. Our 6-channel PPG sensor captures arterial pulses directly, achieving near-ECG accuracy.",
    specs: [
      { label: "Sampling Rate", value: "50 Hz / Second" },
      { label: "Data Points", value: "250,000+ per day" },
      { label: "HRV Tracking", value: "Millisecond precision" },
      { label: "Validation", value: "UCSF Cardiology" }
    ]
  },
  {
    id: "02",
    icon: Brain,
    title: "Neurological Sleep Staging",
    desc: "We analyze the precise stages of your neurological sleep cycle using a combination of movement, temperature, and autonomic nervous system data to help rebuild your cognitive foundation.",
    specs: [
      { label: "Phases Tracked", value: "REM, Deep, Light, Awake" },
      { label: "Blood Oxygen", value: "Continuous SpO2" },
      { label: "Temp Variance", value: "±0.1°C shifts" },
      { label: "Latency", value: "Auto-detection" }
    ]
  },
  {
    id: "03",
    icon: Zap,
    title: "Metabolic Output & Readiness",
    desc: "Aura quantifies your physical output and balances it against your body’s capacity to recover, providing a singular, definitive Readiness Score every morning.",
    specs: [
      { label: "Activity Detection", value: "40+ workout types" },
      { label: "Calorie Burn", value: "Active & Basal" },
      { label: "Recovery Matrix", value: "14-day baseline" },
      { label: "Stress Load", value: "All-day cortisol proxy" }
    ]
  }
];

export default function DetailedFeatures() {
  return (
    <section id="metrics" className="bg-zinc-50 py-32 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* STICKY LEFT COLUMN */}
        <div className="lg:w-1/3">
          <div className="sticky top-40">
            <h2 className="font-serif text-5xl md:text-6xl text-zinc-900 tracking-tight leading-[1.1] mb-6">
              A laboratory <br /> <em className="italic text-zinc-400">on your finger.</em>
            </h2>
            <p className="font-sans text-lg text-zinc-500 leading-relaxed mb-8">
              We discarded standard smartwatch sensors. Aura is built with custom silicon and optical arrays designed specifically for the dense capillary network of the index finger.
            </p>
          </div>
        </div>

        {/* SCROLLING DENSE CARDS */}
        <div className="lg:w-2/3 flex flex-col gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.6 }}
              className="group relative bg-white rounded-[2rem] p-8 md:p-12 border border-zinc-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Subtle LED Glow Effect */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-500/20 transition-colors duration-700" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-200">
                    <feature.icon size={20} className="text-zinc-900" />
                  </div>
                  <span className="font-sans text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
                    System Module · {feature.id}
                  </span>
                </div>

                <h3 className="font-serif text-3xl md:text-4xl text-zinc-900 mb-4">{feature.title}</h3>
                <p className="font-sans text-base text-zinc-600 leading-relaxed mb-10">
                  {feature.desc}
                </p>

                {/* The Micro-Data Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-zinc-100">
                  {feature.specs.map((spec, sIdx) => (
                    <div key={sIdx}>
                      <p className="font-sans text-[9px] uppercase tracking-widest text-zinc-400 mb-1.5">{spec.label}</p>
                      <p className="font-sans text-sm font-semibold text-zinc-900">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}