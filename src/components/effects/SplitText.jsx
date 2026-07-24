import { Fragment } from 'react';
import { motion } from 'framer-motion';

/**
 * Reveals text word-by-word (or char-by-char) with a blur+rise stagger.
 * Used for headings and hero name so first paint reads like a premium reveal, not a snap-in.
 *
 * Each word is wrapped in its own `white-space: nowrap` inline-block so letters
 * within a word never get split across a line break — only the plain space
 * character between word-wrappers is a valid wrap point, same as normal text.
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
  const words = text.split(' ');

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
        {words.map((word, wi) => (
          <Fragment key={wi}>
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              {mode === 'char'
                ? Array.from(word).map((ch, ci) => (
                    <motion.span key={ci} variants={child} style={{ display: 'inline-block' }}>
                      {ch}
                    </motion.span>
                  ))
                : (
                    <motion.span variants={child} style={{ display: 'inline-block' }}>
                      {word}
                    </motion.span>
                  )}
            </span>
            {wi < words.length - 1 ? ' ' : ''}
          </Fragment>
        ))}
      </motion.span>
    </Tag>
  );
}
