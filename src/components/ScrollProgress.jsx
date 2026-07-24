import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[1100]"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #f59e0b)',
      }}
    />
  );
}
