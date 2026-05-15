import React from 'react';
import './Footer.scss';

const Footer = () => (
  <footer className="footer" id="contact">
    {/* Theater curtains */}
    <div className="footer__curtain footer__curtain--left"  aria-hidden="true" />
    <div className="footer__curtain footer__curtain--right" aria-hidden="true" />

    {/* Spotlight beam from above */}
    <div className="footer__beam" aria-hidden="true" />

    {/* Scan-line texture */}
    <div className="footer__grain" aria-hidden="true" />

    <div className="footer__container">
      <div className="scene-heading">
        <span className="scene-number">5.</span>
        <span className="scene-location">INT. COMMUNICATION CHANNELS &mdash; OPEN</span>
      </div>

      <div className="footer__stage">
        <h2 className="footer__title">
          Let&rsquo;s Create<br />Together
        </h2>

        <div className="footer__dialogue">
          <p className="footer__character">CLOSING THOUGHTS</p>
          <p className="footer__lines">
            Every great story begins with a conversation. Whether you&rsquo;re looking
            to build something new, collaborate on a project, or simply talk about
            film, art, or code &mdash; the door is always open.
          </p>
        </div>

        <div className="footer__contact">
          <a href="mailto:cheye.roberson@pursuit.org" className="footer__email">
            <span className="footer__email-label">REACH OUT</span>
            <span className="footer__email-address">cheye.roberson@pursuit.org</span>
          </a>
        </div>

        <nav className="footer__social" aria-label="Social links">
          <a
            href="https://github.com/endofline4"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ch%C3%A9ye-roberson-883318b7?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            LinkedIn
          </a>
        </nav>
      </div>

      {/* The End card */}
      <div className="footer__end-card">
        <div className="footer__filmstrip" aria-hidden="true">
          {Array.from({ length: 12 }, (_, i) => <div key={i} className="footer__filmstrip-frame" />)}
        </div>

        <p className="footer__the-end">THE END</p>

        <div className="footer__filmstrip" aria-hidden="true">
          {Array.from({ length: 12 }, (_, i) => <div key={i} className="footer__filmstrip-frame" />)}
        </div>
      </div>

      <div className="footer__credits">
        <p>&copy; {new Date().getFullYear()} Ch&eacute;ye Roberson &middot; All Rights Reserved</p>
        <p>Crafted with React, SCSS, and a love for cinema</p>
      </div>
    </div>
  </footer>
);

export default Footer;
