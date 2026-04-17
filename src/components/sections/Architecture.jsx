import { motion } from 'framer-motion';

const specs = [
  { label: "Material", value: "Grade 5 Titanium" },
  { label: "Weight", value: "4 to 6 grams" },
  { label: "Sensors", value: "Optical PPG, Temp, Accelerometer" },
  { label: "Connectivity", value: "Bluetooth 5.0 Low Energy" }
];

export default function Architecture() {
  return (
    <section id="technology" className="py-24 md:py-32 bg-zinc-900 text-white px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <span className="text-teal-400 font-sans text-xs font-bold tracking-widest uppercase mb-4 block">Hardware Architecture</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">Engineered to disappear.</h2>
          <p className="font-sans text-zinc-400 text-lg leading-relaxed mb-10">
            We miniaturized clinical-grade sensors into a form factor so light and perfectly balanced, you forget you're wearing it within minutes.
          </p>
          
          <div className="grid grid-cols-2 gap-8 border-t border-zinc-800 pt-10">
            {specs.map((spec) => (
              <div key={spec.label}>
                <p className="text-zinc-500 text-sm font-sans mb-1">{spec.label}</p>
                <p className="text-white font-medium font-sans">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-zinc-800/50 rounded-[2.5rem] border border-zinc-800"
        >
          {/* Abstract representation of internal tech */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-700/30 to-transparent rounded-[2.5rem]" />
          <img 
             src="/p1.jpg" // Using the titanium ring as the tech showcase
             alt="Ring Architecture" 
             className="relative z-10 w-64 h-64 object-cover rounded-full shadow-[0_0_60px_rgba(20,184,166,0.15)] ring-1 ring-zinc-700"
          />
        </motion.div>

      </div>
    </section>
  );
}