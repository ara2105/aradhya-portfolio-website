import Navbar from '../components/Navbar'
import Hero from '../sections-home/hero'
import About from '../sections-home/About'
import Projects from '../sections-home/Projects'
import Skills from '../sections-home/Skills'
import Contact from '../sections-home/Contact'

export default function HomePage() {
  return (
    <div className="relative min-h-screen noise-bg">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
