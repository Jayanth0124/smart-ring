import { motion } from 'framer-motion';
import { ArrowUpRight, Activity, Moon, Flame } from 'lucide-react';

export default function SmartCoaching() {
  return (
    <section id="coaching" className="py-32 bg-zinc-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="text-center mb-20">
          <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-teal-600 mb-4 block">The Companion App</span>
          <h2 className="font-serif text-5xl md:text-7xl text-zinc-900 tracking-tight leading-[1.1] mb-6">
            Data is useless <br/> <em className="italic text-zinc-400">without translation.</em>
          </h2>
          <p className="font-sans text-lg text-zinc-500 max-w-2xl mx-auto">
            Aura doesn't just show you graphs. Its onboard AI analyzes your specific baseline and provides gentle, written nudges that actually change your behavior.
          </p>
        </div>

        {/* BENTO BOX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Box 1: Large Notification */}
          <motion.div whileHover={{ scale: 0.98 }} className="md:col-span-2 bg-white rounded-[2rem] p-10 border border-zinc-200 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Activity size={100} /></div>
            <h3 className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 mb-6">Morning Briefing</h3>
            <p className="font-serif text-2xl md:text-3xl text-zinc-900 leading-snug max-w-lg mb-8">
              "Your heart rate dropped late last night, indicating your late meal disrupted your sleep. Try finishing dinner by 7 PM tonight."
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-widest">Actionable</span>
            </div>
          </motion.div>

          {/* Box 2: Score */}
          <motion.div whileHover={{ scale: 0.98 }} className="bg-white rounded-[2rem] p-10 border border-zinc-200 flex flex-col justify-between">
            <h3 className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">Readiness Score</h3>
            <div>
              <p className="font-serif text-7xl text-teal-600 mb-2">92</p>
              <p className="font-sans text-sm text-zinc-500">Prime condition. Push hard today.</p>
            </div>
          </motion.div>

          {/* Box 3: Sleep */}
          <motion.div whileHover={{ scale: 0.98 }} className="bg-white rounded-[2rem] p-10 border border-zinc-200 flex flex-col justify-between">
             <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4"><Moon size={18} /></div>
             <div>
               <p className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 mb-1">Deep Sleep</p>
               <p className="font-serif text-3xl text-zinc-900">2h 14m</p>
             </div>
          </motion.div>

          {/* Box 4: Strain */}
          <motion.div whileHover={{ scale: 0.98 }} className="md:col-span-2 bg-zinc-900 rounded-[2rem] p-10 border border-zinc-800 text-white flex flex-col justify-center">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-teal-500 mb-4">Activity Strain</h3>
                <p className="font-serif text-3xl max-w-sm">You've reached your optimal cardiovascular load for the week.</p>
              </div>
              <div className="hidden md:flex w-24 h-24 rounded-full border-4 border-teal-500 items-center justify-center">
                <span className="font-bold text-xl">100%</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}