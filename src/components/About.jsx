import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <div className="section-header">
          <h2 className="title">My Journey</h2>
          <p className="section-subtitle">Education, experience and certifications</p>
        </div>

        {/* FIRST ROW */}
        <div className="about-top-row">
          <div className="about-profile-panel">
            <div className="image-wrapper">
              <div className="image-glow"></div>
              <img
                src="/images/Portfolio04.JPG"
                alt="Sandaru Bandara"
                className="profile-image"
              />
              <div className="image-badge">
                <i className="fas fa-code"></i>
              </div>
            </div>
          </div>

          <div className="about-profile-card">
            <h3 className="about-profile-name">Sandaru Bandara</h3>
            <p className="about-profile-text">
              I’m a software engineering undergraduate and full-stack developer
              passionate about building responsive, scalable and user-friendly
              web applications. I enjoy turning ideas into practical digital
              solutions with clean design and solid functionality.
            </p>

            <a
              href="https://drive.google.com/file/d/18U3U-0bp3KN3SxziDU0aKQRLc_2yy0WS/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              <span>Download CV</span>
              <i className="fas fa-download"></i>
            </a>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="journey-section-card">
          <div className="journey-section-header">
            <h3 className="journey-section-title">Education, Experience & Certificates</h3>
            <p className="journey-section-text">
              A quick overview of my academic background, professional experience, and certifications.
            </p>
          </div>

          <div className="journey-columns">
            {/* Education */}
            <div className="journey-card">
              <div className="journey-card-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="journey-card-title">Education</h3>

              <div className="journey-entry">
                <span className="journey-badge">Sept 2021 – May 2026 (Expected)</span>
                <h4>BEng (Hons) Software Engineering</h4>
                <p>Informatics Institute of Technology (IIT), Sri Lanka</p>
                <p className="journey-subtext">Affiliated with University of Westminster (UK)</p>
              </div>

              <div className="journey-entry">
                <span className="journey-badge">Focus</span>
                <p>Software Engineering • Machine Learning</p>
              </div>
            </div>

            {/* Experience */}
            <div className="journey-card">
              <div className="journey-card-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3 className="journey-card-title">Experience</h3>

              <div className="journey-entry">
                <span className="journey-badge">Jul 2023 – Jul 2024</span>
                <h4>Software Engineer Intern</h4>
                <p>Promoted from Software Engineer Intern to Associate Software Engineer based on performance. Archmage Solutions (Pvt) Ltd</p>
              </div>

              <div className="journey-entry">
                <span className="journey-badge">Highlights</span>
                <p>
                  Built responsive web interfaces (HTML, CSS, JavaScript, Bootstrap, Sass/Less),
                  collaborated in Agile teams (Jira, Git, code reviews), supported deployments on
                  Heroku/Render, and managed content workflows using Strapi CMS.
                </p>
              </div>
            </div>

            {/* Certificates */}
            <div className="journey-card">
              <div className="journey-card-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3 className="journey-card-title">Certificates</h3>

              <div className="journey-entry">
                <span className="journey-badge">Aug 2025 – Dec 2025</span>
                <h4>Professional Certificate in Artificial Intelligence</h4>
                <p>Focus: Artificial Intelligence • Computer Science</p>
              </div>

              <div className="journey-entry">
                <span className="journey-badge">More</span>
                <p>
                  Currently expanding skills through hands-on projects and continuous learning in
                  full-stack development and AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;