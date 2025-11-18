import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeBar from './components/ResumeBar';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(800px_circle_at_100%_20%,rgba(16,185,129,0.12),transparent_60%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <div className="max-w-6xl mx-auto px-6">
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </div>
      </main>
      <Footer />
      <ResumeBar />
    </div>
  );
}

export default App;
