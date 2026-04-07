const About = () => (
  <section className="about" id="about">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-gradient">About Me</span>
          <span>— The Builder Behind the Code</span>
        </h2>
      </div>
      <div className="about-content">
        <div className="about-card-3d" data-tilt>
          <div className="about-card-inner">
            <div className="showcase-grid"></div>
            <div className="about-image">
              <div className="image-frame">
                <div className="showcase-glow"></div>
                <div className="image-placeholder" style={{ background: 'transparent' }}>
                  <img
                    src="assets/about-profile.png"
                    alt="Akil - Developer at Work"
                    className="about-avatar-img"
                  />
                </div>
                <div className="frame-glow"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-text">
          <div className="about-main-text">
            <p className="about-intro">
              I build <span className="text-highlight">systems</span>, not just projects.
              I take complex ideas and turn them into real, usable products that solve actual problems.
            </p>
            <p>
              My focus lies in <span className="text-highlight">AI-powered applications</span>,{' '}
              <span className="text-highlight">full-stack development</span>, and{' '}
              <span className="text-highlight">mobile apps</span> — where performance, scalability,
              and user experience matter.
            </p>
            <p>
              I believe in shipping fast, learning continuously, and writing clean, maintainable code
              that stands the test of time.
            </p>
          </div>

          <div className="my-approach">
            <div className="approach-item">
              <span className="approach-icon">⚡</span>
              <span className="approach-text">Solve real-world problems</span>
            </div>
            <div className="approach-item">
              <span className="approach-icon">⚡</span>
              <span className="approach-text">Build scalable systems</span>
            </div>
            <div className="approach-item">
              <span className="approach-icon">⚡</span>
              <span className="approach-text">Focus on clean &amp; efficient code</span>
            </div>
          </div>

          <p className="about-closing">
            Currently exploring AI systems and building impactful applications.
          </p>

          <div className="about-stats">
            <div className="stat-card" data-tilt>
              <span className="stat-icon">🚀</span>
              <span className="stat-number" data-count="4">0</span>
              <span className="stat-suffix">+</span>
              <span className="stat-label">Real-World Projects</span>
            </div>
            <div className="stat-card" data-tilt>
              <span className="stat-icon">📜</span>
              <span className="stat-number" data-count="5">0</span>
              <span className="stat-suffix">+</span>
              <span className="stat-label">Certifications Completed</span>
            </div>
            <div className="stat-card" data-tilt>
              <span className="stat-icon">🛠️</span>
              <span className="stat-number" data-count="10">0</span>
              <span className="stat-suffix">+</span>
              <span className="stat-label">Technologies Used</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
