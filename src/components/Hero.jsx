import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Sandaru Bandara</div>
          <div className="text-3">
            And I'm a{' '}
            <TypeAnimation
              sequence={[
                'Developer',
                1000, // wait 1s
                'Student',
                1000,
                'Designer',
                1000,
                'Freelancer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <a href="#contact">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;