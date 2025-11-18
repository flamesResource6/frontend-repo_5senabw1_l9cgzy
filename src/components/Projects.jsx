import { projects } from '../content';
import { Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="relative py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-white">Projects</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 hover:translate-y-[-2px] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-white font-medium">{p.title}</h3>
                <a href={p.github} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white"><Github size={18} /></a>
              </div>
              <p className="mt-3 text-sm text-white/80">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-full bg-slate-900/60 text-white/80 ring-1 ring-white/10 text-xs">{t}</span>
                ))}
              </div>
              <a href={p.live} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-blue-300 hover:text-white">Live Demo →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
