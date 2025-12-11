import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            category: 'Frontend',
            icon: '🎨',
            skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js', 'Vue.js'],
        },
        {
            category: 'Backend',
            icon: '⚙️',
            skills: ['Node.js', 'Express', 'Python', 'Django', 'REST API', 'GraphQL', 'PostgreSQL', 'MongoDB'],
        },
        {
            category: 'Tools & Others',
            icon: '🛠️',
            skills: ['Git', 'Docker', 'AWS', 'Firebase', 'Webpack', 'Vite', 'Jest', 'Figma'],
        },
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-header">
                    <h2>Skills & Technologies</h2>
                    <p className="section-subtitle">Tools I work with</p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3>{category.category}</h3>
                            </div>

                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <span className="skill-name">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills-extra">
                    <div className="extra-card">
                        <h4>💡 Always Learning</h4>
                        <p>Constantly exploring new technologies and best practices to stay ahead in the ever-evolving web development landscape.</p>
                    </div>
                    <div className="extra-card">
                        <h4>🤝 Collaboration</h4>
                        <p>Experienced in working with cross-functional teams, using tools like Git, Jira, and Slack for seamless collaboration.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
