import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import twitterImg from "public/images/twitter.png";
import facebookImg from "public/images/facebook.png";
import instagramImg from "public/images/instagram.png";
import linkedinImg from "public/images/linkedin.png";
import githubImg from "public/images/github.png";

const Socials = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 450,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 947, settings: { slidesToShow: 2 } },
      { breakpoint: 690, settings: { slidesToShow: 1 } },
    ],
  };

  const socialLinks = [
    { name: "Twitter",   img: twitterImg,   url: "https://twitter.com/Sandaru18769360" },
    { name: "Facebook",  img: facebookImg,  url: "https://www.facebook.com/sandaru.bandara27?mibextid=LQQJ4d" },
    { name: "Instagram", img: instagramImg, url: "https://instagram.com/zandaru._?igshid=MzRlODBiNWFlZA==" },
    { name: "LinkedIn",  img: linkedinImg,  url: "https://www.linkedin.com/in/sandaru-bandara-5ab147220/" },
    { name: "GitHub",    img: githubImg,    url: "https://github.com/SandaruBandara2001" },
  ];

  return (
    <section className="teams" id="teams">
      <div className="max-width">
        <h2 className="title">Social Media</h2>
        <Slider {...settings} className="socials-slider">
          {socialLinks.map((s) => (
            <div className="social-slide" key={s.name}>
              <div className="card">
                <div className="box">
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="social-link">
                    <img src={s.img} alt={s.name} className="social-img" />
                    <div className="text">{s.name}</div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Socials;
