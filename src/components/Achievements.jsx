const achievements = [
  {
    icon: '🚀',
    title: '4+ Major Projects',
    desc: 'Built full-stack applications with real users and production-ready code',
  },
  {
    icon: '📅',
    title: '90+ Days DSA',
    desc: 'Consistent problem-solving practice building strong algorithmic foundations',
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    desc: 'Developed AI-powered platforms using OpenAI, Gemini, and on-device LLMs',
  },
  {
    icon: '🏆',
    title: 'Hackathon Builder',
    desc: 'Built innovative solutions under pressure, turning ideas into working prototypes',
  },
]

const Achievements = () => (
  <section className="journey" id="achievements">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-gradient">My</span>
          <span> Achievements</span>
        </h2>
      </div>
      <div className="journey-grid">
        {achievements.map((a) => (
          <div className="journey-card" data-tilt key={a.title}>
            <div className="journey-icon">{a.icon}</div>
            <h3 className="journey-title">{a.title}</h3>
            <p className="journey-description">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Achievements
