import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

function CountStat({ raw }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(raw);

  useEffect(() => {
    if (!inView) return;
    const match = raw.match(/([\d.]+)/);
    if (!match) {
      // text-only stat: type it out
      let i = 0;
      setDisplay('');
      const iv = setInterval(() => {
        i++;
        setDisplay(raw.slice(0, i));
        if (i >= raw.length) clearInterval(iv);
      }, 45);
      return () => clearInterval(iv);
    }
    const num = parseFloat(match[1]);
    const prefix = raw.slice(0, raw.indexOf(match[1]));
    const suffix = raw.slice(raw.indexOf(match[1]) + match[1].length);
    const isFloat = match[1].includes('.');
    const dec = isFloat ? (match[1].split('.')[1] || '').length : 0;
    const controls = animate(0, num, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        setDisplay(prefix + (isFloat ? v.toFixed(dec) : Math.floor(v)) + suffix);
      },
      onComplete() {
        setDisplay(raw);
      },
    });
    return () => controls.stop();
  }, [inView, raw]);

  return <span ref={ref}>{display}</span>;
}

export default function Achievements() {
  const { achievements } = PORTFOLIO_DATA;

  return (
    <section id="achievements" className="bg-bg-secondary py-28 px-[6%] relative z-[1]">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading tag="Milestones" title="Achievements" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, scale: 0.82, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.04, y: -5, boxShadow: '0 20px 50px rgba(0,0,0,0.35), 0 0 30px rgba(6,182,212,0.12)', borderColor: 'rgba(6,182,212,0.3)' }}
              className="glass rounded-2xl p-7 text-center"
            >
              <div className="text-4xl mb-3">{a.icon}</div>
              <div className="font-display font-extrabold text-[1.6rem] md:text-[2rem] text-gradient mb-1">
                <CountStat raw={a.stat} />
              </div>
              <div className="font-semibold text-[0.97rem] mb-1">{a.label}</div>
              <div className="text-slate-400 text-[0.8rem] leading-snug">{a.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
