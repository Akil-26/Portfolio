// Shared GitHub SVG button icon
const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15,3 21,3 21,9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
)

const ProjectOverlay = ({ demoUrl = '#', githubUrl = '#' }) => (
  <div className="project-overlay">
    <a href={demoUrl} className="project-btn primary">
      <ExternalLinkIcon />
      <span>Live Demo</span>
    </a>
    <a href={githubUrl} className="project-btn secondary">
      <GitHubIcon />
      <span>GitHub</span>
    </a>
  </div>
)

const HowIWork = () => (
  <section className="how-i-work">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-gradient">How I</span>
          <span> Work</span>
        </h2>
      </div>
      <div className="work-principles">
        <div className="principle-card" data-tilt>
          <div className="principle-number">01</div>
          <h3 className="principle-title">Real Problems First</h3>
          <p className="principle-description">I focus on solving actual user problems, not just building features</p>
        </div>
        <div className="principle-card" data-tilt>
          <div className="principle-number">02</div>
          <h3 className="principle-title">Scalable Solutions</h3>
          <p className="principle-description">I design systems that grow — clean architecture, modular code</p>
        </div>
        <div className="principle-card" data-tilt>
          <div className="principle-number">03</div>
          <h3 className="principle-title">Ship &amp; Iterate</h3>
          <p className="principle-description">I believe in fast feedback loops — build, test, improve</p>
        </div>
      </div>
    </div>
  </section>
)

const Projects = () => (
  <>
    <HowIWork />
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-gradient">Featured</span>
            <span> Projects</span>
          </h2>
          <p className="section-description">Real-world applications built with modern tech stacks</p>
        </div>
        <div className="projects-showcase">

          {/* MindMesh */}
          <article className="project-card-3d featured" data-tilt>
            <div className="project-card-glow"></div>
            <div className="project-badge">🔥 Featured</div>
            <div className="project-image">
              <div className="project-placeholder"><span>🧠✨</span></div>
              <ProjectOverlay />
            </div>
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">MindMesh</h3>
                <span className="project-category">AI Platform</span>
              </div>
              <div className="project-story">
                <div className="story-item">
                  <span className="story-label">Problem</span>
                  <p>Managing knowledge across PDFs, docs, and links is messy and scattered</p>
                </div>
                <div className="story-item">
                  <span className="story-label">Solution</span>
                  <p>Built AI summarization system with cognitive mapping and contextual linking</p>
                </div>
                <div className="story-item">
                  <span className="story-label">Result</span>
                  <p>Structured, searchable knowledge base with intelligent connections</p>
                </div>
              </div>
              <div className="project-tags">
                {['React', 'Node.js', 'MongoDB', 'OpenAI', 'Gemini'].map(t => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>

          {/* Roomie */}
          <article className="project-card-3d" data-tilt>
            <div className="project-card-glow"></div>
            <div className="project-image">
              <div className="project-placeholder"><span>🏠💰</span></div>
              <ProjectOverlay />
            </div>
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">Roomie</h3>
                <span className="project-category">Mobile App</span>
              </div>
              <div className="project-story">
                <div className="story-item">
                  <span className="story-label">Problem</span>
                  <p>Students struggle with room booking and expense tracking with roommates</p>
                </div>
                <div className="story-item">
                  <span className="story-label">Solution</span>
                  <p>Built dual-space architecture with owner verification and expense splitting</p>
                </div>
                <div className="story-item">
                  <span className="story-label">Result</span>
                  <p>Clean mobile experience for booking and managing shared expenses</p>
                </div>
              </div>
              <div className="project-tags">
                {['Flutter', 'FastAPI', 'MongoDB', 'JWT'].map(t => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>

          {/* Smart News */}
          <article className="project-card-3d" data-tilt>
            <div className="project-card-glow"></div>
            <div className="project-image">
              <div className="project-placeholder"><span>📰🎯</span></div>
              <ProjectOverlay />
            </div>
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">Smart News</h3>
                <span className="project-category">Mobile App</span>
              </div>
              <p className="project-description">
                Personalized news aggregator with tag-based interests and a clean, minimal interface focused on readability.
              </p>
              <div className="project-tags">
                {['Flutter', 'REST API', 'Hive'].map(t => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>

          {/* Offline AI */}
          <article className="project-card-3d" data-tilt>
            <div className="project-card-glow"></div>
            <div className="project-badge hackathon">🏆 Hackathon</div>
            <div className="project-image">
              <div className="project-placeholder"><span>🤖🔒</span></div>
              <ProjectOverlay />
            </div>
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">Offline AI Assistant</h3>
                <span className="project-category">AI/Privacy</span>
              </div>
              <p className="project-description">
                Privacy-first AI assistant running entirely on-device. No internet required, instant responses.
              </p>
              <div className="project-tags">
                {['LLaMA', 'On-Device AI', 'Python'].map(t => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  </>
)

export default Projects
