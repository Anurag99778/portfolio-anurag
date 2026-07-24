import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';
import SpotlightCard from './effects/SpotlightCard.jsx';

const CAT_ICONS = {
  'AI / LLM': '🤖',
  'Oracle Fusion': '🔶',
  'Python / Web': '⚙️',
  Languages: '⌨️',
  Databases: '🗄️',
  'Cloud & DevOps': '☁️',
  Tools: '🛠️',
};

function SkillCard({ cat, data, i }) {
  const c = data.color;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: i * 0.07 }}
      whileHover={{ y: -6, boxShadow: `0 20px 50px rgba(0,0,0,0.3), 0 0 32px ${c}28`, borderColor: `${c}55` }}
      className="bg-bg-card border border-white/[0.08] rounded-2xl overflow-hidden"
    >
      <SpotlightCard color={c} className="rounded-2xl">
      <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg,${c},#8b5cf6,${c})`, backgroundSize: '200% auto' }} />
      <div className="flex items-center gap-2.5 px-5 pt-4 pb-3.5 border-b border-white/[0.08]">
        <span className="text-[1.2rem]">{CAT_ICONS[cat] || '🔹'}</span>
        <span className="font-display font-bold text-[0.8rem] uppercase tracking-[0.1em]" style={{ color: c }}>
          {cat}
        </span>
        <span className="ml-auto text-[0.7rem] font-bold px-2.5 py-0.5 rounded-full bg-white/[0.06] text-slate-400 border border-white/10 whitespace-nowrap">
          {data.items.length} skills
        </span>
      </div>
      <div className="flex flex-wrap gap-2 px-5 py-4">
        {data.items.map((item, idx) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, y: 10, scale: 0.88 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.3, delay: idx * 0.045 }}
            whileHover={{ scale: 1.1, y: -2, filter: 'brightness(1.35)' }}
            className="px-3.5 py-1 rounded-full text-[0.8rem] font-medium border"
            style={{ background: `${c}18`, borderColor: `${c}55`, color: c }}
          >
            {item}
          </motion.span>
        ))}
      </div>
      </SpotlightCard>
    </motion.div>
  );
}

export default function Skills() {
  const { skills, certifications } = PORTFOLIO_DATA;
  const totalSkills = Object.values(skills).reduce((s, d) => s + d.items.length, 0);
  const totalCats = Object.keys(skills).length;

  return (
    <section id="skills" className="bg-bg-primary py-28 px-[6%] relative z-[1]">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading tag="Tech Stack" title="Skills" />
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4 mb-10 text-[0.88rem] text-slate-400"
        >
          <span><strong className="text-accent-cyan font-bold">{totalCats}</strong> Categories</span>
          <span className="opacity-35">·</span>
          <span><strong className="text-accent-cyan font-bold">{totalSkills}+</strong> Technologies</span>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-5">
          {Object.entries(skills).map(([cat, data], i) => (
            <SkillCard key={cat} cat={cat} data={data} i={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-8 glass rounded-2xl p-6"
        >
          <div className="font-display font-bold text-[0.8rem] uppercase tracking-[0.1em] text-slate-400 mb-3">
            Certifications
          </div>
          <ul className="flex flex-col gap-2">
            {certifications.map((c) => (
              <li key={c} className="text-slate-300 text-[0.9rem] flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">🏅</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
