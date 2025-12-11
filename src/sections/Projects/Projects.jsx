import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A modern e-commerce solution with real-time inventory management and seamless checkout experience.',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'Collaborative task management tool with real-time updates, team collaboration, and progress tracking.',
            tags: ['React', 'Firebase', 'Material-UI'],
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        },
        {
            id: 3,
            title: 'Portfolio Dashboard',
            description: 'Interactive dashboard for tracking cryptocurrency portfolio with live price updates and analytics.',
            tags: ['React', 'Chart.js', 'REST API'],
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        },
        {
            id: 4,
            title: 'Social Media Platform',
            description: 'Feature-rich social platform with posts, comments, likes, and real-time messaging capabilities.',
            tags: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        },
        {
            id: 5,
            title: 'Weather Forecast App',
            description: 'Beautiful weather application with location-based forecasts and interactive weather visualizations.',
            tags: ['React', 'Weather API', 'Geolocation'],
            gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        },
        {
            id: 6,
            title: 'Fitness Tracker',
            description: 'Comprehensive fitness tracking app with workout logging, progress charts, and goal setting features.',
            tags: ['React Native', 'Node.js', 'MongoDB'],
            gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        },
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-header">
                    <h2>Featured Projects</h2>
                    <p className="section-subtitle">Some of my recent work</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image" style={{ background: project.gradient }}>
                                <div className="project-overlay">
                                    <button className="btn-view">View Project</button>
                                </div>
                            </div>

                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
