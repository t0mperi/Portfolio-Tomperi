import './Hero.css';

export default function Hero() {
  return (
    <section className="hero section" id="hero">
        <img
            src="/portfoliokuva.jpg"
            alt="Portrait of Henri Tomperi"
            className="profile-photo"
            loading="lazy"
          />
      <div className="hero-text">
        <div className="pill">Full-stack student</div>
        <div className="hero-box">
          <h1>Hi, I'm Henri Tomperi</h1>
          <p className="typing">I'm a Software Development student at Haaga-Helia University of Applied Sciences</p>
        </div>

        <div className="hero-box">
          <a className="btn-ghost" href="#projects">View Projects</a>
          <a className="btn-ghost" href="#contact">Contact</a>
        </div>
        </div>
    </section>
  );
}

