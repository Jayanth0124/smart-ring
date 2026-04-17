import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const timelineEvents = [
  {
    time: "06:30",
    phase: "Awakening",
    title: "Readiness Calibration",
    desc: "Aura establishes your morning baseline. HRV, resting heart rate, and temperature delta are synthesized into your daily capacity score.",
    image: "https://images.pexels.com/photos/6483585/pexels-photo-6483585.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    time: "09:00",
    phase: "Cognitive Load",
    title: "Stress Resilience",
    desc: "Monitoring autonomic nervous system fluctuations during deep work to detect early signs of psychological fatigue.",
    image: "https://images.pexels.com/photos/3837757/pexels-photo-3837757.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    time: "14:00",
    phase: "Physical Output",
    title: "Metabolic Expenditure",
    desc: "Automatic detection of elevated cardiovascular load. Active calories and systemic strain are continuously logged without manual input.",
    image: "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    time: "21:00",
    phase: "Wind Down",
    title: "Circadian Alignment",
    desc: "Aura detects drops in heart rate and core temperature, guiding you into your optimal sleep window for maximum recovery.",
    image: "https://images.pexels.com/photos/3764539/pexels-photo-3764539.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    time: "02:00",
    phase: "Regeneration",
    title: "Neurological Staging",
    desc: "Mapping the exact duration of REM and Slow-Wave Deep sleep while continuously tracking capillary blood oxygen saturation.",
    image: "https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export default function DailyRhythm() {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // THE FIX: Both strings now match the exact same template. 
  // Framer motion will smoothly animate 0 to -100, and 0 to 100.
  const x = useTransform(scrollYProgress, [0, 1], ["calc(0% + 0vw)", "calc(-100% + 100vw)"]);

  return (
    <section ref={targetRef} id="lifestyle" className="relative h-[300vh] bg-white mt-12 md:mt-24">
      
      <div className="sticky top-0 h-[100dvh] flex flex-col justify-start pt-24 md:pt-32 overflow-hidden border-t border-zinc-200">
        
        {/* Engineering Background Grid/Ruler */}
        <div className="absolute top-0 w-[200vw] h-6 flex overflow-hidden pointer-events-none opacity-20">
            {[...Array(100)].map((_, i) => (
                <div key={i} className="h-full border-l border-zinc-900 shrink-0" style={{ width: '40px' }}>
                    <span className="text-[6px] font-mono ml-1">{i * 10}</span>
                </div>
            ))}
        </div>

        {/* Section Header */}
        <div className="px-6 md:px-10 max-w-7xl mx-auto w-full shrink-0 z-10 mb-8 md:mb-16">
          <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-teal-600 mb-4 block">
            Continuous Telemetry
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-zinc-900 tracking-tight leading-[1.1]">
            24-Hour <br className="md:hidden" />
            <em className="italic text-zinc-400">Rhythm.</em>
          </h2>
        </div>

        {/* The Horizontal Rail Wrapper */}
        <div className="relative flex-1 flex items-start md:items-center mt-4 md:mt-0 pb-20">
          
          {/* The Physical Axis Line */}
          <div className="absolute left-0 top-[4px] w-[200vw] h-px bg-zinc-200" />

          {/* The Moving Track */}
          <motion.div style={{ x }} className="flex gap-12 md:gap-32 px-6 md:px-10 w-max">
            {timelineEvents.map((event, idx) => (
              
              <div key={idx} className="relative w-[85vw] max-w-[320px] md:max-w-none md:w-[450px] flex flex-col group">
                
                {/* Node on the rail */}
                <div className="absolute top-[-5px] left-0 w-2.5 h-2.5 rounded-full bg-white border-2 border-teal-500 z-10 shadow-[0_0_10px_#2dd4bf]" />
                <div className="absolute top-0 left-[4px] w-px h-8 md:h-12 bg-zinc-200" />

                {/* Event Time & Tag */}
                <div className="flex items-end gap-3 md:gap-4 mt-8 md:mt-10 mb-6">
                  <span className="font-mono text-3xl md:text-4xl text-zinc-900 tracking-tighter leading-none">{event.time}</span>
                  <span className="font-sans text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-500 border border-zinc-200 px-3 py-1 md:py-1.5 rounded-full mb-1">
                    {event.phase}
                  </span>
                </div>

                {/* Cinematic Image Panel */}
                <div className="w-full h-[180px] md:h-[280px] rounded-2xl md:rounded-[1.5rem] overflow-hidden mb-6 md:mb-8 border border-zinc-100 shadow-sm relative">
                  <img 
                    src={event.image} 
                    alt={event.phase} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent" />
                </div>

                {/* Dense Technical Copy */}
                <h3 className="font-serif text-xl md:text-3xl text-zinc-900 mb-2 md:mb-4">{event.title}</h3>
                <p className="font-sans text-xs md:text-base text-zinc-500 leading-relaxed pr-2 md:pr-6">
                  {event.desc}
                </p>

                {/* Abstract Data Spec Line */}
                <div className="mt-6 md:mt-8 pt-4 border-t border-zinc-100 grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest text-zinc-400 mb-1">Sensors Active</p>
                    <p className="font-mono text-[10px] md:text-xs text-zinc-900">Array {idx + 1}.0</p>
                  </div>
                  <div>
                    <p className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest text-zinc-400 mb-1">Sample Rate</p>
                    <p className="font-mono text-[10px] md:text-xs text-zinc-900">High Fidelity</p>
                  </div>
                </div>

              </div>
            ))}
            
            {/* End Spacer: Keeps the last card from hugging the edge of the monitor */}
            <div className="w-[10vw] md:w-[15vw] shrink-0" />

          </motion.div>
        </div>

      </div>
    </section>
  );
}