import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import About1 from './components/sections/About1';
import Projects from './components/sections/Projects';
import Events from './components/sections/Events';
import Resources from './components/sections/Resources';
import Contact from './components/sections/Contact';
import ImageCarousel from './components/sections/ImageCarousel';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ImageCarousel />
        <About1 />
        <About />
        <Projects />

        <Events />
        <Resources />
        <Contact />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;