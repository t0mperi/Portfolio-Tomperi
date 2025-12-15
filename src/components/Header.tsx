import './Header.css';


export default function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <span className="brand-name">HENRI TOMPERI</span>
      </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <a href="https://github.com/t0mperi" aria-label="GitHub">GH</a>
          <a href="https://www.linkedin.com/in/henri-tomperi-8a2a0229b/" aria-label="LinkedIn">in</a>
        </div>
    </header>
    
  )
}
