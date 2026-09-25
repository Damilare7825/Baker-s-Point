import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand-header">
              <div className="footer-logo-badge">
                <img src="/images/logo.jpg" alt="Bakers Point Mascot" className="footer-logo-img" />
              </div>
              <div className="footer-brand-text">
                <span className="footer-brand-name">Bakers Point</span>
                <span className="footer-brand-tag">BAKERY</span>
              </div>
            </Link>
            <p className="footer-brand-desc">
              Fresh, beautiful treats made with care for all of life's sweetest moments.
            </p>
          </div>

          {/* Explore Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">EXPLORE</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/booking">Booking</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <span className="footer-copyright">© 2026 Bakers Point Bakery</span>
            <span className="footer-divider">•</span>
            <span className="footer-credits">Made by MarvinsStack</span>
          </div>
          <p className="footer-tagline">Where Sweetness Meets You.</p>
        </div>
      </div>
    </footer>
  );
}
