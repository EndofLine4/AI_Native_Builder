import React, { useState, useEffect } from 'react';
import './Header.scss';

const Header = () => {
  const [isOpen,     setIsOpen]     = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <nav className="nav">
        <div className="nav__brand">
          <span className="nav__fade-in">FADE IN:</span>
          <h1 className="nav__name">CHÉYE ROBERSON</h1>
        </div>

        <button
          className={`nav__toggle ${isOpen ? 'nav__toggle--open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span /><span /><span />
        </button>

        <ul className={`nav__menu ${isOpen ? 'nav__menu--open' : ''}`} role="list">
          <li><a href="https://github.com/EndofLine4" target="_blank" rel="noopener noreferrer">GITHUB</a></li>
          <li><button onClick={() => scrollTo('about')}>ABOUT</button></li>
          <li><button onClick={() => scrollTo('projects')}>PROJECTS</button></li>
          <li><button onClick={() => scrollTo('contact')}>CONTACT</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
