import React, { useEffect, useMemo, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const SLIDE_INTERVAL = 2000; // 2s per slide

const Hero = () => {
  // Put your hero images in /public/images/hero/
  const slides = useMemo(
    () => [
      "public/images/banner.jpg",
      "public/images/banner2.jpg",
      "public/images/banner3.jpg",
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
    <section className="home" id="home">
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
        {/* subtle dark overlay to keep text readable */}
        <div className="hero-bg-overlay" />
      </div>

      {/* Your original content (unchanged) */}
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Sandaru Bandara</div>
          <div className="text-3">
            And I'm a{" "}
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
          </div>
          <a href="#contact">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
