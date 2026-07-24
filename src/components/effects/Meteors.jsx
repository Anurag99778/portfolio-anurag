import { useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * Diagonal streaks of light that periodically shoot across a section — classic
 * Aceternity-style "meteors" background accent, tuned way down in count/opacity
 * so it reads as ambient sparkle rather than a screensaver.
 */
export default function Meteors({ count = 14 }) {
  const meteors = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 2.5 + Math.random() * 2.5,
        size: 0.5 + Math.random() * 0.6,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {meteors.map((m) => (
        <motion.span
          key={m.id}
          className="absolute top-0 rounded-full"
          style={{
            left: `${m.left}%`,
            width: `${m.size}px`,
            height: `${m.size}px`,
            background: '#e2f8ff',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.1)',
          }}
          initial={{ y: -40, x: 0, opacity: 0 }}
          animate={{ y: '110vh', x: 220, opacity: [0, 1, 1, 0] }}
          transition={{
            duration: m.duration,
            delay: m.delay,
            repeat: Infinity,
            repeatDelay: 6 + Math.random() * 6,
            ease: 'easeIn',
          }}
        >
          <span
            className="absolute top-1/2 right-0 -translate-y-1/2 h-px"
            style={{
              width: '90px',
              background: 'linear-gradient(90deg, transparent, rgba(226,248,255,0.7))',
              transform: 'rotate(215deg) translateX(4px)',
              transformOrigin: 'right center',
            }}
          />
        </motion.span>
      ))}
    </div>
  );
}
