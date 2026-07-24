import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

export default function About() {
  const { personal, education } = PORTFOLIO_DATA;
  const borderColors = ['#06b6d4', '#8b5cf6', '#f59e0b'];

  return (
    <section id="about" className="bg-bg-secondary py-28 px-[6%] relative z-[1]">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading tag="Who I Am" title="About Me" />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="glass rounded-2xl p-8"
          >
            <p className="text-slate-400 leading-[1.9] mb-5">{personal.bio}</p>
            <p className="text-slate-100 leading-[1.8] text-[0.95rem]">
              I thrive at the intersection of <strong className="text-accent-cyan font-semibold">AI engineering</strong> and{' '}
              <em className="text-accent-violet not-italic font-semibold">enterprise backend systems</em> — building agentic
              automation that is both intelligent and reliable. From orchestrating multi-agent RAG pipelines to shipping
              FastAPI services for Oracle Fusion, every line of code serves a real purpose.
            </p>
          </motion.div>

          <div>
            <div className="font-display font-bold text-[0.8rem] uppercase tracking-[0.1em] text-slate-400 mb-4">
              Education
            </div>
            {education.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                whileHover={{ x: 4 }}
                className="bg-bg-card border border-white/[0.08] rounded-xl px-6 py-5 mb-3.5"
                style={{ borderLeft: `3px solid ${borderColors[i % borderColors.length]}` }}
              >
                <div className="font-display font-bold text-[0.97rem]">{e.degree}</div>
                <div className="text-accent-cyan text-[0.87rem] font-medium my-1">
                  {e.school}{e.board ? ` · ${e.board}` : ''}
                </div>
                <div className="flex justify-between text-slate-400 text-[0.82rem]">
                  <span>{e.score}</span>
                  <span>{e.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
