import { motion } from 'framer-motion';
import Accordion from '../ui/Accordion';
import Badge from '../ui/Badge';

const faqs = [
  {
    question: "How accurate is AURA's heart rate monitoring?",
    answer: 'AURA uses a six-channel PPG sensor array that achieves ±2 BPM accuracy across 99% of use cases, validated against FDA-cleared chest straps in our internal studies. Accuracy during intense exercise is maintained via advanced motion artifact filtering.',
  },
  {
    question: 'Is AURA waterproof? Can I swim with it?',
    answer: "Yes. AURA carries an IP68 rating and is water-resistant to 100 meters. It is safe for swimming, showering, and surfing. Saltwater exposure won't damage the titanium shell or internal components.",
  },
  {
    question: 'How long does the battery last and how does charging work?',
    answer: 'In standard mode (continuous tracking, daily sync), AURA lasts 7 full days. The included wireless charging dock charges AURA from 0 to 100% in under 80 minutes. We recommend charging once per week before sleep.',
  },
  {
    question: 'What sizes are available and how do I know which to order?',
    answer: 'AURA is available in sizes 5 through 13 (US sizing). We strongly recommend ordering our complimentary Sizing Kit before purchasing your ring. The kit ships free and includes 9 sample sizes to wear for 24–48 hours each.',
  },
  {
    question: 'Does AURA work with my existing health apps?',
    answer: 'AURA integrates natively with Apple Health, Google Fit, Strava, Garmin Connect, and WHOOP. Our REST API also allows developers to build custom integrations. The AURA app is available on iOS 15+ and Android 11+.',
  },
  {
    question: 'What is your return policy?',
    answer: "We offer a 30-day no-questions-asked return policy. If AURA doesn't fit or you're not fully satisfied, contact our concierge team and we'll arrange a free return and full refund. Sizing kit returns are always free.",
  },
  {
    question: 'Is my health data private and secure?',
    answer: 'All biometric data is encrypted end-to-end using AES-256. Data is stored on your device and in our SOC 2 Type II certified cloud. We never sell, share, or monetize your personal health data — ever.',
  },
];

export default function FAQ() {
  return (
    <section className="bg-espresso-100 py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge>Common Questions</Badge>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl font-medium text-espresso-800 tracking-tight">
            Everything you
            <br />
            <em className="italic text-espresso-500">need to know.</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-espresso-300"
        >
          {faqs.map((faq) => (
            <Accordion key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center font-sans text-sm text-espresso-500"
        >
          Still have questions?{' '}
          <a href="mailto:hello@aura.com" className="text-espresso-700 underline underline-offset-4 hover:text-espresso-900 transition-colors">
            hello@aura.com
          </a>
        </motion.p>
      </div>
    </section>
  );
}
