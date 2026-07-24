import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio.js';
import { ICONS } from './icons.jsx';
import SpotlightCard from './effects/SpotlightCard.jsx';
import SectionHeading from './SectionHeading.jsx';
import MovingBorderButton from './effects/MovingBorderButton.jsx';

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
      navigator.clipboard.writeText(contact.email).then(() => showToast('Email copied to clipboard')).catch(() => showToast(contact.email));
    } else {
      showToast(contact.email);
    }
  }

  const quickLinks = [
    { icon: ICONS.whatsapp, label: 'WhatsApp', val: 'Message me', href: contact.whatsapp, color: '#25D366' },
    { icon: ICONS.mapPin, label: 'Location', val: contact.location, href: contact.maplink, color: '#ef4444' },
    { icon: ICONS.linkedin, label: 'LinkedIn', val: 'Connect', href: links.linkedin, color: '#0A66C2' },
    { icon: ICONS.github, label: 'GitHub', val: 'Follow', href: links.github, color: '#cbd5e1' },
  ];

  return (
    <section id="contact" className="bg-bg-primary py-28 px-[6%] relative z-[1]">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading tag="Get In Touch" title="Let's Work Together" />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-slate-400 leading-[1.8] max-w-[520px] -mt-8 mb-10"
        >
          Open to full-time roles, freelance projects, and collaborations. Based in Pune, and available for remote work worldwide.
        </motion.p>

        <div className="grid md:grid-cols-5 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="md:col-span-3 glass rounded-2xl"
          >
            <SpotlightCard color="#06b6d4" className="rounded-2xl p-8 md:p-10 flex flex-col h-full">
              <div className="flex-1 flex flex-col gap-5">
                <a
                  href={`mailto:${contact.email}`}
                  onClick={copyEmail}
                  className="group flex items-center gap-4 cursor-hover"
                >
                  <span className="w-11 h-11 rounded-xl bg-accent-cyan/10 border border-accent-cyan/25 text-accent-cyan flex items-center justify-center flex-shrink-0">
                    <span className="w-[18px] h-[18px]">{ICONS.mail}</span>
                  </span>
                  <div className="min-w-0">
                    <div className="text-[0.72rem] text-slate-500 uppercase tracking-wider mb-0.5">Email</div>
                    <div className="font-display font-semibold text-[1.05rem] truncate group-hover:text-accent-cyan transition-colors">{contact.email}</div>
                  </div>
                  <span className="ml-auto w-4 h-4 text-slate-600 group-hover:text-accent-cyan transition-colors flex-shrink-0">{ICONS.copy}</span>
                </a>

                <div className="h-px bg-white/[0.06]" />

                <a href={`tel:${contact.phone}`} className="group flex items-center gap-4 cursor-hover">
                  <span className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <span className="w-[18px] h-[18px]">{ICONS.phone}</span>
                  </span>
                  <div className="min-w-0">
                    <div className="text-[0.72rem] text-slate-500 uppercase tracking-wider mb-0.5">Phone</div>
                    <div className="font-display font-semibold text-[1.05rem] group-hover:text-emerald-400 transition-colors">{contact.phone}</div>
                  </div>
                </a>
              </div>

              <MovingBorderButton
                href={`mailto:${contact.email}`}
                className="mt-8 self-start"
                innerClassName="px-6 py-3 bg-accent-cyan text-black font-bold text-[0.88rem]"
              >
                Send me an email <span>→</span>
              </MovingBorderButton>
            </SpotlightCard>
          </motion.div>

          <div className="md:col-span-2 grid grid-cols-2 gap-5">
            {quickLinks.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl cursor-hover block"
              >
                <SpotlightCard color={c.color} className="rounded-2xl px-5 py-5 h-full flex flex-col gap-3">
                  <span className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${c.color}1a`, border: `1px solid ${c.color}40`, color: c.color }}>
                    <span className="w-4 h-4">{c.icon}</span>
                  </span>
                  <div>
                    <div className="text-[0.68rem] text-slate-500 uppercase tracking-wider mb-0.5">{c.label}</div>
                    <div className="font-semibold text-[0.85rem] text-slate-200">{c.val}</div>
                  </div>
                </SpotlightCard>
              </motion.a>
            ))}
          </div>
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
