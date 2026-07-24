import { useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

/**
 * Wraps any card content with a radial highlight that tracks the cursor
 * (revealed only inside the card via a mask) plus a glowing 1px gradient
 * border on hover. This is the reusable "premium card" building block used
 * across Projects, Skills, Achievements and Contact so every card in the
 * site shares one consistent, high-end interaction.
 */
export default function SpotlightCard({ children, className = '', color = '#06b6d4', ...rest }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  function onMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  const bg = useMotionTemplate`radial-gradient(320px circle at ${mx}px ${my}px, ${color}22, transparent 75%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      className={`relative group ${className}`}
      {...rest}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{ background: bg }}
      />
      <div className="relative z-[1] h-full">{children}</div>
    </motion.div>
  );
}
