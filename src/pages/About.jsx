import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import CelebrationBanner from '../components/CelebrationBanner';
import './About.css';
import PageMeta from '../components/PageMeta';

export default function About() {
  const navigate = useNavigate();

  const promises = [
    {
      number: '01',
      title: 'Always fresh',
      description: 'Baked in small batches, so every order reaches you at its delicious best.'
    },
    {
      number: '02',
      title: 'Care in every detail',
      description: 'From the first mix to the final flourish, we make every treat with intention.'
    },
    {
      number: '03',
      title: 'Made for your moment',
      description: 'Big party or quiet craving, your order is made to feel perfectly yours.'
    }
  ];

  return (
    <div className="about-page dot-bg">
      <PageMeta title="About Bakers Point Bakery | Our Story" description="Meet Bakers Point Bakery and learn about the care behind our cakes, pastries and treats." />
      {/* 1. About Hero Section */}
      <section className="about-hero-section">
        <div className="container-wide about-hero-container">
          {/* Left Text */}
          <div className="about-hero-left">
            <div className="pill-badge">
              <span>OUR STORY</span>
            </div>

            <h1 className="about-hero-heading">
              Joy, baked into <span className="pink-text">every bite.</span>
            </h1>

            <div className="about-story-paragraphs">
              <p>
                At Bakers Point Bakery, we create fresh, delicious, and beautifully made treats for every occasion. From cakes to pastries, every bite is made with care and quality ingredients.
              </p>
            </div>

            <div className="about-cta-row">
              <button 
                className="btn-pink about-taste-btn"
                onClick={() => navigate('/menu')}
              >
                Taste the difference <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Image with Floating Card */}
          <div className="about-hero-right">
            <div className="about-image-card">
              <img 
                src="/images/about-knead.jpg" 
                alt="Baker kneading fresh dough at Bakers Point" 
                className="about-knead-img" 
              />

              {/* Floating Dark Card matching Screenshot 5 */}
              <div className="about-floating-brand-card">
                <div className="about-brand-row">
                  <div className="about-card-logo-badge">
                    <img src="/images/logo.jpg" alt="Bakers Point" className="about-card-logo-img" />
                  </div>
                  <div className="about-card-brand-text">
                    <span className="about-card-name">Bakers Point</span>
                    <span className="about-card-tag">BAKERY</span>
                  </div>
                </div>
                <p className="about-card-quote">
                  Your friendly neighbourhood baker, always ready with something sweet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Bakers Point Promise */}
      <section className="promise-section">
        <div className="container">
          <div className="promise-header">
            <div className="pill-badge">
              <span>THE BAKERS POINT PROMISE</span>
            </div>
            <h2 className="promise-title">Made the good way.</h2>
          </div>

          <div className="promise-grid">
            {promises.map((p) => (
              <div key={p.number} className="promise-card">
                <span className="promise-number">{p.number}</span>
                <h3 className="promise-card-title">{p.title}</h3>
                <p className="promise-card-desc">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Celebration Banner */}
      <CelebrationBanner />
    </div>
  );
}
