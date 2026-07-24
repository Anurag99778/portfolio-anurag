import { motion } from 'framer-motion';
import SplitText from './effects/SplitText.jsx';

export default function SectionHeading({ tag, title }) {
  return (
    <div className="mb-12">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-accent-cyan mb-3"
      >
        <span className="w-6 h-[2px] bg-accent-cyan rounded" />
        {tag}
      </motion.span>
      <h2 className="font-display font-extrabold text-[clamp(2rem,5vw,3rem)] leading-[1.1]">
        <SplitText text={title} mode="word" stagger={0.08} />
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 72 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="h-[3px] mt-3 rounded-full"
        style={{ background: 'linear-gradient(90deg, #06b6d4, #8b5cf6)' }}
      />
    </div>
  );
}
