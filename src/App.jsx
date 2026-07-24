import { useEffect, useState } from 'react';
import { AnimatePresence, motion, animate } from 'framer-motion';
import CustomCursor from './components/CustomCursor.jsx';
import CursorGlow from './components/effects/CursorGlow.jsx';
import AuroraBackground from './components/effects/AuroraBackground.jsx';
import NoiseOverlay from './components/effects/NoiseOverlay.jsx';
import ParticleField from './components/ParticleField.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TechMarquee from './components/TechMarquee.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';

function Preloader({ onDone }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setPct(Math.round(v)),
      onComplete: () => setTimeout(onDone, 180),
    });
    return () => controls.stop();
  }, [onDone]);

  return (
    <motion.div
      key="loader"
      exit={{ clipPath: 'circle(0% at 50% 50%)' }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[99999] bg-bg-primary flex flex-col items-center justify-center gap-5"
      style={{ clipPath: 'circle(150% at 50% 50%)' }}
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-20 h-20 flex items-center justify-center"
      >
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ background: 'conic-gradient(from 0deg, #06b6d4, #8b5cf6, #f59e0b, #06b6d4)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
        />
        <span className="absolute inset-[3px] rounded-full bg-bg-primary flex items-center justify-center font-display font-extrabold text-lg text-gradient">
          AC
        </span>
      </motion.div>
      <div className="font-display font-bold text-sm tracking-[0.3em] text-slate-500">{pct}%</div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>{loading && <Preloader onDone={() => setLoading(false)} />}</AnimatePresence>

      <AuroraBackground />
      <CustomCursor />
      <CursorGlow />
      <ParticleField />
      <NoiseOverlay />
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <TechMarquee />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
