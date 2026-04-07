const Navbar = () => (
  <nav className="navbar" id="navbar">
    <div className="nav-container">
      <a href="#home" className="nav-logo">
        <div className="logo-3d">
          <span className="logo-code-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </span>
          <span className="logo-text-wrapper">
            <span className="logo-name">Akil</span>
            <span className="logo-title">Developer</span>
          </span>
        </div>
      </a>
      <ul className="nav-menu" id="nav-menu">
        <li><a href="#home" className="nav-link active">Home</a></li>
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#projects" className="nav-link">Projects</a></li>
        <li><a href="#skills" className="nav-link">Skills</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </ul>
      <button className="nav-toggle" id="nav-toggle" aria-label="Toggle menu">
        <span className="hamburger"></span>
      </button>
    </div>
  </nav>
)

export default Navbar
