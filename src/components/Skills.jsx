// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  const scrollToProjects = () => {
    console.log('Scroll to projects clicked'); // Debug log
    
    // Try multiple possible IDs since your Projects section might have different ID
    const projectsSection = document.getElementById('services') || 
                           document.getElementById('projects') ||
                           document.getElementById('services');
    
    if (projectsSection) {
      console.log('Projects section found:', projectsSection); // Debug log
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.log('Projects section not found'); // Debug log
      // Fallback: scroll to top of page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const techStacks = [
    {
      category: "Frontend",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Tailwind CSS"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Java", "Python", "PHP", "REST APIs"]
    },
    {
      category: "Database",
      technologies: ["MySQL", "MongoDB", "PostgreSQL"]
    },
    {
      category: "Tools & Others",
      technologies: ["Git", "GitHub", "VS Code", "Figma", "Strapi CMS", "Heroku", "Render"]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <div className="section-header">
          <h2 className="title">My Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>
        <div className="skills-content">
          <div className="column left">
            <div className="skills-card">
              <div className="card-inner">
                <h3 className="skills-title">My creative skills & experiences</h3>
                <p className="skills-description">
                  I'm a 3rd year Software Engineering student. My major study areas are programming, algorithms, 
                  software development and etc. I have knowledge about object-oriented programming, software designing 
                  and database management. Throughout the academic period I improved my problem solving and group 
                  working skills through individual and group projects.
                </p>
                <div 
                  className="skills-cta" 
                  onClick={scrollToProjects}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      scrollToProjects();
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label="Explore my projects"
                >
                  <span>Explore Projects</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="tech-stack-section">
              <h3 className="tech-stack-title">Tech Stack</h3>
              <div className="tech-stack-container">
                {techStacks.map((stack, index) => (
                  <div key={index} className="tech-category">
                    <h4 className="category-title">{stack.category}</h4>
                    <div className="tech-tags">
                      {stack.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;