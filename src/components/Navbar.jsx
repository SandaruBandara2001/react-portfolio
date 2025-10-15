// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

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
    document.body.style.overflow = !isMenuActive ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setMenuActive(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <div className="max-width">
          <div className="logo">
            <a href="#home" onClick={closeMenu}>Portfo<span>lio.</span></a>
          </div>
          
          <ul className={`menu ${isMenuActive ? 'active' : ''}`}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#projects" onClick={() => handleNavClick('projects')}>Projects</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#teams" onClick={closeMenu}>Social Media</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
          
          <div className="nav-controls">
            <ThemeToggle />
            <div className="menu-btn" onClick={toggleMenu}>
              <i className={`fas fa-bars ${isMenuActive ? 'active' : ''}`}></i>
            </div>
          </div>
        </div>
      </div>  
    </nav>
  );
};

export default Navbar;