export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand">
          <span className="brand-name">Neekita Sahu</span>
          <span className="brand-role">Frontend Developer · UI Engineer</span>
        </a>
        <div className="nav-links">
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#work" className="nav-link">WORK</a>
          <a href="#experience" className="nav-link">EXPERIENCE</a>
          <a href="#education" className="nav-link">EDUCATION</a>
          <a href="#skills" className="nav-link">SKILLS</a>
          <a href="#contact" className="nav-cta">CONTACT ↗</a>
        </div>
      </div>
    </nav>
  );
}
