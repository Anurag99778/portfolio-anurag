import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio.js';
import Marquee from './effects/Marquee.jsx';

export default function TechMarquee() {
  const allSkills = Object.values(PORTFOLIO_DATA.skills).flatMap((d) => d.items);
  const rowA = allSkills.filter((_, i) => i % 2 === 0);
  const rowB = allSkills.filter((_, i) => i % 2 === 1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-[1] py-10 border-y border-white/[0.06] bg-white/[0.015] flex flex-col gap-3"
    >
      <Marquee items={rowA} direction="left" speed={38} />
      <Marquee items={rowB} direction="right" speed={44} />
    </motion.div>
  );
}
