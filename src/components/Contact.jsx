import { useState } from 'react';
import { contact } from '../content';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const backend = import.meta.env.VITE_BACKEND_URL || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${backend}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Failed to submit');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus(err.message || 'error');
    }
  };

  return (
    <section id="contact" className="relative py-16">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-white">Get in touch</h2>
          <p className="mt-3 text-white/80 text-sm">I'm open to internships, freelance work, and collaborations. Let's build something great.</p>

          <div className="mt-6 space-y-2 text-white/80 text-sm">
            <p>Email: <a className="hover:text-white" href={`mailto:${contact.email}`}>{contact.email}</a></p>
            <p>Phone: <a className="hover:text-white" href={`tel:${contact.phone}`}>{contact.phone}</a></p>
            <p>GitHub: <a className="hover:text-white" href={contact.github} target="_blank" rel="noreferrer">{contact.github}</a></p>
            <p>LinkedIn: <a className="hover:text-white" href={contact.linkedin} target="_blank" rel="noreferrer">{contact.linkedin}</a></p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 space-y-4">
          <div>
            <label className="block text-sm text-white/80">Name</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="mt-1 w-full bg-slate-900/60 text-white rounded-lg px-3 py-2 ring-1 ring-white/10 focus:ring-2 focus:ring-white/30 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-white/80">Email</label>
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="mt-1 w-full bg-slate-900/60 text-white rounded-lg px-3 py-2 ring-1 ring-white/10 focus:ring-2 focus:ring-white/30 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-white/80">Message</label>
            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={4} className="mt-1 w-full bg-slate-900/60 text-white rounded-lg px-3 py-2 ring-1 ring-white/10 focus:ring-2 focus:ring-white/30 outline-none" />
          </div>
          <button disabled={status==='loading'} className="w-full px-5 py-2.5 rounded-lg bg-white/90 text-slate-900 font-medium hover:bg-white transition">
            {status==='loading' ? 'Sending...' : 'Send Message'}
          </button>
          {status==='success' && <p className="text-emerald-300 text-sm">Thanks! Your message has been sent.</p>}
          {status && status!=='success' && status!=='loading' && <p className="text-rose-300 text-sm">{String(status)}</p>}
        </form>
      </div>
    </section>
  );
}
