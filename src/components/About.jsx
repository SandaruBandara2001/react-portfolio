// src/components/About.jsx
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <div className="section-header">
          <h2 className="title">About me</h2>
          <p className="section-subtitle">Get to know more about my journey</p>
        </div>
        <div className="about-content">
          <div className="column left">
            <div className="image-wrapper">
              <div className="image-glow"></div>
              <img src="/images/Portfolio01.JPG" alt="Sandaru Bandara" className="profile-image" />
              <div className="image-badge">
                <i className="fas fa-code"></i>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text-container">
              <div className="text">
                I'm Sandaru and I'm a {" "}
                <span className="type-line">
                  <TypeAnimation
                    sequence={[
                      'Full-Stack Developer',
                      1000,
                      'Software Engineer', 
                      1000,
                      'Web Developer',
                      1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </div>
              <p className="about-description">
                I'm Sandaru Bandara, 23 years old, a software engineering undergraduate student at the University of Westminster. 
                As an undergraduate, I am an energetic and passionate individual who approaches tasks and situations with a mature 
                and responsible mindset. I consistently strive for excellence and aim to achieve the highest standards in everything 
                I undertake. I am experienced in working in challenging and fast-paced environments, effectively managing multiple 
                projects and priorities simultaneously.
              </p>
              <a 
                href="https://drive.google.com/file/d/1Zb4H-07vy0bkUa3ZtK1OBCO999-xKEKd/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="download-btn"
              >
                <span>Download CV</span>
                <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;