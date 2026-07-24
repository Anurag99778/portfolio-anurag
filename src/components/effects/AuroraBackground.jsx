import { motion } from 'framer-motion';

/**
 * Slow-drifting blurred gradient blobs + a faint grid, fixed behind all content.
 * This is the "aurora mesh" backdrop that makes the whole page feel alive without
 * competing with foreground content (kept at very low opacity, heavy blur).
 */
export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.07) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      <motion.div
        className="absolute w-[50vw] h-[50vw] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.28) 0%, transparent 70%)', filter: 'blur(90px)', top: '-15%', left: '-10%' }}
        animate={{ x: [0, 60, -20, 0], y: [0, 40, -30, 0], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[45vw] h-[45vw] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)', filter: 'blur(90px)', top: '20%', right: '-15%' }}
        animate={{ x: [0, -50, 30, 0], y: [0, -30, 20, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute w-[38vw] h-[38vw] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.16) 0%, transparent 70%)', filter: 'blur(100px)', bottom: '-10%', left: '30%' }}
        animate={{ x: [0, 40, -40, 0], y: [0, -20, 20, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030712_92%)]" />
    </div>
  );
}
