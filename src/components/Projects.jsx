import React from 'react';

const Projects = () => {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
        <div className="serv-content">
          <div className="card">
            <div className="box">
              <div className="text">GenUML</div>
              <p>Generate UML diagrams using user input. Technologies: React Js, HTML, JS, Python, MySQL, ML and NLP</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <div className="text">BoilHeater database Project</div>
              <p>Working with data base, diagrams and relationships. Technologies: MySQL</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <div className="text">Academic Progress Prediction</div>
              <p>First year project. Technologies: python</p>
            </div>
          </div>
          {/* Add other project cards here */}
        </div>
      </div>
    </section>
  );
};

export default Projects;