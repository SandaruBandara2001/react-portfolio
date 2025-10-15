// src/components/Socials.jsx
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Socials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const settings = {
    dots: true,
    arrows: !isMobile, // Hide arrows on mobile for cleaner look
    infinite: true,
    speed: 600,
    slidesToShow: isMobile ? 1 : 3, // Force 1 slide on mobile
    slidesToScroll: 1,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: !isMobile, // Disable pause on hover for mobile
    swipe: true,
    touchMove: true,
    touchThreshold: 10,
    swipeToSlide: true,
    cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      { 
        breakpoint: 1024, 
        settings: { 
          slidesToShow: 3,
          arrows: true
        } 
      },
      { 
        breakpoint: 768, 
        settings: { 
          slidesToShow: 1, // Force 1 slide
          arrows: false, // Hide arrows on mobile
          dots: true,
          centerMode: true, // Center the single slide
          centerPadding: '20px' // Add padding around centered slide
        } 
      },
      { 
        breakpoint: 480, 
        settings: { 
          slidesToShow: 1, // Force 1 slide
          arrows: false, // Hide arrows on mobile
          dots: true,
          centerMode: true,
          centerPadding: '25px' // More padding for small screens
        } 
      },
    ],
  };

  const socialLinks = [
    { 
      name: "Facebook", 
      img: "/images/facebook.png", 
      url: "https://www.facebook.com/sandaru.bandara27",
      color: "#1877F2",
      icon: "fab fa-facebook-f",
      description: "Connect with me"
    },
    { 
      name: "Instagram", 
      img: "/images/instagram.png", 
      url: "https://instagram.com/zandaru._",
      color: "#E4405F",
      icon: "fab fa-instagram",
      description: "See my life"
    },
    { 
      name: "LinkedIn", 
      img: "/images/linkedin.png", 
      url: "https://www.linkedin.com/in/sandaru-bandara-5ab147220/",
      color: "#0A66C2",
      icon: "fab fa-linkedin-in",
      description: "Professional network"
    },
    { 
      name: "Twitter", 
      img: "/images/twitter.png", 
      url: "https://twitter.com/Sandaru18769360",
      color: "#1DA1F2",
      icon: "fab fa-twitter",
      description: "Follow for updates"
    },
    { 
      name: "GitHub", 
      img: "/images/github.png", 
      url: "https://github.com/SandaruBandara2001",
      color: "#181717",
      icon: "fab fa-github",
      description: "Check my code"
    },
  ];

  return (
    <section className="teams" id="teams">
      <div className="max-width">
        <div className="section-header">
          <h2 className="title">Let's Connect</h2>
          <p className="section-subtitle">Find me across different platforms</p>
        </div>
        
        <div className="slider-container">
          <Slider {...settings} className="socials-slider">
            {socialLinks.map((social, index) => (
              <div key={index} className="social-slide">
                <div 
                  className={`social-card ${index === activeSlide ? 'active' : ''}`}
                  style={{ '--social-color': social.color }}
                >
                  <div className="card-inner">
                    <div className="card-front">
                      <div className="social-icon-wrapper">
                        <div className="social-glow"></div>
                        <img 
                          src={social.img} 
                          alt={social.name} 
                          className="social-img"
                          loading="lazy"
                        />
                        {/* <i className={social.icon}></i> */}
                      </div>
                      <h3 className="social-name">{social.name}</h3>
                      <p className="social-desc">{social.description}</p>
                      <div className="social-cta">
                        <span>Visit Profile</span>
                        <i className="fas fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link-overlay"
                    aria-label={`Visit ${social.name} profile`}
                  ></a>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Social Stats */}
        <div className="social-stats">
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Platforms</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">Active</div>
            <div className="stat-label">Status</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Response</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;