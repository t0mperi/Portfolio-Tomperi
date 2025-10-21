import './App.css'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Header />
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
