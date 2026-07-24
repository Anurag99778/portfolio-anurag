import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';
import { ICONS } from './icons.jsx';

function ProjectCard({ p, i }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-7, 7]);
  const spotlight = useMotionTemplate`radial-gradient(360px circle at ${px}px ${py}px, rgba(6,182,212,0.14), transparent 75%)`;

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
    px.set(e.clientX - rect.left);
    py.set(e.clientY - rect.top);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: i * 0.12 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ scale: 1.02 }}
      className="relative bg-bg-card border border-white/[0.08] rounded-2xl overflow-hidden cursor-hover group"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: spotlight }}
      />
      <div className="h-[110px] relative overflow-hidden" style={{ background: p.gradient }}>
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(255,255,255,0.06) 12px, rgba(255,255,255,0.06) 13px)',
          }}
        />
        <div className="absolute bottom-4 left-6 font-display font-extrabold text-2xl text-white/10 uppercase tracking-wide">
          {p.name}
        </div>
      </div>
      <div className="p-6">
        <div className="font-display font-bold text-[1.15rem] mb-0.5">{p.name}</div>
        <div className="text-accent-cyan text-[0.83rem] font-medium mb-3">{p.subtitle}</div>
        <p className="text-slate-400 text-[0.88rem] leading-[1.75] mb-4">{p.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.tech.map((t) => (
            <span key={t} className="bg-accent-cyan/[0.08] border border-accent-cyan/25 text-accent-cyan px-2.5 py-1 rounded-full text-[0.76rem] font-medium">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 border border-white/10 rounded-lg text-slate-400 text-[0.82rem] font-medium hover:border-accent-cyan hover:text-accent-cyan hover:bg-accent-cyan/[0.07] transition-colors"
            >
              <span className="w-3.5 h-3.5">{ICONS.github}</span> GitHub
            </a>
          )}
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 border border-white/10 rounded-lg text-slate-400 text-[0.82rem] font-medium hover:border-accent-cyan hover:text-accent-cyan hover:bg-accent-cyan/[0.07] transition-colors"
            >
              <span className="w-3.5 h-3.5">{ICONS.extlink}</span> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const { links } = PORTFOLIO_DATA.personal;

  return (
    <section id="projects" className="bg-bg-secondary py-28 px-[6%] relative z-[1]">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex justify-between items-end flex-wrap gap-4 mb-4">
          <SectionHeading tag="What I've Built" title="Projects" />
          <motion.a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ gap: '0.65rem' }}
            className="text-accent-cyan text-[0.88rem] font-semibold inline-flex items-center gap-1.5 pb-12"
          >
            All projects on GitHub →
          </motion.a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
