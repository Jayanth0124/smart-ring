import { motion } from 'framer-motion';
import Badge from '../ui/Badge';

const experts = [
  {
    name: 'Dr. Elena Vasquez',
    credentials: 'MD, Cardiologist · Harvard Medical School',
    specialty: 'Cardiovascular Health',
    quote: "AURA's PPG accuracy is comparable to devices used in clinical research. I was genuinely surprised.",
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Dr. James Okwu',
    credentials: 'PhD, Sleep Science · Stanford University',
    specialty: 'Sleep & Recovery',
    quote: "The sleep staging algorithm is the most sophisticated I've reviewed in a consumer device. Period.",
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Annika Bauer',
    credentials: 'MSc, Performance Physiology · INSEP',
    specialty: 'Elite Athletic Performance',
    quote: 'I use AURA data with Olympic-level athletes to calibrate training load. It is that reliable.',
    image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Prof. Kai Nakamura',
    credentials: 'PhD, Biomedical Engineering · MIT',
    specialty: 'Wearable Biosensors',
    quote: 'The miniaturization team achieved what I believed was five years away. AURA is an engineering landmark.',
    image: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function ExpertAdvisory() {
  return (
    <section className="bg-espresso-50 py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge>Scientific Backing</Badge>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl font-medium text-espresso-800 tracking-tight">
            Trusted by the
            <br />
            <em className="italic text-espresso-500">world's best minds.</em>
          </h2>
          <p className="mt-4 font-sans text-sm text-espresso-500 max-w-md mx-auto leading-relaxed">
            AURA is developed in collaboration with a global advisory board of physicians,
            researchers, and elite performance coaches.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {experts.map((expert) => (
            <motion.div
              key={expert.name}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-5">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-serif text-sm italic text-espresso-100 leading-relaxed">
                    "{expert.quote}"
                  </p>
                </div>
              </div>
              <div className="px-1">
                <span className="inline-block font-sans text-xs tracking-widest uppercase text-espresso-400 mb-2">
                  {expert.specialty}
                </span>
                <h3 className="font-serif text-lg text-espresso-800 mb-1">{expert.name}</h3>
                <p className="font-sans text-xs text-espresso-500 leading-relaxed">
                  {expert.credentials}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
