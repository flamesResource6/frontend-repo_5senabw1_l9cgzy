import { contact } from '../content';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 mt-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70 text-sm">
        <p>© {new Date().getFullYear()} Tej Gokani. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${contact.email}`} className="hover:text-white">Email</a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
