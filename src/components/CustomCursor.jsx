import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const trailX = useSpring(x, { damping: 28, stiffness: 260, mass: 0.4 });
  const trailY = useSpring(y, { damping: 28, stiffness: 260, mass: 0.4 });

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches;
    if (!isFine) return;
    setEnabled(true);
    document.body.classList.add('has-custom-cursor');

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      if (e.target.closest('a, button, .cursor-hover')) setHovered(true);
    };
    const out = (e) => {
      if (e.target.closest('a, button, .cursor-hover')) setHovered(false);
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
      document.body.classList.remove('has-custom-cursor');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] bg-accent-cyan"
        style={{
          x, y,
          translateX: '-50%',
          translateY: '-50%',
          width: hovered ? 10 : 8,
          height: hovered ? 10 : 8,
          boxShadow: '0 0 12px rgba(6,182,212,0.9), 0 0 24px rgba(6,182,212,0.5)',
        }}
        transition={{ width: { duration: 0.2 }, height: { duration: 0.2 } }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border"
        style={{
          x: trailX, y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: hovered ? 'rgba(6,182,212,0.8)' : 'rgba(6,182,212,0.3)',
          width: hovered ? 46 : 34,
          height: hovered ? 46 : 34,
          background: hovered ? 'rgba(6,182,212,0.08)' : 'transparent',
        }}
        transition={{ width: { duration: 0.25 }, height: { duration: 0.25 } }}
      />
    </>
  );
}
