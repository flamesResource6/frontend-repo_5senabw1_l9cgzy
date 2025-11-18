import { useEffect, useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const initial = stored || 'dark';
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const Item = ({ href, children }) => (
    <a href={href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-white/10 text-white/90 text-sm">
      {children}
    </a>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-slate-900/40 ring-1 ring-white/10 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 px-4 py-2">
          <a href="#" className="text-white font-semibold">TG</a>

          <nav className="hidden sm:flex items-center gap-1">
            <Item href="#projects">Projects</Item>
            <Item href="#skills">Skills</Item>
            <Item href="#education">Education</Item>
            <Item href="#contact">Contact</Item>
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="px-2 py-1 rounded-lg text-white/90 hover:bg-white/10 text-sm">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
            <button onClick={() => setOpen((o) => !o)} className="sm:hidden px-2 py-1 rounded-lg text-white/90 hover:bg-white/10 text-sm">Menu</button>
          </div>
        </div>
      </div>

      {open && (
        <div className="sm:hidden mx-auto max-w-6xl px-4">
          <div className="mt-2 flex flex-col rounded-xl bg-slate-900/60 ring-1 ring-white/10 p-2">
            <Item href="#projects">Projects</Item>
            <Item href="#skills">Skills</Item>
            <Item href="#education">Education</Item>
            <Item href="#contact">Contact</Item>
          </div>
        </div>
      )}
    </header>
  );
}
