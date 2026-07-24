import { motion } from 'framer-motion';

/**
 * Reveals text word-by-word (or char-by-char) with a blur+rise stagger.
 * Used for headings and hero name so first paint reads like a premium reveal, not a snap-in.
 */
export default function SplitText({
  text,
  as: Tag = 'span',
  className = '',
  mode = 'word', // 'word' | 'char'
  delay = 0,
  stagger = 0.045,
  once = true,
  triggerOnView = true,
  duration = 0.7,
}) {
  const units = mode === 'char' ? Array.from(text) : text.split(' ');

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const child = {
    hidden: { opacity: 0, y: '0.6em', filter: 'blur(8px)' },
    show: {
      opacity: 1,
      y: '0em',
      filter: 'blur(0px)',
      transition: { duration, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const viewProps = triggerOnView
    ? { whileInView: 'show', viewport: { once, amount: 0.6 } }
    : { animate: 'show' };

  return (
    <Tag className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        {...viewProps}
        style={{ display: 'inline' }}
      >
        {units.map((u, i) => (
          <motion.span
            key={i}
            variants={child}
            style={{ display: 'inline-block', whiteSpace: mode === 'char' && u === ' ' ? 'pre' : 'normal' }}
          >
            {u}
            {mode === 'word' && i < units.length - 1 ? ' ' : ''}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
