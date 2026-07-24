import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          whileHover={{ y: -4, boxShadow: '0 0 38px rgba(6,182,212,0.75)' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 w-[46px] h-[46px] bg-accent-cyan text-black rounded-full font-black text-lg flex items-center justify-center z-[500] shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-hover"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
