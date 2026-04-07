const Hero = () => (
  <section className="hero" id="home">
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line">Hi, I'm</span>
          <span className="name-3d" data-text="Akileshwaran B">Akileshwaran B</span>
        </h1>
        <p className="hero-role">Full Stack Developer <span className="role-divider">&</span> AI Builder</p>
        <p className="hero-tagline">
          I build <span className="highlight-gradient">AI-powered apps</span> and{' '}
          <span className="highlight-gradient">scalable systems</span>
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            <span>View Projects</span>
            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-glass">
            <span>Contact Me</span>
          </a>
        </div>
        <div className="hero-tech-stack">
          <span className="tech-label">Tech Stack</span>
          <div className="tech-icons">
            <div className="tech-icon" data-tooltip="Flutter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357L14.314 0zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
              </svg>
            </div>
            <div className="tech-icon" data-tooltip="Python">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
              </svg>
            </div>
            <div className="tech-icon" data-tooltip="FastAPI">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z" />
              </svg>
            </div>
            <div className="tech-icon" data-tooltip="React">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278z" />
              </svg>
            </div>
            <div className="tech-icon" data-tooltip="MongoDB">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="phone-3d-scene">
          <div className="phone-container" data-step="0"
            onClick={(e) => { e.currentTarget.dataset.step = ((parseInt(e.currentTarget.dataset.step) || 0) + 1) % 3 }}>

            {/* Primary Phone */}
            <div className="phone-device primary">
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <div className="status-bar">
                    <span className="time">05:00</span>
                    <div className="status-right">
                      <svg className="signal-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M2 22h2V12H2v10zm4 0h2V9H6v13zm4 0h2V6h-2v16zm4 0h2V3h-2v19z" /></svg>
                      <svg className="wifi-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" /></svg>
                      <svg className="battery-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" /></svg>
                    </div>
                  </div>
                  <div className="app-header">
                    <div className="user-greeting">
                      <span className="greeting-text">Good Morning</span>
                      <span className="user-name">Akil</span>
                    </div>
                  </div>
                  <div className="app-content">
                    <div className="app-card">
                      <div className="card-icon red"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg></div>
                      <div className="card-text"><span className="card-title">Projects</span><span className="card-sub">4 Active</span></div>
                    </div>
                    <div className="app-card">
                      <div className="card-icon blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" /></svg></div>
                      <div className="card-text"><span className="card-title">Code</span><span className="card-sub">Flutter • Dart</span></div>
                    </div>
                    <div className="app-card small">
                      <div className="card-icon green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg></div>
                      <div className="card-text"><span className="card-title">Tasks Done</span><span className="card-sub">12 Today</span></div>
                    </div>
                  </div>
                  <div className="app-nav">
                    <div className="nav-item active"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg></div>
                    <div className="nav-item"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg></div>
                    <div className="nav-item"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg></div>
                    <div className="nav-item"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Phone - MindMesh */}
            <div className="phone-device secondary">
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <div className="status-bar">
                    <span className="time">05:00</span>
                    <div className="status-right">
                      <svg className="signal-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M2 22h2V12H2v10zm4 0h2V9H6v13zm4 0h2V6h-2v16zm4 0h2V3h-2v19z" /></svg>
                    </div>
                  </div>
                  <div className="app-header">
                    <div className="user-greeting">
                      <span className="user-name">MindMesh</span>
                      <span className="greeting-text">AI Powered</span>
                    </div>
                  </div>
                  <div className="app-content">
                    <div className="app-card" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.1) 100%)' }}>
                      <div className="card-icon" style={{ background: 'rgba(99,102,241,0.2)', color: '#818cf8' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                      </div>
                      <div className="card-text"><span className="card-title">Summarize PDF</span><span className="card-sub">Drag &amp; drop files</span></div>
                    </div>
                    <div className="app-card" style={{ background: 'linear-gradient(135deg, rgba(236,72,153,0.15) 0%, rgba(244,114,182,0.1) 100%)' }}>
                      <div className="card-icon" style={{ background: 'rgba(236,72,153,0.2)', color: '#f472b6' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                      </div>
                      <div className="card-text"><span className="card-title">AI Chat</span><span className="card-sub">Ask questions</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tertiary Phone - Roomie */}
            <div className="phone-device tertiary">
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <div className="status-bar">
                    <span className="time">05:00</span>
                  </div>
                  <div className="app-header">
                    <div className="user-greeting">
                      <span className="greeting-text">Find your match</span>
                      <span className="user-name">Roomie</span>
                    </div>
                  </div>
                  <div className="app-content">
                    <div className="app-card" style={{ background: 'linear-gradient(135deg, #FF6B6B 0%, #EE5253 100%)', height: '80px' }}>
                      <div className="card-icon" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 10c.09-.58.14-1.18.14-1.8 0-4.61-3.48-8.2-7.8-8.2C5.02 0 1.54 3.59 1.54 8.2c0 .62.05 1.22.14 1.8h15.32zm-7.66 12c-4.32 0-7.8-2.58-7.8-8.2h15.32c-.22 5.2-3.48 8.2-7.52 8.2z" /></svg>
                      </div>
                      <div className="card-text" style={{ color: 'white' }}><span className="card-title">Nearby Rooms</span><span className="card-sub">24 New Listings</span></div>
                    </div>
                    <div className="app-card small">
                      <div className="card-icon blue"><span style={{ fontSize: '16px' }}>👤</span></div>
                      <div className="card-text"><span className="card-title">Recent Matches</span><span className="card-sub">3 people liked you</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div className="scroll-indicator">
      <div className="scroll-line"></div>
      <span>Scroll to explore</span>
    </div>
  </section>
)

export default Hero
