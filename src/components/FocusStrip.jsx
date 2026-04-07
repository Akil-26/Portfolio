const FocusStrip = () => (
  <section className="focus-strip">
    <div className="container">
      <div className="focus-boxes">
        <div className="focus-box" data-tilt>
          <div className="focus-icon">🤖</div>
          <span className="focus-label">AI Systems</span>
        </div>
        <div className="focus-box" data-tilt>
          <div className="focus-icon">🌐</div>
          <span className="focus-label">Full Stack Apps</span>
        </div>
        <div className="focus-box" data-tilt>
          <div className="focus-icon">📱</div>
          <span className="focus-label">Flutter Mobile</span>
        </div>
        <div className="focus-box" data-tilt>
          <div className="focus-icon">⚙️</div>
          <span className="focus-label">Backend APIs</span>
        </div>
      </div>
    </div>
  </section>
)

export default FocusStrip
