import React from 'react';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title titel-1">My Skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">My creative skills & experiences.</div>
            <p>I’m a 3rd year Software engineering student. My major study areas are programming, algorithm, software developments and etc. And also, I have got some knowledges about object-oriented programming, software designing and database managing. Throughout the academic period I could improve my problem solving and group working skills through the individual and group projects.</p>
            <a href="#services">Read more</a>
          </div>
          <div className="column right">
            <div className="bars">
              <div className="info">
                <span>HTML / CSS</span>
                <span>90%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Java</span>
                <span>60%</span>
              </div>
              <div className="line css"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>MySQL</span>
                <span>80%</span>
              </div>
              <div className="line js"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>PHP</span>
                <span>50%</span>
              </div>
              <div className="line php"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Python</span>
                <span>70%</span>
              </div>
              <div className="line mysql"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;