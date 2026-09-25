import React from 'react';

export default function MarqueeStrip() {
  const items = [
    'MADE FOR CELEBRATIONS',
    'QUALITY INGREDIENTS',
    'DELIVERING JOY',
    'FRESH EVERY DAY',
    'MADE FOR CELEBRATIONS',
    'QUALITY INGREDIENTS',
    'DELIVERING JOY',
    'FRESH EVERY DAY'
  ];

  return (
    <div className="marquee-wrapper" aria-hidden="true">
      <div className="marquee-content">
        {items.concat(items).map((item, index) => (
          <span key={index} className="marquee-item">
            {item}
            <span className="marquee-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
