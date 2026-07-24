import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio.js';
import SpotlightCard from './effects/SpotlightCard.jsx';

export default function Contact() {
  const { contact, links } = PORTFOLIO_DATA.personal;
  const [toast, setToast] = useState('');

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(''), 2200);
  }

  function copyEmail(e) {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(contact.email).then(() => showToast('Copied! ✓')).catch(() => showToast(contact.email));
    } else {
      showToast(contact.email);
    }
  }

  const cards = [
    { icon: '📧', label: 'Email', val: contact.email, href: `mailto:${contact.email}`, copy: true, color: '#06b6d4' },
    { icon: '📱', label: 'Phone', val: contact.phone, href: `tel:${contact.phone}`, color: '#10b981' },
    { icon: '💬', label: 'WhatsApp', val: 'Click to Chat', href: contact.whatsapp, ext: true, color: '#25D366' },
    { icon: '📍', label: 'Location', val: contact.location, href: contact.maplink, ext: true, color: '#ef4444' },
    { icon: '💼', label: 'LinkedIn', val: 'linkedin.com/in/anurag…', href: links.linkedin, ext: true, color: '#0077b5' },
    { icon: '🐙', label: 'GitHub', val: 'github.com/Anurag99778', href: links.github, ext: true, color: '#e2e8f0' },
  ];

  return (
    <section id="contact" className="bg-bg-primary py-28 px-[6%] relative z-[1]">
      <div className="max-w-[1100px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-display font-extrabold text-[clamp(2rem,5.5vw,3.8rem)] leading-[1.1] mb-1"
        >
          Let's Build Something
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-extrabold text-[clamp(2rem,5.5vw,3.8rem)] leading-[1.1] mb-5"
        >
          <span className="text-gradient">Extraordinary.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 leading-[1.8] max-w-[480px] mb-12"
        >
          Open to full-time roles, freelance projects, and collaborations. Based in Pune &amp; available for remote work worldwide.
        </motion.p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.ext ? '_blank' : undefined}
              rel={c.ext ? 'noopener noreferrer' : undefined}
              onClick={c.copy ? copyEmail : undefined}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -5, borderColor: c.color, boxShadow: `0 12px 40px rgba(0,0,0,0.3), 0 0 28px ${c.color}44`, background: `${c.color}0d` }}
              className="glass rounded-2xl min-h-[80px] cursor-hover block"
            >
              <SpotlightCard color={c.color} className="rounded-2xl px-5 py-6 flex items-center gap-4 h-full">
                <span className="text-[1.7rem] leading-none flex-shrink-0">{c.icon}</span>
                <div>
                  <div className="text-[0.72rem] text-slate-400 uppercase tracking-wider mb-1">{c.label}</div>
                  <div className="font-semibold text-[0.88rem] break-words">{c.val}</div>
                </div>
              </SpotlightCard>
            </motion.a>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 12, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 12, x: '-50%' }}
            className="fixed bottom-10 left-1/2 bg-bg-card border border-accent-cyan text-accent-cyan px-6 py-2.5 rounded-full text-sm font-bold z-[9000] shadow-[0_0_20px_rgba(6,182,212,0.25)]"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
