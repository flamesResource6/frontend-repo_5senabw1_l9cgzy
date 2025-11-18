import { education } from '../content';

export default function Education() {
  return (
    <section id="education" className="relative py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-white">Education</h2>
        <div className="mt-6 space-y-4">
          {education.map((e) => (
            <div key={e.degree} className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-white font-medium">{e.degree}</p>
                  <p className="text-white/80 text-sm">{e.institution}</p>
                </div>
                <div className="text-white/60 text-sm">{e.year}{e.score ? ` • ${e.score}` : ''}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
