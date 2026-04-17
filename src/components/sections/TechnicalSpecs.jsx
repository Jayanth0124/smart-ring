import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Layers, Activity, BatteryCharging, Wifi } from 'lucide-react';

const specifications = [
  {
    category: "Hardware & Build",
    icon: Layers,
    image: "/p1.jpg", 
    items: [
      { label: "Outer Shell", value: "Aerospace-grade Titanium (Grade 5)" },
      { label: "Inner Molding", value: "Non-allergenic, medical-grade seamless resin" },
      { label: "Dimensions", value: "Width: 8.00 mm | Thickness: 2.55 mm" },
      { label: "Total Weight", value: "3.1g to 3.9g (scales with size)" },
      { label: "Durability", value: "PVD coating for advanced scratch resistance" }
    ]
  },
  {
    category: "Sensor Architecture",
    icon: Activity,
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1200",
    items: [
      { label: "Optical Array", value: "6-channel PPG (Photoplethysmography)" },
      { label: "Oximetry", value: "Red and Infrared LEDs for SpO2 monitoring" },
      { label: "Thermal", value: "High-precision NTC skin temperature sensor (±0.1°C)" },
      { label: "Kinematics", value: "Bosch 3D accelerometer and gyroscope" }
    ]
  },
  {
    category: "Power Management",
    icon: BatteryCharging,
    image: "https://images.pexels.com/photos/3850838/pexels-photo-3850838.jpeg?auto=compress&cs=tinysrgb&w=1200",
    items: [
      { label: "Battery Cell", value: "Rechargeable Li-Po (14.5mAh - 21.5mAh)" },
      { label: "Endurance", value: "Up to 7 days of continuous biometric telemetry" },
      { label: "Charging Speed", value: "0% to 100% in under 80 minutes" },
      { label: "Charger Type", value: "Magnetic inductive charging dock included" }
    ]
  },
  {
    category: "Connectivity",
    icon: Wifi,
    image: "https://images.pexels.com/photos/3764539/pexels-photo-3764539.jpeg?auto=compress&cs=tinysrgb&w=1200",
    items: [
      { label: "Water Resistance", value: "10 ATM (Safe up to 100 meters / 330 ft)" },
      { label: "Wireless", value: "Bluetooth 5.0 Low Energy (BLE)" },
      { label: "Firmware", value: "Automatic OTA updates via the Aura App" },
      { label: "Compatibility", value: "iOS 15.0+ and Android 11.0+" }
    ]
  }
];

export default function TechnicalSpecs() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Track the scroll to auto-open panels
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest < 0.25) setActiveIndex(0);
      else if (latest < 0.50) setActiveIndex(1);
      else if (latest < 0.75) setActiveIndex(2);
      else setActiveIndex(3);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} id="technology" className="relative h-[400vh] bg-zinc-50 border-t border-zinc-200">
      
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        {/* FIX: Set a safe maximum height (550px) so the layout never breaks or clips on small laptops */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16 h-[550px]">

          {/* LEFT COLUMN: Accordion */}
          <div className="lg:w-1/2 flex flex-col w-full">
            
            <div className="mb-6">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 mb-2 block">
                Technical Specifications
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl text-zinc-900 tracking-tight leading-[1.1]">
                Engineered without <br/> <em className="italic text-zinc-400">compromise.</em>
              </h2>
            </div>

            <div className="flex flex-col gap-2">
              {specifications.map((spec, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <motion.div
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    // FIX: We now use height: "auto". This allows the panel to fully expand without an internal scrollbar!
                    animate={{ height: isActive ? "auto" : "64px" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={`rounded-[1.5rem] border flex flex-col overflow-hidden cursor-pointer transition-colors duration-500 ${
                      isActive ? 'bg-white border-zinc-200 shadow-sm' : 'bg-transparent border-transparent hover:bg-zinc-100'
                    }`}
                  >
                    {/* Header (Exactly 64px tall) */}
                    <div className="h-[64px] px-5 flex items-center gap-4 shrink-0">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500 ${
                        isActive ? 'bg-teal-50 text-teal-600' : 'bg-zinc-100 text-zinc-400'
                      }`}>
                        <spec.icon size={18} strokeWidth={isActive ? 2 : 1.5} />
                      </div>
                      <h3 className={`font-serif text-xl lg:text-2xl transition-colors duration-500 ${
                        isActive ? 'text-zinc-900' : 'text-zinc-400'
                      }`}>
                        {spec.category}
                      </h3>
                    </div>

                    {/* Content Panel (No longer uses overflow-y-auto) */}
                    <div className="px-5 pb-5">
                      <motion.div
                        animate={{ opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: isActive ? 0.2 : 0 }}
                        className="flex flex-col pt-2"
                      >
                        {spec.items.map((item, i) => (
                          <div key={i} className="flex flex-col xl:flex-row xl:justify-between py-2.5 border-b border-zinc-50 last:border-0 gap-1 xl:gap-4">
                            <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-zinc-400 xl:w-1/3 shrink-0 mt-1">
                              {item.label}
                            </span>
                            <span className="font-sans text-sm font-medium text-zinc-900 xl:w-2/3 xl:text-right leading-relaxed">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Image Crossfade */}
          <div className="hidden lg:block lg:w-1/2 relative rounded-[2rem] overflow-hidden bg-zinc-100 border border-zinc-200 h-full w-full shadow-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={specifications[activeIndex].image}
                initial={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
                animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                exit={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/10 to-transparent pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}