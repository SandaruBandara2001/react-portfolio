import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMenuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="max-width">
        <div className="logo"><a href="#">Portfo<span>lio.</span></a></div>
        <ul className={`menu ${isMenuActive ? 'active' : ''}`}>
          <li><a href="#home" className="menu-btn" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" className="menu-btn" onClick={closeMenu}>About</a></li>
          <li><a href="#services" className="menu-btn" onClick={closeMenu}>Projects</a></li>
          <li><a href="#skills" className="menu-btn" onClick={closeMenu}>Skills</a></li>
          <li><a href="#teams" className="menu-btn" onClick={closeMenu}>Social Media</a></li>
          <li><a href="#contact" className="menu-btn" onClick={closeMenu}>Contact</a></li>
        </ul>
        <div className="menu-btn" onClick={toggleMenu}>
          <i className={`fas fa-bars ${isMenuActive ? 'active' : ''}`}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;