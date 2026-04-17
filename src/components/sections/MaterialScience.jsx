import { motion } from 'framer-motion';

export default function MaterialScience() {
  return (
    <section className="bg-zinc-950 py-32 md:py-48 px-6 relative overflow-hidden text-white">
      {/* Animated Blueprint Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
         <motion.div animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }} className="w-[800px] h-[800px] rounded-full border border-zinc-500 border-dashed absolute" />
         <motion.div animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} className="w-[600px] h-[600px] rounded-full border border-zinc-600 absolute" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10 items-center">
        
        <div>
          <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-teal-500 mb-6 block">Material Architecture</span>
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight mb-8 leading-[1.1]">
            Forged in fire.<br/> <em className="italic text-zinc-500">Machined to perfection.</em>
          </h2>
          <p className="font-sans text-lg text-zinc-400 leading-relaxed mb-12 max-w-lg">
            Aura is crafted from aerospace-grade Titanium (Grade 5). It is stronger than steel, lighter than aluminum, and perfectly biocompatible. The inner molding is cast from medical-grade, hypoallergenic epoxy resin to ensure flawless signal transmission.
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-t border-zinc-800 pt-12">
            {[
              { title: "Grade 5 Titanium", desc: "Virtually indestructible outer shell." },
              { title: "PVD Coating", desc: "Molecularly bonded scratch resistance." },
              { title: "4-Gram Weight", desc: "Lighter than a standard wedding band." },
              { title: "Waterproof", desc: "Hermetically sealed up to 100 meters." }
            ].map((item, i) => (
              <div key={i}>
                <h4 className="font-sans text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="font-sans text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Hardware Illusion */}
        <div className="relative h-[500px] flex items-center justify-center">
           <div className="absolute w-[300px] h-[300px] bg-teal-500/20 blur-[100px] rounded-full" />
           <img 
             src="/p1.jpg" // Uses your titanium ring image
             alt="Titanium Engineering" 
             className="relative z-10 w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-[0_0_80px_rgba(20,184,166,0.15)] ring-1 ring-zinc-800"
           />
           {/* Blueprint Callouts */}
           <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="absolute top-[20%] right-0 md:-right-10 bg-zinc-900 border border-zinc-800 p-4 rounded-xl z-20">
             <p className="text-[9px] uppercase tracking-widest text-teal-500 mb-1">Thickness</p>
             <p className="font-sans text-sm font-bold">2.55 Millimeters</p>
           </motion.div>
           <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="absolute bottom-[20%] left-0 md:-left-10 bg-zinc-900 border border-zinc-800 p-4 rounded-xl z-20">
             <p className="text-[9px] uppercase tracking-widest text-teal-500 mb-1">Sensors</p>
             <p className="font-sans text-sm font-bold">Resin Encapsulated</p>
           </motion.div>
        </div>

      </div>
    </section>
  );
}