// src/components/Socials.jsx
import React from "react";
import Slider from "react-slick";

// Import slick CSS directly in the component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Socials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipe: true,
    touchMove: true,
    cssEase: 'ease-out',
    responsive: [
      { 
        breakpoint: 1024, 
        settings: { slidesToShow: 3 } 
      },
      { 
        breakpoint: 768, 
        settings: { slidesToShow: 2 } 
      },
      { 
        breakpoint: 480, 
        settings: { slidesToShow: 1 } 
      },
    ],
  };

  const socialLinks = [
    { name: "Twitter", img: "/images/twitter.png", url: "https://twitter.com/Sandaru18769360" },
    { name: "Facebook", img: "/images/facebook.png", url: "https://www.facebook.com/sandaru.bandara27" },
    { name: "Instagram", img: "/images/instagram.png", url: "https://instagram.com/zandaru._" },
    { name: "LinkedIn", img: "/images/linkedin.png", url: "https://www.linkedin.com/in/sandaru-bandara-5ab147220/" },
    { name: "GitHub", img: "/images/github.png", url: "https://github.com/SandaruBandara2001" },
  ];

  return (
    <section className="teams" id="teams">
      <div className="max-width">
        <h2 className="title">Social Media</h2>
        <div className="slider-container">
          <Slider {...settings} className="socials-slider">
            {socialLinks.map((social, index) => (
              <div key={index} className="social-slide">
                <div className="card">
                  <div className="box">
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-link"
                    >
                      <img 
                        src={social.img} 
                        alt={social.name} 
                        className="social-img"
                      />
                      <div className="text">{social.name}</div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Socials;