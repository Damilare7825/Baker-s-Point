import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './CategoryCard.css';

export default function CategoryCard({ title, imageSrc, targetCategory }) {
  return (
    <Link 
      to={`/menu?category=${encodeURIComponent(targetCategory)}`} 
      className="category-card"
    >
      <div className="category-image-wrap">
        <img src={imageSrc} alt={title} className="category-img" loading="lazy" />
      </div>
      <div className="category-card-footer">
        <span className="category-title">{title}</span>
        <ChevronRight size={16} className="category-arrow" />
      </div>
    </Link>
  );
}
