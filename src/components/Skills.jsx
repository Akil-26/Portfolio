const skillCategories = [
  {
    icon: '🎨',
    label: 'Frontend',
    skills: ['Flutter', 'React', 'Dart', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind'],
  },
  {
    icon: '⚙️',
    label: 'Backend',
    skills: ['Python', 'FastAPI', 'Node.js', 'Express', 'Flask', 'REST APIs'],
  },
  {
    icon: '🗄️',
    label: 'Database',
    skills: ['MongoDB', 'Firebase', 'PostgreSQL', 'Hive'],
  },
  {
    icon: '🤖',
    label: 'AI / ML',
    skills: ['OpenAI API', 'Gemini', 'LangChain', 'LLaMA', 'On-Device AI'],
    highlight: ['OpenAI API', 'Gemini'],
  },
  {
    icon: '🛠️',
    label: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'],
  },
]

const Skills = () => (
  <section className="skills" id="skills">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-gradient">Technologies</span>
          <span> I Work With</span>
        </h2>
      </div>
      <div className="skills-badges-container">
        {skillCategories.map((cat) => (
          <div className="skill-category" key={cat.label}>
            <h3 className="category-title">
              <span className="category-icon">{cat.icon}</span>
              {cat.label}
            </h3>
            <div className="skill-badges">
              {cat.skills.map((skill) => (
                <span
                  className={`skill-badge${cat.highlight?.includes(skill) ? ' highlight' : ''}`}
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
