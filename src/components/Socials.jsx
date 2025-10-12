import React from "react";
import Slider from "react-slick";
// slick css imports stay as-is

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

  // Images from /public/images/... => reference with a leading slash
  const socialLinks = [
    { name: "Twitter",   img: "/images/twitter.png",   url: "https://twitter.com/Sandaru18769360" },
    { name: "Facebook",  img: "/images/facebook.png",  url: "https://www.facebook.com/sandaru.bandara27?mibextid=LQQJ4d" },
    { name: "Instagram", img: "/images/instagram.png", url: "https://instagram.com/zandaru._?igshid=MzRlODBiNWFlZA==" },
    { name: "LinkedIn",  img: "/images/linkedin.png",  url: "https://www.linkedin.com/in/sandaru-bandara-5ab147220/" },
    { name: "GitHub",    img: "/images/github.png",    url: "https://github.com/SandaruBandara2001" },
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
