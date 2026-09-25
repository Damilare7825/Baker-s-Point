import React, { useState } from 'react';
import { Phone, Eye, Repeat, Check, Users } from 'lucide-react';
import './MenuCard.css';

export default function MenuCard({ item, onOpenDetails }) {
  const { name, category, priceFormatted, description, popular, images = [], portion } = item;
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const displayImages = images.length > 0 ? images : [item.image || '/images/cat-cakes.jpg'];
  const hasMultipleImages = displayImages.length > 1;

  const handleImageToggle = (e) => {
    e.stopPropagation();
    if (!hasMultipleImages) return;
    setIsFlipping(true);
    setTimeout(() => {
      setActiveImgIndex((prev) => (prev + 1) % displayImages.length);
      setIsFlipping(false);
    }, 160);
  };

  const handleCardClick = () => {
    if (onOpenDetails) {
      // If clicking card, open details modal with the second/detail image active
      const nextImg = activeImgIndex === 0 && hasMultipleImages ? 1 : activeImgIndex;
      onOpenDetails(item, nextImg);
    }
  };

  const handleOrderWhatsApp = (e) => {
    e.stopPropagation();
    const phoneNumber = '2348105585849';
    const message = encodeURIComponent(
      `Hello Bakers Point! I would like to order: ${name} (${priceFormatted}).`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div
      className={`menu-card ${popular ? 'is-popular' : ''}`}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
    >
      {popular && (
        <div className="popular-badge">
          <span>Favourite</span>
        </div>
      )}

      {/* Image Showcase with interactive 1 & 2 switcher */}
      <div
        className="menu-card-image-wrap"
        onClick={handleImageToggle}
        title={hasMultipleImages ? "Change image" : name}
      >
        <img
          src={displayImages[activeImgIndex]}
          alt={`${name} - View ${activeImgIndex + 1}`}
          className={`menu-card-img ${isFlipping ? 'flipping' : ''}`}
          loading="lazy"
        />

        {/* View mode pill */}
        {hasMultipleImages && (
          <div className={`menu-img-view-pill ${activeImgIndex === 1 ? 'is-inside' : ''}`}>
            Image {activeImgIndex + 1}
          </div>
        )}

        {/* Toggle button on image */}
        {hasMultipleImages && (
          <button
            className="menu-img-toggle-btn"
            onClick={handleImageToggle}
            title="Switch photo view"
            aria-label="Switch photo view"
          >
            <Repeat size={14} />
            <span>Change image</span>
          </button>
        )}

        {/* Indicator dots */}
        {hasMultipleImages && (
          <div className="menu-img-dots">
            {displayImages.map((_, idx) => (
              <span
                key={idx}
                className={`menu-img-dot ${activeImgIndex === idx ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImgIndex(idx);
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card Header */}
      <div className="menu-card-header">
        <span className="menu-card-cat">{category}</span>
        <span className="menu-card-price">{priceFormatted}</span>
      </div>

      {/* Card Body */}
      <div className="menu-card-body">
        <h3 className="menu-card-name">{name}</h3>
        <p className="menu-card-desc">{description}</p>

        {portion && (
          <div className="menu-card-portion-hint">
            <Users size={13} />
            <span>{portion}</span>
          </div>
        )}
      </div>

      {/* Card Actions */}
      <div className="menu-card-actions">
        <button
          className="menu-details-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
          }}
          title="View full details and photos"
        >
          <Eye size={15} />
          <span>Details</span>
        </button>

        <button
          className="menu-order-btn"
          onClick={handleOrderWhatsApp}
          title={`Order ${name} on WhatsApp`}
        >
          <Phone size={14} />
          <span>Order</span>
        </button>
      </div>
    </div>
  );
}
