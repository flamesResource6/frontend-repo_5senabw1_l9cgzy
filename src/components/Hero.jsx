import Spline from '@splinetool/react-spline';
import { personal } from '../content';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow">{personal.name}</h1>
          <p className="mt-4 text-lg text-blue-100">{personal.tagline}</p>
          <p className="mt-6 text-blue-100/90 max-w-prose">{personal.bio}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={scrollToProjects} className="px-5 py-2.5 rounded-full bg-white/90 text-slate-900 font-medium hover:bg-white transition">
              View Projects
            </button>
            <button onClick={scrollToContact} className="px-5 py-2.5 rounded-full bg-slate-900/60 text-white ring-1 ring-white/30 hover:bg-slate-900/80 transition">
              Get in Touch
            </button>
          </div>
        </div>
        <div className="hidden lg:block" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/50 to-slate-950" />
    </section>
  );
}
