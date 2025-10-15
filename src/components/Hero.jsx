import React, { useEffect, useMemo, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const SLIDE_INTERVAL = 2000; // 2s per slide

const Hero = () => {
  // Put your hero images in /public/images/hero/
  const slides = useMemo(
    () => [
      "/images/projects/banner.jpg",
      "/images/projects/banner2.jpg",
      "/images/projects/banner3.jpg",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPrevIndex((i) => index);
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, slides.length]);

  const prevSrc = slides[prevIndex];
  const currSrc = slides[index];

  return (
    <section className="hero" id="home">
      {/* Background carousel (behind everything) */}
      <div className="hero-bg-layer">
        {/* previous image (fading out) */}
        <div
          key={prevSrc + "-prev"}
          className="hero-bg hero-bg-prev"
          style={{ backgroundImage: `url(${prevSrc})` }}
        />
        {/* current image (fading in) */}
        <div
          key={currSrc + "-curr"}
          className="hero-bg hero-bg-curr"
          style={{ backgroundImage: `url(${currSrc})` }}
        />
        {/* Socials-inspired gradient overlay */}
        <div className="hero-gradient-overlay" />
      </div>

      {/* Hero content */}
      <div className="max-width">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Hello, my name is</span>
          </div>
          <h1 className="hero-name">Sandaru Bandara</h1>
          <div className="hero-title">
            And I'm a{" "}
            <span className="type-line">
              <TypeAnimation
                sequence={[
                  "Developer", 1000,
                  "Student", 1000,
                  "Designer", 1000,
                  "Freelancer", 1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>
          <a href="#contact" className="hero-cta">
            <span>Contact Me</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;