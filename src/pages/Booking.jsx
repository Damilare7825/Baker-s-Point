import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/menuData';
import { CheckCircle2, Phone, Calendar, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import CelebrationBanner from '../components/CelebrationBanner';
import './Booking.css';
import PageMeta from '../components/PageMeta';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    item: 'Small Cake (4in) — ₦8,000',
    quantity: '1',
    date: '',
    notes: ''
  });

  const [formError, setFormError] = useState('');

  const checklistItems = [
    'We confirm availability and details',
    'Custom cake designs are welcome',
    'Payment details shared on WhatsApp'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (!formData.phone.trim()) {
      setFormError('Please enter your phone number.');
      return;
    }

    // Format WhatsApp Message
    const textLines = [
      `*🎂 NEW BAKERS POINT ORDER / BOOKING*`,
      `---------------------------------`,
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*Item:* ${formData.item}`,
      `*Quantity:* ${formData.quantity}`,
      formData.date ? `*Preferred Date:* ${formData.date}` : null,
      `*Method:* Pick up`,
      formData.notes.trim() ? `*Notes / Message:* ${formData.notes}` : null,
      `---------------------------------`,
      `_Sent from Bakers Point Website_`
    ].filter(Boolean).join('\n');

    const whatsappNumber = '2348105585849';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textLines)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="booking-page dot-bg">
      <PageMeta title="Order & Booking | Bakers Point Bakery" description="Request cakes and bakery treats from Bakers Point Bakery. Share your order details and confirm with us on WhatsApp." />
      <div className="container">
        <div className="booking-grid">
          {/* Left Information */}
          <div className="booking-info-col">
            <div className="pill-badge">
              <span>ORDER & BOOKING</span>
            </div>

            <h1 className="booking-heading">
              Let's bake <span className="pink-text">something special.</span>
            </h1>

            <p className="booking-lead">
              Tell us what you're craving and when you need it. We'll open your order in WhatsApp so you can confirm every delicious detail with our baker.
            </p>

            {/* Checklist */}
            <div className="booking-checklist">
              {checklistItems.map((item, idx) => (
                <div key={idx} className="checklist-row">
                  <div className="check-icon-circle">
                    <CheckCircle2 size={18} className="check-icon" />
                  </div>
                  <span className="check-text">{item}</span>
                </div>
              ))}
            </div>

            {/* Support Note */}
            <div className="booking-help-box">
              <Phone size={18} className="help-icon" />
              <div>
                <strong>Need immediate assistance?</strong>
                <p>Call or WhatsApp directly on 08105585849.</p>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="booking-form-col">
            <div className="booking-card">
              <h2 className="booking-card-title">Place Your Order Request</h2>
              <p className="booking-card-subtitle">Fill in the details below to generate your WhatsApp order.</p>

              {formError && (
                <div className="form-error-banner" role="alert">
                  {formError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="order-form">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Chioma Adebayo"
                    className="form-input"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 0812 345 6789"
                    className="form-input"
                    required
                  />
                </div>

                {/* What would you like */}
                <div className="form-group">
                  <label htmlFor="item" className="form-label">What would you like?</label>
                  <select
                    id="item"
                    name="item"
                    value={formData.item}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <optgroup label="Cakes">
                      {MENU_ITEMS.filter(i => i.category === 'Cakes').map(i => (
                        <option key={i.id} value={`${i.name} — ${i.priceFormatted}`}>{i.name} — {i.priceFormatted}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Cupcakes">
                      {MENU_ITEMS.filter(i => i.category === 'Cupcakes').map(i => (
                        <option key={i.id} value={`${i.name} — ${i.priceFormatted}`}>{i.name} — {i.priceFormatted}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Doughnuts">
                      {MENU_ITEMS.filter(i => i.category === 'Doughnuts').map(i => (
                        <option key={i.id} value={`${i.name} — ${i.priceFormatted}`}>{i.name} — {i.priceFormatted}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Puff-Puff">
                      {MENU_ITEMS.filter(i => i.category === 'Puff-Puff').map(i => (
                        <option key={i.id} value={`${i.name} — ${i.priceFormatted}`}>{i.name} — {i.priceFormatted}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Chin Chin">
                      {MENU_ITEMS.filter(i => i.category === 'Chin Chin').map(i => (
                        <option key={i.id} value={`${i.name} — ${i.priceFormatted}`}>{i.name} — {i.priceFormatted}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Other Treats">
                      {MENU_ITEMS.filter(i => i.category === 'Other Treats').map(i => (
                        <option key={i.id} value={`${i.name} — ${i.priceFormatted}`}>{i.name} — {i.priceFormatted}</option>
                      ))}
                    </optgroup>
                    <option value="Custom Bespoke Order (Multiple items / special theme)">
                      Custom Bespoke Order (Multiple items / special theme)
                    </option>
                  </select>
                </div>

                {/* Quantity & Date Row */}
                <div className="form-row-two">
                  <div className="form-group">
                    <label htmlFor="quantity" className="form-label">Quantity / Servings</label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 1 cake, 2 packs"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="date" className="form-label">Preferred Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Fulfillment Toggle */}
                <div className="form-group">
                  <label className="form-label">How will you get it?</label>
                  <div className="fulfillment-toggle-group">
                    <button
                      type="button"
                      className="fulfillment-pill active"
                    >
                      Pick up at Bakery
                    </button>
                  </div>
                </div>


                {/* Order Notes */}
                <div className="form-group">
                  <label htmlFor="notes" className="form-label">Order Notes / Cake Message</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Write your custom cake inscription, color preferences, flavors, or dietary notes..."
                    rows={3}
                    className="form-textarea"
                  />
                </div>

                {/* Submit button */}
                <button type="submit" className="booking-submit-btn">
                  <Send size={18} />
                  <span>Send Order to WhatsApp</span>
                </button>
                <p className="booking-legal-note">
                  By submitting, you agree to our <Link to="/terms">Terms &amp; Conditions</Link> and <Link to="/privacy">Privacy Policy</Link>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <CelebrationBanner />
    </div>
  );
}
