// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
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
                <div className="skills-cta">
                  <span>Explore Projects</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="skills-bars">
              <div className="skill-bar">
                <div className="skill-info">
                  <span className="skill-name">HTML / CSS</span>
                  <span className="skill-percent">90%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar html" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-info">
                  <span className="skill-name">JavaScript</span>
                  <span className="skill-percent">85%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar js" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-info">
                  <span className="skill-name">React</span>
                  <span className="skill-percent">80%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar react" style={{width: '80%'}}></div>
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-info">
                  <span className="skill-name">Java</span>
                  <span className="skill-percent">75%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar java" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-info">
                  <span className="skill-name">Python</span>
                  <span className="skill-percent">70%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar python" style={{width: '70%'}}></div>
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-info">
                  <span className="skill-name">MySQL</span>
                  <span className="skill-percent">80%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-progress-bar mysql" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;