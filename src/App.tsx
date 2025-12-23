import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import MouseGradient from './components/MouseGradient'

function App() {
  return (
    <ThemeProvider>
      <MouseGradient>
        <div className="app-container">
          <Header />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </MouseGradient>
    </ThemeProvider>
  )
}

export default App
