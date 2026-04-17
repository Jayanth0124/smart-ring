import { motion } from 'framer-motion';
import { Cpu, Radio, Battery, Shield, Crosshair } from 'lucide-react';

const systems = [
  {
    id: "SYS.01",
    category: 'Sensory Array',
    icon: Radio,
    items: [
      { label: 'PPG Optical', val: '6-Channel' },
      { label: 'Thermal', val: 'NTC ±0.1°C' },
      { label: 'Motion', val: '6-Axis IMU' },
      { label: 'SpO2', val: 'Red/IR LED' }
    ],
  },
  {
    id: "SYS.02",
    category: 'Processing Core',
    icon: Cpu,
    items: [
      { label: 'Architecture', val: 'ARM Cortex-M4' },
      { label: 'Flash Memory', val: '512KB' },
      { label: 'Analytics', val: 'On-board DSP' },
      { label: 'Security', val: 'AES-256' }
    ],
  },
  {
    id: "SYS.03",
    category: 'Power Matrix',
    icon: Battery,
    items: [
      { label: 'Capacity', val: '14.5 - 21.5mAh' },
      { label: 'Lifespan', val: '168 Hours' },
      { label: 'Charging', val: 'Magnetic Inductive' },
      { label: '0-100%', val: '< 80 Minutes' }
    ],
  },
  {
    id: "SYS.04",
    category: 'Chassis & Build',
    icon: Shield,
    items: [
      { label: 'Exoskeleton', val: 'Grade 5 Titanium' },
      { label: 'Internal', val: 'Medical Resin' },
      { label: 'Water Rating', val: '10 ATM (100m)' },
      { label: 'Coating', val: 'PVD Vapor' }
    ],
  },
];

export default function TechSpecs() {
  return (
    <section id="technology" className="relative bg-zinc-950 py-32 overflow-hidden text-white border-y border-zinc-900">
      
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#27272a 1px, transparent 1px), linear-gradient(90deg, #27272a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* HUD Style Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center gap-3 mb-6">
            <Crosshair size={16} className="text-teal-400 animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-teal-400">
              Hardware Architecture Diagram
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl font-medium text-white tracking-tight leading-none mb-6">
            System <em className="italic text-zinc-500">Schematics.</em>
          </h2>
          <p className="font-mono text-xs text-zinc-400 tracking-widest uppercase max-w-xl mx-auto leading-relaxed">
            Miniaturized clinical-grade telemetry. <br/> Operating within an 8-gram titanium enclosure.
          </p>
        </div>

        {/* Central Layout: Grid + Radar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
          
          {/* Left Panel Systems */}
          <div className="space-y-6">
            {systems.slice(0, 2).map((sys, idx) => (
              <SystemCard key={sys.id} sys={sys} delay={idx * 0.2} />
            ))}
          </div>

          {/* Central Radar/Scanner Animation */}
          <div className="relative flex justify-center items-center h-[400px]">
            {/* Outer Rotating Dashed Ring */}
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-teal-500/40"
            />
            {/* Inner Rotating Ring (Reverse) */}
            <motion.div 
              animate={{ rotate: -360 }} 
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[260px] h-[260px] rounded-full border border-zinc-700"
            />
            
            {/* The Ring Image */}
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-zinc-800 shadow-[0_0_50px_rgba(20,184,166,0.15)] z-10 bg-zinc-900">
              <img src="/p1.jpg" alt="Ring Top View" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
              
              {/* Scanning Laser Line */}
              <motion.div 
                animate={{ top: ['-10%', '110%', '-10%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px] bg-teal-400 shadow-[0_0_15px_#2dd4bf] z-20"
              />
            </div>

            {/* Crosshairs */}
            <div className="absolute w-[360px] h-px bg-zinc-800" />
            <div className="absolute h-[360px] w-px bg-zinc-800" />
          </div>

          {/* Right Panel Systems */}
          <div className="space-y-6">
            {systems.slice(2, 4).map((sys, idx) => (
              <SystemCard key={sys.id} sys={sys} delay={(idx + 2) * 0.2} />
            ))}
          </div>

        </div>

        {/* Bottom Raw Data Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-1 border border-zinc-800 bg-zinc-900 p-1"
        >
          {[
            { label: 'Total Weight', val: '4.0 - 6.0g' },
            { label: 'Profile Height', val: '2.55mm' },
            { label: 'Temp Delta', val: '±0.1°C' },
            { label: 'Transmission', val: 'BLE 5.3' },
          ].map((stat, i) => (
            <div key={i} className="bg-zinc-950 p-6 text-center group hover:bg-zinc-900 transition-colors">
              <p className="font-mono text-2xl text-white group-hover:text-teal-400 transition-colors">{stat.val}</p>
              <p className="mt-2 font-mono text-[9px] text-zinc-500 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

// Sub-component for the futuristic HUD cards
function SystemCard({ sys, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: sys.id.includes('01') || sys.id.includes('02') ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-6 hover:border-teal-500/50 transition-colors group overflow-hidden"
    >
      {/* Corner Brackets for HUD look */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-teal-500/50" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-teal-500/50" />

      <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-3">
          <sys.icon size={16} className="text-teal-500" />
          <h3 className="font-sans text-sm font-semibold tracking-wide text-white uppercase">{sys.category}</h3>
        </div>
        <span className="font-mono text-[10px] text-zinc-600 group-hover:text-teal-400 transition-colors">
          [{sys.id}]
        </span>
      </div>
      
      <ul className="space-y-3">
        {sys.items.map((item, i) => (
          <li key={i} className="flex justify-between items-center font-mono text-xs">
            <span className="text-zinc-500">{item.label}</span>
            <span className="text-zinc-300 border-b border-zinc-800 border-dashed pb-0.5 group-hover:text-white transition-colors">{item.val}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}