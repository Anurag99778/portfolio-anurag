import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';
import SpotlightCard from './effects/SpotlightCard.jsx';

function ExpCard({ exp, side }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.35)' }}
      className={`bg-bg-card border border-white/[0.08] rounded-2xl ${side === 'left' ? 'md:text-right' : ''}`}
      style={{ borderTop: `3px solid ${exp.color}` }}
    >
      <SpotlightCard color={exp.color} className="rounded-2xl p-6 md:p-7">
      <div className="font-display font-bold text-[1.05rem] mb-1">{exp.role}</div>
      <div className="text-[0.9rem] font-semibold mb-1" style={{ color: exp.color }}>
        {exp.company} &middot; {exp.location}
      </div>
      <div className="text-slate-400 text-[0.82rem] mb-3">{exp.period}</div>
      {exp.current && (
        <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/35 text-emerald-400 px-2.5 py-1 rounded-full text-[0.73rem] font-bold mb-4">
          <motion.span
            className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          CURRENT
        </span>
      )}
      <ul className={`flex flex-col gap-2.5 ${side === 'left' ? 'md:items-end' : ''}`}>
        {exp.points.map((p, i) => (
          <li key={i} className={`text-slate-400 text-[0.875rem] leading-[1.65] flex items-start gap-2 max-w-[440px] ${side === 'left' ? 'md:flex-row-reverse md:text-right' : ''}`}>
            <span className="text-accent-cyan text-[0.6rem] mt-1.5 flex-shrink-0">▶</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
      </SpotlightCard>
    </motion.div>
  );
}

export default function Experience() {
  const { experience } = PORTFOLIO_DATA;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.4'] });
  const axisHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="bg-bg-primary py-28 px-[6%] relative z-[1]">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading tag="Career Path" title="Experience" />
        <div className="relative py-4" ref={ref}>
          <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full -translate-x-1/2 bg-white/5" />
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 w-[2px] -translate-x-1/2 rounded"
            style={{ height: axisHeight, background: 'linear-gradient(180deg, #06b6d4, #8b5cf6, transparent)' }}
          />
          <div className="flex flex-col gap-14">
            {experience.map((exp, i) => {
              const isOdd = i % 2 === 0;
              return (
                <div key={exp.company} className="grid md:grid-cols-[1fr_56px_1fr] gap-0 items-start relative">
                  <div className={`hidden md:block ${isOdd ? 'col-start-3' : 'col-start-1 row-start-1'}`} />
                  <div className={isOdd ? 'md:col-start-1' : 'md:col-start-3'}>
                    <ExpCard exp={exp} side={isOdd ? 'left' : 'right'} />
                  </div>
                  <div className="hidden md:flex md:col-start-2 items-center justify-center relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="w-[18px] h-[18px] rounded-full mt-6 relative"
                      style={{ background: exp.color, boxShadow: '0 0 0 4px #030712' }}
                    >
                      <motion.span
                        className="absolute -inset-1.5 rounded-full border"
                        style={{ borderColor: exp.color }}
                        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
