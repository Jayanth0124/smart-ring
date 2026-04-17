import { motion } from 'framer-motion';

const metrics = [
  { title: "Readiness", desc: "Wake up knowing exactly how much you can push today based on overnight recovery metrics.", color: "bg-emerald-50", accent: "bg-emerald-400" },
  { title: "Sleep Architecture", desc: "Track deep, REM, and light cycles effortlessly to optimize your rest and daily focus.", color: "bg-blue-50", accent: "bg-blue-400" },
  { title: "Stress Resilience", desc: "Monitor daily strain and find moments of calm before mental or physical burnout occurs.", color: "bg-teal-50", accent: "bg-teal-400" }
];

export default function VitalMetrics() {
  return (
    <section id="metrics" className="py-24 md:py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-zinc-900 mb-4">Your body's dashboard.</h2>
          <p className="font-sans text-lg text-zinc-500">Everything you need to know, distilled into simple scores.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`${metric.color} p-10 rounded-[2rem] border border-white shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="w-12 h-12 bg-white rounded-full shadow-sm mb-8 flex items-center justify-center">
                <div className={`w-3 h-3 rounded-full ${metric.accent}`} />
              </div>
              <h3 className="font-serif text-2xl text-zinc-900 mb-4">{metric.title}</h3>
              <p className="font-sans text-zinc-600 leading-relaxed">{metric.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}