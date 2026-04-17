import { motion } from 'framer-motion';
import Accordion from '../ui/Accordion';
import Badge from '../ui/Badge';

const faqs = [
  {
    question: "How accurate is the biometric monitoring?",
    answer: 'Aura uses advanced optical sensors that achieve extraordinary accuracy, validated in internal studies against standard chest straps. Accuracy during intense exercise is maintained via advanced motion artifact filtering.',
  },
  {
    question: 'How long does the battery last?',
    answer: 'In standard mode (continuous tracking, daily sync), Aura lasts 7 full days. The included wireless charging dock charges the ring from 0 to 100% in under 80 minutes.',
  },
  {
    question: 'Is my health data private and secure?',
    answer: 'All biometric data is encrypted end-to-end using AES-256. Data is stored on your device and in our secure cloud. We never sell, share, or monetize your personal health data — ever.',
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge>Common Questions</Badge>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight">
            Everything you
            <br />
            <em className="italic text-zinc-400">need to know.</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-zinc-200"
        >
          {faqs.map((faq) => (
            <Accordion key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}