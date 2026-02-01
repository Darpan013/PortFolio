import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <main className="bg-zinc-950 min-h-screen text-zinc-100 selection:bg-indigo-500/30">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Certificates />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
