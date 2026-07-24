import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio.js';

const LINKS = ['About', 'Experience', 'Projects', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const initials = PORTFOLIO_DATA.personal.name.split(' ').map((w) => w[0]).join('');
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 20));

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id);
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const goTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          height: scrolled ? 60 : 68,
          backgroundColor: scrolled ? 'rgba(3,7,18,0.85)' : 'rgba(3,7,18,0.4)',
          borderColor: scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.02)',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.35)' : '0 0 0 rgba(0,0,0,0)',
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-[6%] backdrop-blur-xl border-b"
      >
        <a href="#hero" onClick={goTo('hero')} className="relative w-11 h-11 flex items-center justify-center flex-shrink-0" aria-label="Home">
          <span className="absolute inset-0 rounded-full overflow-hidden">
            <motion.span
              className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2"
              style={{ background: 'conic-gradient(from 0deg, #06b6d4, #8b5cf6, #f59e0b, #06b6d4)' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </span>
          <span className="relative z-10 w-[42px] h-[42px] rounded-full bg-bg-card flex items-center justify-center font-display font-extrabold text-sm">
            {initials}
          </span>
        </a>

        <ul className="hidden md:flex gap-9 list-none">
          {LINKS.map((l) => {
            const id = l.toLowerCase();
            const isActive = active === id;
            return (
              <li key={l} className="relative">
                <a
                  href={`#${id}`}
                  onClick={goTo(id)}
                  className={`text-sm font-medium pb-1 transition-colors ${isActive ? 'text-accent-cyan' : 'text-slate-400 hover:text-accent-cyan'}`}
                >
                  {l}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-accent-cyan rounded"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none z-[1001]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block w-[22px] h-[2px] bg-slate-100 rounded" />
          <motion.span animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} className="block w-[22px] h-[2px] bg-slate-100 rounded" />
          <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block w-[22px] h-[2px] bg-slate-100 rounded" />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-bg-primary/97 backdrop-blur-2xl z-[999] flex flex-col items-center justify-center gap-8"
          >
            {LINKS.map((l, i) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={goTo(l.toLowerCase())}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                className="font-display text-4xl font-bold text-slate-400 hover:text-accent-cyan transition-colors"
              >
                {l}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
