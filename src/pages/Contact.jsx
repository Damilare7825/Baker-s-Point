import React from 'react';
import { Phone, ArrowUpRight, Info } from 'lucide-react';
import CelebrationBanner from '../components/CelebrationBanner';
import './Contact.css';
import PageMeta from '../components/PageMeta';

export default function Contact() {
  const contactChannels = [
    { label: 'WHATSAPP ORDERS', phone: '08105585849', intl: '2348105585849', desc: 'For immediate cake and pastry orders' },
    { label: 'WHATSAPP ENQUIRIES', phone: '07087985562', intl: '2347087985562', desc: 'For catering questions and custom quotes' }
  ];

  return (
    <div className="contact-page dot-bg">
      <PageMeta title="Contact Bakers Point Bakery | Abuja" description="Contact Bakers Point Bakery for cake orders, pastry enquiries, catering questions and custom quotes on WhatsApp." />
      <div className="container">
        <div className="contact-split-wrapper">
          <div className="contact-dark-panel">
            <h1 className="contact-panel-heading">
              We're here for your <span className="pink-text">sweet moments.</span>
            </h1>
            <p className="contact-panel-desc">
              Whether you have a question about our menu, need a custom cake quote, or want to place a fresh order, our friendly team is just a WhatsApp message away.
            </p>
            <div className="contact-rows-list">
              {contactChannels.map((channel) => (
                <a
                  key={channel.label}
                  href={`https://wa.me/${channel.intl}?text=${encodeURIComponent(`Hello Bakers Point! I am messaging regarding ${channel.label.toLowerCase()}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-row"
                >
                  <div className="channel-icon-wrap"><Phone size={20} /></div>
                  <div className="channel-info">
                    <span className="channel-label">{channel.label}</span>
                    <span className="channel-phone">{channel.phone}</span>
                    <span className="channel-desc">{channel.desc}</span>
                  </div>
                  <ArrowUpRight size={20} className="channel-arrow" />
                </a>
              ))}
            </div>
          </div>

          <div className="contact-cream-panel">
            <div className="contact-brand-row">
              <div className="contact-logo-badge">
                <img src="/images/logo.jpg" alt="Bakers Point Mascot" className="contact-logo-img" />
              </div>
              <div className="contact-brand-meta">
                <span className="contact-brand-name">Bakers Point</span>
                <span className="contact-brand-tag">BAKERY</span>
              </div>
            </div>
            <div className="pickup-notice-card">
              <Info size={20} className="notice-icon" />
              <div className="notice-content">
                <strong>Planning a pick up?</strong>
                <p>Please wait for your WhatsApp confirmation before making the trip, so we can have everything freshly packaged, perfect, and ready for you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CelebrationBanner />
    </div>
  );
}
