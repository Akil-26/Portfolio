const domains = [
  {
    icon: '🤖',
    title: 'AI-Powered Applications',
    desc: 'Building intelligent systems with OpenAI, Gemini, and on-device LLMs',
  },
  {
    icon: '🌐',
    title: 'Full-Stack Web Platforms',
    desc: 'MERN stack applications with scalable architecture and clean APIs',
  },
  {
    icon: '📱',
    title: 'Mobile Apps (Flutter)',
    desc: 'Cross-platform mobile experiences with beautiful UI and smooth performance',
  },
  {
    icon: '⚙️',
    title: 'Backend APIs & Systems',
    desc: 'FastAPI, Node.js backends with authentication, databases, and integrations',
  },
]

const WhatIBuild = () => (
  <section className="what-i-build" id="domains">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-gradient">What I</span>
          <span> Build</span>
        </h2>
        <p className="section-description">Specialized domains where I create impact</p>
      </div>
      <div className="domain-grid">
        {domains.map((d) => (
          <div className="domain-card" data-tilt key={d.title}>
            <div className="domain-icon">{d.icon}</div>
            <h3 className="domain-title">{d.title}</h3>
            <p className="domain-description">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default WhatIBuild
