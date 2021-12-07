import './App.css'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <Hero />
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App
