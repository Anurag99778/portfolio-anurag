import { motion } from 'framer-motion';

/**
 * A soft angled beam of light cast from the top of the hero — the "spotlight"
 * effect popularised by Aceternity UI. Pure CSS gradient + a slow breathing
 * animation, no images.
 */
export default function Spotlight() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[140%] h-[900px]"
        style={{
          background: 'conic-gradient(from 200deg at 50% 50%, transparent, rgba(6,182,212,0.18), transparent 35%)',
          filter: 'blur(60px)',
        }}
        animate={{ opacity: [0.6, 1, 0.6], rotate: [0, 6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -top-1/4 left-1/3 -translate-x-1/2 w-[80%] h-[700px] rounded-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.14) 0%, transparent 65%)', filter: 'blur(40px)' }}
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </div>
  );
}
