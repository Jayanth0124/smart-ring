import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Badge from '../ui/Badge';

const reviews = [
  {
    name: 'Margot L.',
    title: 'Executive, London',
    quote: "I've tried every wellness tracker on the market. AURA is the only one that feels like jewelry, not a gadget. The sleep data changed how I run my mornings.",
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Daniel R.',
    title: 'Triathlete, Munich',
    quote: 'The HRV readiness scores are frighteningly accurate. My coach uses my AURA data to plan training blocks. Nothing else comes close for recovery tracking.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Simone K.',
    title: 'Physician, New York',
    quote: 'As a cardiologist I was skeptical. After comparing AURA data against hospital equipment for three months, I now recommend it to my own patients.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Tom A.',
    title: 'Product Designer, Seoul',
    quote: 'Beautiful object. Minimal app. Genuinely useful insights. AURA is what happens when a luxury brand and a medical device company merge.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Isabelle F.',
    title: 'Yoga Instructor, Paris',
    quote: 'The stress detection caught a burnout spiral before I did. The guided breathing recommendation was perfectly timed. It felt like having a personal coach on my finger.',
    avatar: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Marcus W.',
    title: 'VC Partner, San Francisco',
    quote: "I've invested in three health tech companies. AURA is the only product I wish I had found before it launched. The data density is extraordinary.",
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Testimonials() {
  return (
    <section className="bg-espresso-100 py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge>Trusted By Thousands</Badge>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl font-medium text-espresso-800 tracking-tight">
            Life, <em className="italic text-espresso-500">measured better.</em>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#6D4C41" className="text-espresso-600" />
            ))}
            <span className="ml-2 font-sans text-sm text-espresso-500">4.9 / 5 from 2,400+ reviews</span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.name}
              variants={itemVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-espresso-50 border border-espresso-200 p-6 md:p-8 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="#8D6E63" className="text-espresso-500" />
                ))}
              </div>
              <blockquote className="font-serif text-base text-espresso-700 leading-relaxed flex-1 mb-6">
                "{review.quote}"
              </blockquote>
              <div className="flex items-center gap-3 border-t border-espresso-200 pt-5">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-sans text-sm font-medium text-espresso-800">{review.name}</p>
                  <p className="font-sans text-xs text-espresso-400">{review.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
