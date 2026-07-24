import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio.js';
import { ICONS, PLATFORM_STYLES } from './icons.jsx';

function useTypewriter(texts) {
  const [text, setText] = useState('');
  useEffect(() => {
    let ti = 0, ci = 0, deleting = false, timer;
    const tick = () => {
      const cur = texts[ti];
      if (!deleting) {
        ci++;
        setText(cur.slice(0, ci));
        if (ci === cur.length) { deleting = true; timer = setTimeout(tick, 2100); return; }
        timer = setTimeout(tick, 75);
      } else {
        ci--;
        setText(cur.slice(0, ci));
        if (ci === 0) { deleting = false; ti = (ti + 1) % texts.length; }
        timer = setTimeout(tick, 35);
      }
    };
    timer = setTimeout(tick, 1600);
    return () => clearTimeout(timer);
  }, [texts]);
  return text;
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] } }),
};

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;
  const typed = useTypewriter(personal.taglines);
  const socialOrder = ['github', 'linkedin', 'leetcode', 'whatsapp'];
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={sectionRef} className="min-h-screen flex items-center pt-[68px] relative z-[1] px-[6%]">
      <div className="grid md:grid-cols-2 gap-16 items-center w-full max-w-[1100px] mx-auto">
        <motion.div style={{ y: textY, opacity: fade }} className="text-center md:text-left order-2 md:order-1">
          <motion.div
            variants={fadeUp} custom={0.5} initial="hidden" animate="show"
            className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3.5 py-1.5 rounded-full text-[0.82rem] font-semibold mb-5"
          >
            <motion.span
              className="w-[7px] h-[7px] bg-emerald-400 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {personal.contact.available ? "Available for opportunities" : 'Currently employed'}
          </motion.div>

          <motion.div variants={fadeUp} custom={0.6} initial="hidden" animate="show" className="text-slate-400 text-[1.05rem] mb-1">
            Hi, I'm
          </motion.div>

          <motion.h1
            variants={fadeUp} custom={0.68} initial="hidden" animate="show"
            className="font-display font-extrabold leading-[1.05] tracking-tight text-[clamp(2.3rem,5.5vw,4.1rem)] mb-4"
          >
            {personal.name.toUpperCase()}
          </motion.h1>

          <motion.div
            variants={fadeUp} custom={0.78} initial="hidden" animate="show"
            className="text-accent-cyan font-medium text-[clamp(1rem,2.5vw,1.3rem)] min-h-[2em] mb-5"
          >
            {typed}
            <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} className="text-accent-cyan">|</motion.span>
          </motion.div>

          <motion.p
            variants={fadeUp} custom={0.88} initial="hidden" animate="show"
            className="text-slate-400 leading-[1.85] max-w-[480px] mx-auto md:mx-0 mb-8"
          >
            {personal.bio}
          </motion.p>

          <motion.div variants={fadeUp} custom={0.98} initial="hidden" animate="show" className="flex gap-4 flex-wrap justify-center md:justify-start mb-8">
            <motion.a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              whileHover={{ scale: 1.05, y: -2, boxShadow: '0 0 40px rgba(6,182,212,0.65)' }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 bg-accent-cyan text-black font-bold text-[0.92rem] rounded-xl inline-flex items-center gap-2 shadow-[0_0_24px_rgba(6,182,212,0.35)] cursor-hover"
            >
              Explore My Work <span>→</span>
            </motion.a>
            <motion.a
              href={personal.resume}
              download
              whileHover={{ scale: 1.05, y: -2, backgroundColor: '#06b6d4', color: '#000' }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 bg-transparent text-accent-cyan font-bold text-[0.92rem] rounded-xl border-2 border-accent-cyan/50 inline-flex items-center gap-2 cursor-hover"
            >
              {ICONS.dl} Download Resume
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp} custom={1.08} initial="hidden" animate="show" className="flex gap-3 justify-center md:justify-start">
            {socialOrder.filter((k) => personal.links[k]).map((k) => {
              const s = PLATFORM_STYLES[k];
              return (
                <motion.a
                  key={k}
                  href={personal.links[k]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={k}
                  whileHover={{ y: -4, scale: 1.08, boxShadow: `0 0 28px ${s.color}80` }}
                  className="w-11 h-11 rounded-xl border flex items-center justify-center cursor-hover"
                  style={{ borderColor: s.border, color: s.color, background: s.bg }}
                >
                  <span className="w-[18px] h-[18px]">{ICONS[k]}</span>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: photoY }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center order-1 md:order-2"
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px]"
          >
            <motion.div
              className="absolute w-[80%] h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)' }}
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)' }}>
              <motion.div
                className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2"
                style={{ background: 'conic-gradient(from 0deg, #06b6d4, #8b5cf6, #f59e0b, #06b6d4)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            <div
              className="absolute inset-1 bg-bg-card overflow-hidden"
              style={{ clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)' }}
            >
              <img src={personal.photo} alt={personal.name} className="w-full h-full object-cover object-top" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 text-xs tracking-wider uppercase"
      >
        <span>Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 2.2, repeat: Infinity }} className="w-5">
          {ICONS.arrow}
        </motion.span>
      </motion.div>
    </section>
  );
}
