// src/components/About.jsx
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
            <img src="src/assets/images/Portfolio01.JPG" alt="Sandaru Bandara" />
          </div>
          <div className="column right">
            <div className="text">
              I'm Sandaru and I'm a{' '}
              <TypeAnimation
                sequence={['Developer',1000,'Student',1000,'Designer',1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p></p>
            <a href="https://drive.google.com/file/d/1Zb4H-07vy0bkUa3ZtK1OBCO999-xKEKd/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
