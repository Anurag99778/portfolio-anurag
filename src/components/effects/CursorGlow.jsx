import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * A large, very soft light that trails the pointer across the whole page —
 * distinct from the small precise CustomCursor dot/ring. Screen-blended so it
 * only ever brightens, never muddies, the dark background.
 */
export default function CursorGlow() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { damping: 40, stiffness: 90, mass: 0.6 });
  const sy = useSpring(y, { damping: 40, stiffness: 90, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const move = (e) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[520px] h-[520px] rounded-full pointer-events-none z-[1] mix-blend-screen hidden md:block"
      style={{
        x: sx, y: sy,
        translateX: '-50%',
        translateY: '-50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.10) 0%, rgba(139,92,246,0.05) 45%, transparent 70%)',
      }}
    />
  );
}
