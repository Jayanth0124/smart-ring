import { useRef } from 'react';
import { motion } from 'framer-motion';
import Badge from '../ui/Badge';

const images = [
  {
    src: 'https://images.pexels.com/photos/6483585/pexels-photo-6483585.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Morning Run',
  },
  {
    src: 'https://images.pexels.com/photos/3837757/pexels-photo-3837757.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Board Meeting',
  },
  {
    src: 'https://images.pexels.com/photos/3764539/pexels-photo-3764539.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Evening Wind Down',
  },
  {
    src: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Deep Sleep',
  },
  {
    src: 'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Gym Session',
  },
  {
    src: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Weekend Hike',
  },
];

export default function GalleryScroll() {
  const constraintsRef = useRef(null);

  return (
    <section className="bg-espresso-50 py-24 md:py-32 overflow-hidden">
      <div className="px-6 md:px-10 max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge>Wear It. Ignore It.</Badge>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl font-medium text-espresso-800 tracking-tight">
            Fits every chapter
            <br />
            <em className="italic text-espresso-500">of your day.</em>
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        ref={constraintsRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing"
      >
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.05}
          className="flex gap-4 pl-6 md:pl-10 pb-4 select-none"
          style={{ width: 'max-content' }}
        >
          {images.map((img, i) => (
            <motion.div
              key={img.caption}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="flex-shrink-0 relative overflow-hidden group"
              style={{ width: '280px', height: '380px' }}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-sans text-xs tracking-widest uppercase text-espresso-100">
                  {img.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="px-6 md:px-10 max-w-7xl mx-auto mt-8">
        <p className="font-sans text-xs text-espresso-400 tracking-wide">
          ← Drag to explore
        </p>
      </div>
    </section>
  );
}
