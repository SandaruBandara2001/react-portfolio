import React from 'react';
import Slider from 'react-slick';

// Import images using correct RELATIVE paths
import twitterImg from '../assets/images/twitter.png';
import facebookImg from '../assets/images/facebook.png';
import instagramImg from '../assets/images/instagram.png';
import linkedinImg from '../assets/images/linkedin.png';
import githubImg from '../assets/images/github.png';

const Socials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 947,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const socialLinks = [
        { name: 'Twitter', img: twitterImg, url: 'https://twitter.com/Sandaru18769360' },
        { name: 'Facebook', img: facebookImg, url: 'https://www.facebook.com/sandaru.bandara27?mibextid=LQQJ4d' },
        { name: 'Instagram', img: instagramImg, url: 'https://instagram.com/zandaru._?igshid=MzRlODBiNWFlZA==' },
        { name: 'LinkedIn', img: linkedinImg, url: 'https://www.linkedin.com/in/sandaru-bandara-5ab147220/' },
        { name: 'GitHub', img: githubImg, url: 'https://github.com/SandaruBandara2001' },
    ];

    return (
        <section className="teams" id="teams">
            <div className="max-width">
                <h2 className="title">Social Media</h2>
                <Slider {...settings}>
                    {socialLinks.map(social => (
                        <div className="card" key={social.name}>
                            <div className="box">
                                <a href={social.url} target="_blank" rel="noopener noreferrer">
                                    <img src={social.img} alt={social.name} />
                                </a>
                                <div className="text">{social.name}</div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Socials;