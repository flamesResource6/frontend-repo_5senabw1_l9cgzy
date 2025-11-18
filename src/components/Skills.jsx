import { skills } from '../content';

export default function Skills() {
  return (
    <section id="skills" className="relative py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-white">Skills</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-10">
          <div>
            <h3 className="text-white/90 font-medium">Technical</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.technical.map((s) => (
                <span key={s} className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-200 ring-1 ring-blue-400/20 text-sm">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-white/90 font-medium">Soft</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.soft.map((s) => (
                <span key={s} className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-400/20 text-sm">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
