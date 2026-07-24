import { motion } from 'framer-motion';

/**
 * Seamless infinite horizontal scroller. Renders the item set twice back-to-back
 * and animates the whole strip by exactly -50%, so the loop point is invisible.
 */
export default function Marquee({ items, direction = 'left', speed = 32, className = '' }) {
  const track = [...items, ...items];

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }}>
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {track.map((item, i) => (
          <span
            key={i}
            className="flex-shrink-0 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-slate-300 text-sm font-medium whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
