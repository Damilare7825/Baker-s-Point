import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Calendar, ArrowRight, Sparkles, Heart } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';
import CelebrationBanner from '../components/CelebrationBanner';
import PageMeta from '../components/PageMeta';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const handleWhatsAppOrder = () => {
    const phoneNumber = '2348105585849';
    const message = encodeURIComponent("Hello Bakers Point! I'd like to place an order.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const categories = [
    { title: 'Cakes', imageSrc: '/images/cat-cakes.jpg', targetCategory: 'Cakes' },
    { title: 'Cupcakes', imageSrc: '/images/cat-cupcakes.jpg', targetCategory: 'Cupcakes' },
    { title: 'Doughnuts', imageSrc: '/images/cat-doughnuts.jpg', targetCategory: 'Doughnuts' },
    { title: 'Puff-Puff', imageSrc: '/images/cat-puff-puff.jpg', targetCategory: 'Puff-Puff' },
    { title: 'Chin Chin', imageSrc: '/images/cat-chin-chin.jpg', targetCategory: 'Chin Chin' },
    { title: 'Meatpie / Sammosa', imageSrc: '/menu/Meat Pie 1.jpg', targetCategory: 'Other Treats' }
  ];

  return (
    <div className="home-page dot-bg">
      <PageMeta title="Bakers Point Bakery | Cakes, Pastries & Treats in Abuja" description="Order freshly made cakes, pastries, puff-puff, chin chin and celebration treats from Bakers Point Bakery in Abuja." />
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="container-wide hero-container">
          {/* Left Hero Column */}
          <div className="hero-left">
            <div className="pill-badge">
              <span className="badge-dot" />
              <span>FRESHLY BAKED, ALWAYS SPECIAL</span>
            </div>

            <h1 className="hero-headline">
              Where <br />
              <span className="hero-sweetness-wrapper">
                Sweetness
                {/* Hand-drawn pink brush stroke underline matching design */}
                <svg className="sweetness-brush-line" viewBox="0 0 320 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M3 14C55 5 180 3 317 11C230 18 110 21 3 14Z" 
                    fill="#E91E63"
                  />
                </svg>
              </span> <br />
              Meets You.
            </h1>

            <p className="hero-description">
              Thoughtfully made cakes, pastries, and treats for everyday cravings and life's sweetest celebrations.
            </p>

            <div className="hero-cta-group">
              <button 
                className="btn-pink hero-wa-btn"
                onClick={handleWhatsAppOrder}
              >
                <Phone size={18} fill="currentColor" />
                <span>Order on WhatsApp</span>
              </button>

              <button 
                className="btn-outline hero-book-btn"
                onClick={() => navigate('/booking')}
              >
                <Calendar size={18} />
                <span>Book now</span>
              </button>
            </div>

            {/* Trust badge row */}
            <div className="hero-trust-row">
              <div className="trust-avatars">
                <div className="trust-avatar avatar-pink">
                  <Heart size={10} fill="#ffffff" color="#ffffff" />
                </div>
                <div className="trust-avatar avatar-gold">
                  <Heart size={10} fill="#ffffff" color="#ffffff" />
                </div>
                <div className="trust-avatar avatar-brown">
                  <Heart size={10} fill="#ffffff" color="#ffffff" />
                </div>
              </div>
              <div className="trust-text">
                <strong>Made with care</strong>
                <span>and quality ingredients</span>
              </div>
            </div>
          </div>

          {/* Right Hero Column */}
          <div className="hero-right">
            {/* Playful curved arrow doodle */}
            <div className="hero-doodle-arrow">
              <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                <path 
                  d="M10 35C28 20 42 12 50 8M50 8L42 7M50 8L49 16" 
                  stroke="#E91E63" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Arch-framed Cake Photo */}
            <div className="hero-arch-card">
              <img 
                src="/images/hero-cake.jpg" 
                alt="Artisan chocolate fig cake with pistachios" 
                className="hero-arch-img" 
              />

              {/* Floating Top-Left White Card */}
              <div className="floating-badge-baked">
                <Sparkles size={16} className="badge-sparkle-icon" />
                <div className="badge-baked-text">
                  <span className="badge-baked-title">BAKED FRESH</span>
                  <span className="badge-baked-sub">for every order</span>
                </div>
              </div>

              {/* Floating Bottom-Right Dark Card */}
              <div className="floating-badge-love">
                <span className="badge-love-number">100%</span>
                <span className="badge-love-sub">made with love</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Choose your favourite Section */}
      <section className="favourite-section">
        <div className="container-wide">
          <div className="favourite-header">
            <div className="pill-badge">
              <span>A LITTLE SOMETHING FOR EVERYONE</span>
            </div>
            <h2 className="favourite-heading">
              Choose your <span className="pink-text">favourite</span>
            </h2>
            <p className="favourite-subtext">
              From celebration cakes to the perfect crunchy snack, explore a joyful spread made fresh for you.
            </p>
          </div>

          {/* 6 Category Cards Grid */}
          <div className="category-cards-grid">
            {categories.map((cat, idx) => (
              <CategoryCard 
                key={idx}
                title={cat.title}
                imageSrc={cat.imageSrc}
                targetCategory={cat.targetCategory}
              />
            ))}
          </div>

          <div className="favourite-action-row">
            <button 
              className="btn-dark explore-menu-btn"
              onClick={() => navigate('/menu')}
            >
              Explore full menu <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Full-width Celebration CTA Banner */}
      <CelebrationBanner />
    </div>
  );
}
