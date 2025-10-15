// src/components/Projects.jsx
import React from "react";

const projects = [
  { 
    title: "BadmintonFlex (Final Year)",
    desc: "Final-year project. Full-stack build focused on clean architecture and performance.",
    tech: ["Flask", "Node.js", "REST APIs", "Postgres/MongoDB"],
    githubUrl: "https://drive.google.com/drive/folders/1zoM9b7ecOWqDVMTz4s_o3p3IXSYdtHD9?usp=drive_link"
  },
  { 
    title: "Adaar & Kotiyagala Villa",
    desc: "Marketing website with CMS for real-time content updates; followed code-review best practices.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Strapi CMS"],
    githubUrl: "https://www.kotiyagala.com/"
  },
  { 
    title: "Greenbliz",
    desc: "Delivered as part of internship client work. Built responsive UI and integrated Strapi CMS. Deployed on Render/Heroku.",
    tech: ["HTML5", "CSS3/Sass/Less", "JavaScript", "Bootstrap", "Strapi CMS", "Git", "Heroku/Render"],
    githubUrl: "https://github.com/niro121/greenbliz-sails-frontend"
  },
  { 
    title: "Onblux",
    desc: "Collaborated with a cross-functional team to implement clean, scalable components and content workflows.",
    tech: ["JavaScript", "Bootstrap", "Strapi CMS", "Git", "Jira"],
    githubUrl: "https://github.com/niro121/onblux-strapi-backend"
  },
  { 
    title: "Bubble Tea",
    desc: "Responsive front-end, CMS customization and deployment pipelines with environment configs.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Strapi CMS", "Heroku/Render"],
    githubUrl: "https://github.com/niro121/bubble-tea-sails"
  },
  { 
    title: "Skin Consultation Center (2nd Year)",
    desc: "Desktop/web solution to manage consultations, patients and schedules.",
    tech: ["Java/JavaFX or React", "REST APIs", "SQL"],
    githubUrl: "https://github.com/SandaruBandara2001/Skin-Consultation-Management-Program"
  },
  { 
    title: "Boilheater Database Project (2nd Year)",
    desc: "Designed schema, relationships, ERDs and queries for a boiler/heater domain.",
    tech: ["MySQL"],
    githubUrl: "https://github.com/SandaruBandara2001/BoilHeater-database-Project"
  },
  { 
    title: "Academic Progress Outcomes Prediction (1st Year)",
    desc: "Early ML-style exercise predicting outcomes from student features.",
    tech: ["Python"],
    githubUrl: "https://github.com/SandaruBandara2001/Academic-Progress-Outcomes-Prediction-Program"
  },
  { 
    title: "Hero Football Website (1st Year)",
    desc: "Intro web project focusing on layout, responsiveness and content structure.",
    tech: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/SandaruBandara2001/Hero-Football-website"
  },
];

const Projects = () => {
  const handleCardClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <div className="section-header">
          <h2 className="title">My Projects</h2>
          <p className="section-subtitle">Explore my development journey through code</p>
        </div>
        <div className="projects-content">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              onClick={() => handleCardClick(project.githubUrl)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-header">
                    <h3 className="project-name">{project.title}</h3>
                    <div className="external-link-icon">
                      <i className="fas fa-external-link-alt"></i>
                    </div>
                  </div>
                  <p className="project-desc">{project.desc}</p>
                  <div className="tech-stack">
                    {project.tech.slice(0, 5).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="tech-tag-more">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>
                  <div className="project-cta">
                    <span>View Project</span>
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="project-link-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;