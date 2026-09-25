import React, { useState, useEffect } from 'react';
import { X, Phone, Sparkles, Users, ChevronLeft, ChevronRight, Check, Plus, Minus } from 'lucide-react';
import './ItemDetailModal.css';

export default function ItemDetailModal({ item, initialImageIndex = 1, onClose }) {
  if (!item) return null;

  const images = item.images && item.images.length > 0 ? item.images : [item.image || '/images/cat-cakes.jpg'];
  const [activeImageIndex, setActiveImageIndex] = useState(
    initialImageIndex >= 0 && initialImageIndex < images.length ? initialImageIndex : 0
  );
  const [quantity, setQuantity] = useState(1);
  const [imgLoaded, setImgLoaded] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, images.length]);

  // Prevent background body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const nextImage = () => {
    setImgLoaded(false);
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setImgLoaded(false);
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const unitPrice = item.price || 0;
  const totalPrice = unitPrice * quantity;
  const formattedTotal = `₦${totalPrice.toLocaleString()}`;

  const handleWhatsAppOrder = () => {
    const phoneNumber = '2348105585849';
    const message = encodeURIComponent(
      `Hello Bakers Point! I would like to order: ${quantity}x ${item.name} (${formattedTotal}). ` +
      `Category: ${item.category}. Please confirm availability and pick up details.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="item-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="item-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="item-modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="item-modal-grid">
          {/* Left Column: Image Viewer with 1 & 2 switcher */}
          <div className="item-modal-gallery">
            <div className="item-modal-image-display" onClick={nextImage} title="Click to view alternate image">
              <img
                src={images[activeImageIndex]}
                alt={`${item.name} view ${activeImageIndex + 1}`}
                className={`item-modal-main-img ${imgLoaded ? 'loaded' : ''}`}
                onLoad={() => setImgLoaded(true)}
              />

              {/* View badge overlay */}
              <div className="image-view-badge">
                Image {activeImageIndex + 1}
              </div>

              {/* Arrows for switching images if multiple exist */}
              {images.length > 1 && (
                <>
                  <button
                    className="gallery-nav-btn prev"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    className="gallery-nav-btn next"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails row / Toggle switch */}
            {images.length > 1 && (
              <div className="item-modal-thumbs">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`item-modal-thumb-btn ${activeImageIndex === idx ? 'active' : ''}`}
                    onClick={() => {
                      setImgLoaded(false);
                      setActiveImageIndex(idx);
                    }}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} />
                    <span className="thumb-label">
                      Image {idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            )}

            <p className="image-switch-hint">
              💡 Tip: Click image or thumbnails to view both sides & inside details.
            </p>
          </div>

          {/* Right Column: Item Information & Ordering */}
          <div className="item-modal-info">
            <div className="item-modal-header">
              <div className="item-modal-badges">
                <span className="item-modal-cat">{item.category}</span>
                {item.popular && (
                  <span className="item-modal-fav">
                    <Sparkles size={12} /> Favourite
                  </span>
                )}
              </div>
              <h2 className="item-modal-title">{item.name}</h2>
              <div className="item-modal-price">{item.priceFormatted}</div>
            </div>

            {/* Serving portion guide */}
            {item.portion && (
              <div className="item-modal-portion">
                <Users size={16} className="portion-icon" />
                <span><strong>Portion:</strong> {item.portion}</span>
              </div>
            )}

            {/* Description & Baker's Note */}
            <div className="item-modal-desc-box">
              <p className="item-modal-desc-lead">
                {item.details || item.description}
              </p>
            </div>

            {/* Tags / Quality Features */}
            {item.tags && item.tags.length > 0 && (
              <div className="item-modal-tags">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="item-tag-pill">
                    <Check size={12} /> {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Ingredients */}

            {/* Ordering Action Area */}
            <div className="item-modal-order-panel">
              <div className="item-quantity-row">
                <span className="quantity-label">Quantity:</span>
                <div className="quantity-controls">
                  <button
                    className="qty-btn"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="qty-number">{quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <div className="quantity-total">
                  Total: <strong>{formattedTotal}</strong>
                </div>
              </div>

              <button
                className="item-modal-wa-btn"
                onClick={handleWhatsAppOrder}
              >
                <Phone size={18} fill="currentColor" />
                <span>Order on WhatsApp • {formattedTotal}</span>
              </button>

              <p className="order-guarantee-note">
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
