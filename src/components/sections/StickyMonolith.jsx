import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
  {
    title: 'Clinical Precision.',
    description: 'Optical PPG sensors capture every beat with staggering accuracy. Day, night, and through intense motion.',
    image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Deep Sleep Architecture.',
    description: 'Identify REM, deep, and light cycles. Understand your recovery like a physiologist.',
    image: 'https://images.pexels.com/photos/3764539/pexels-photo-3764539.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: '7 Days. One Charge.',
    description: 'Advanced power management means a full week of continuous telemetry seamlessly operating in the background.',
    image: 'https://images.pexels.com/photos/3850838/pexels-photo-3850838.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export default function StickyMonolith() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  return (
    <section ref={targetRef} id="features" className="relative h-[300vh] bg-espresso-900">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Images Crossfade */}
        {features.map((feature, index) => {
          // Mathematically safe boundaries (strictly 0 to 1)
          const start = index / features.length;
          const end = (index + 1) / features.length;
          const transition = (end - start) * 0.15; // Use exactly 15% of the segment to fade

          // Guarantees p1 < p2 < p3 < p4
          const p1 = start;
          const p2 = start + transition;
          const p3 = end - transition;
          const p4 = end;

          const opacity = useTransform(
            scrollYProgress,
            [p1, p2, p3, p4],
            // Keep first image visible at start, and last image visible at end
            [index === 0 ? 1 : 0, 1, 1, index === features.length - 1 ? 1 : 0]
          );
          
          const scale = useTransform(
            scrollYProgress,
            [start, end],
            [1, 1.1]
          );

          return (
            <motion.div
              key={`img-${index}`}
              style={{ opacity, scale }}
              className="absolute inset-0 w-full h-full origin-center"
            >
              <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-espresso-900/60 backdrop-blur-[2px]" />
            </motion.div>
          );
        })}

        {/* Foreground Content Crossfade */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center relative h-full min-h-[400px]">
            {features.map((feature, index) => {
              const start = index / features.length;
              const end = (index + 1) / features.length;
              const transition = (end - start) * 0.15;

              const p1 = start;
              const p2 = start + transition;
              const p3 = end - transition;
              const p4 = end;

              const opacity = useTransform(
                scrollYProgress,
                [p1, p2, p3, p4],
                [0, 1, 1, 0]
              );
              
              const y = useTransform(
                scrollYProgress,
                [p1, p2, p3, p4],
                [40, 0, 0, -40]
              );

              return (
                <motion.div
                  key={`text-${index}`}
                  style={{ opacity, y }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-full max-w-lg"
                >
                  <h2 className="font-serif text-5xl md:text-7xl text-white mb-6 tracking-tight drop-shadow-lg">
                    {feature.title}
                  </h2>
                  <p className="font-sans text-lg md:text-xl text-espresso-200 font-light leading-relaxed drop-shadow-md">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}