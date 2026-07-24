export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-white/[0.08] py-9 px-[6%] text-center relative z-[1]">
      <p className="text-[0.92rem] text-slate-400">
        Designed &amp; Built by{' '}
        <span className="text-gradient font-bold">Anurag Choubey</span>
      </p>
      <p className="text-slate-400 text-[0.82rem] mt-1.5 opacity-70">
        Pune, India &bull; {new Date().getFullYear()} &bull; Open to opportunities
      </p>
    </footer>
  );
}
