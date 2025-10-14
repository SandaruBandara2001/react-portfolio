// src/components/Projects.jsx
import React from "react";

const projects = [
  { 
    title: "Greenbliz",
    desc: "Delivered as part of internship client work. Built responsive UI and integrated Strapi CMS. Deployed on Render/Heroku.",
    tech: ["HTML5", "CSS3/Sass/Less", "JavaScript", "Bootstrap", "Strapi CMS", "Git", "Heroku/Render"],
    githubUrl: "https://github.com/SandaruBandara2001/greenbliz"
  },
  { 
    title: "Onblux",
    desc: "Collaborated with a cross-functional team to implement clean, scalable components and content workflows.",
    tech: ["JavaScript", "Bootstrap", "Strapi CMS", "Git", "Jira"],
    githubUrl: "https://github.com/SandaruBandara2001/onblux"
  },
  { 
    title: "Bubble Tea",
    desc: "Responsive front-end, CMS customization and deployment pipelines with environment configs.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Strapi CMS", "Heroku/Render"],
    githubUrl: "https://github.com/SandaruBandara2001/bubble-tea"
  },
  { 
    title: "Adaar & Kotiyagala Villa",
    desc: "Marketing website with CMS for real-time content updates; followed code-review best practices.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Strapi CMS"],
    githubUrl: "https://github.com/SandaruBandara2001/adaar-villa"
  },
  { 
    title: "BadmintonFlex (Final Year)",
    desc: "Final-year project. Full-stack build focused on clean architecture and performance.",
    tech: ["React/Next.js", "Node.js", "REST APIs", "Postgres/MongoDB"],
    githubUrl: "https://github.com/SandaruBandara2001/badmintonflex"
  },
  { 
    title: "Skin Consultation Center (2nd Year)",
    desc: "Desktop/web solution to manage consultations, patients and schedules.",
    tech: ["Java/JavaFX or React", "REST APIs", "SQL"],
    githubUrl: "https://github.com/SandaruBandara2001/skin-consultation"
  },
  { 
    title: "Boilheater Database Project (2nd Year)",
    desc: "Designed schema, relationships, ERDs and queries for a boiler/heater domain.",
    tech: ["MySQL"],
    githubUrl: "https://github.com/SandaruBandara2001/boilheater-db"
  },
  { 
    title: "Academic Progress Outcomes Prediction (1st Year)",
    desc: "Early ML-style exercise predicting outcomes from student features.",
    tech: ["Python"],
    githubUrl: "https://github.com/SandaruBandara2001/academic-prediction"
  },
  { 
    title: "Hero Football Website (1st Year)",
    desc: "Intro web project focusing on layout, responsiveness and content structure.",
    tech: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/SandaruBandara2001/hero-football"
  },
];

const Projects = () => {
  const handleCardClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
        <div className="serv-content">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card clickable-card"
              onClick={() => handleCardClick(project.githubUrl)}
              style={{ cursor: 'pointer' }}
            >
              <div className="box">
                <div className="card-header">
                  <div className="text">{project.title}</div>
                  <div className="external-link-icon">
                    <i className="fas fa-external-link-alt"></i>
                  </div>
                </div>
                <p>{project.desc}</p>
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
                <div className="view-project">
                  View on GitHub →
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