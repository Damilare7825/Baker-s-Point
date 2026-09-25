import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Menu as MenuIcon, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Booking', path: '/booking' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
          <div className="logo-badge">
            <img src="/images/logo.jpg" alt="Bakers Point Bakery Mascot" className="logo-image" />
          </div>
          <div className="brand-text">
            <span className="brand-name">Bakers Point</span>
            <span className="brand-tag">BAKERY</span>
          </div>
        </Link>

        {/* Center Navigation Capsule */}
        <nav className="desktop-nav-capsule">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>
                  {isActive && <span className="active-dot" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="navbar-actions">
          <button 
            className="btn-pink nav-cta-btn"
            onClick={() => navigate('/booking')}
          >
            Order now <ArrowRight size={16} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <button 
              className="btn-pink mobile-order-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/booking');
              }}
            >
              Order now <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
