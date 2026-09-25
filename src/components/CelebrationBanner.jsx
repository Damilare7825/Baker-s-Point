import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './CelebrationBanner.css';

export default function CelebrationBanner() {
  const navigate = useNavigate();

  return (
    <section className="celebration-banner-section">
      <div className="container">
        <div className="celebration-banner-card">
          <div className="celebration-banner-text">
            <span className="celebration-sublabel">YOUR NEXT SWEET MOMENT</span>
            <h2 className="celebration-title">Have a celebration coming up?</h2>
          </div>
          <button 
            className="celebration-cta-btn"
            onClick={() => navigate('/booking')}
          >
            Let's make it special <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
