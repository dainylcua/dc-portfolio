import './App.css'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Hero from './components/Hero'
import { Helmet } from 'react-helmet'

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dainyl Cua</title>
      </Helmet>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App
