import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Badge from '../ui/Badge';

const reviews = [
  {
    name: 'Margot L.',
    title: 'Executive, London',
    quote: "I've tried every wellness tracker on the market. Aura is the only one that feels natural. The sleep data completely changed how I run my mornings.",
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Daniel R.',
    title: 'Triathlete, Munich',
    quote: 'The readiness scores are frighteningly accurate. My coach uses my Aura data to plan training blocks. Nothing else comes close for recovery tracking.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Simone K.',
    title: 'Physician, New York',
    quote: 'As a cardiologist I was skeptical. After comparing Aura data against clinical equipment for three months, I now recommend it to my own patients.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-zinc-50 py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge>Trusted By Thousands</Badge>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight">
            Life, <em className="italic text-zinc-400">measured better.</em>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="#0D9488" className="text-teal-600" />
            ))}
            <span className="ml-3 font-sans text-sm font-medium text-zinc-500">4.9 / 5 from 2,400+ reviews</span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.name}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white border border-zinc-100 rounded-3xl p-8 flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#14B8A6" className="text-teal-500" />
                ))}
              </div>
              <blockquote className="font-serif text-lg text-zinc-700 leading-relaxed flex-1 mb-8">
                "{review.quote}"
              </blockquote>
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-100">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover shadow-sm"
                />
                <div>
                  <p className="font-sans text-sm font-bold text-zinc-900">{review.name}</p>
                  <p className="font-sans text-xs font-medium text-zinc-400">{review.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}