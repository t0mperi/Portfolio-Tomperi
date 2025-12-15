import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
