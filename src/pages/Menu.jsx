import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MENU_ITEMS, CATEGORIES } from '../data/menuData';
import MenuCard from '../components/MenuCard';
import ItemDetailModal from '../components/ItemDetailModal';
import CelebrationBanner from '../components/CelebrationBanner';
import { Image as ImageIcon, X } from 'lucide-react';
import './Menu.css';
import PageMeta from '../components/PageMeta';

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [flyerModalOpen, setFlyerModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(1);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && CATEGORIES.includes(cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category });
    }
  };

  const handleOpenDetails = (item, imageIndex = 1) => {
    setSelectedItem(item);
    setModalImageIndex(imageIndex);
  };

  const filteredItems = MENU_ITEMS.filter((item) => !item.name.startsWith('Pack of 10'))
    .filter((item) => activeCategory === 'All' || item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="menu-page dot-bg">
      <PageMeta title="Bakery Menu | Bakers Point Bakery" description="Explore cakes, cupcakes, doughnuts, puff-puff, chin chin and savory pastries from Bakers Point Bakery." />
      <div className="container">
        {/* Header */}
        <div className="menu-header">
          <div className="pill-badge">
            <span>OUR FRESH MENU</span>
          </div>
          <h1 className="menu-heading">
            Pick your <span className="pink-text">happy.</span>
          </h1>
          <p className="menu-subtext">
            Everything is baked fresh to order. Click on any treat to reveal its inside filling, recipe details, and order instantly.
          </p>

          <div className="menu-header-actions">
            <button 
              className="view-flyer-btn"
              onClick={() => setFlyerModalOpen(true)}
            >
              <ImageIcon size={16} />
              <span>View Official Menu Flyer</span>
            </button>
          </div>
        </div>

        {/* Category Filters Pills Row */}
        <div className="category-filters-scroll">
          <div className="category-filters-container">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={`filter-pill-btn ${activeCategory.toLowerCase() === category.toLowerCase() ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Item Counter & Interactive Hint */}
        <div className="menu-items-meta">
          <span>Showing <strong>{filteredItems.length}</strong> delicious {activeCategory === 'All' ? 'items' : activeCategory}</span>
          <span className="interactive-hint-pill">
            <span>Click any item to flip image & explore details</span>
          </span>
        </div>

        {/* 3 Columns Menu Card Grid */}
        <div className="menu-grid">
          {filteredItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <ItemDetailModal
          item={selectedItem}
          initialImageIndex={modalImageIndex}
          onClose={() => setSelectedItem(null)}
        />
      )}

      {/* Official Flyer Modal */}
      {flyerModalOpen && (
        <div className="flyer-modal-overlay" onClick={() => setFlyerModalOpen(false)}>
          <div className="flyer-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="flyer-modal-close"
              onClick={() => setFlyerModalOpen(false)}
              aria-label="Close menu flyer"
            >
              <X size={20} />
            </button>
            <div className="flyer-modal-header">
              <h3>Bakers Point Official Menu Flyer</h3>
              <p>Fresh Bakes • Sweet Moments</p>
            </div>
            <div className="flyer-modal-image-wrap">
              <img src="/images/menu-flyer.jpg" alt="Official Bakers Point Menu Flyer" className="flyer-full-img" />
            </div>
          </div>
        </div>
      )}

      {/* Celebration Banner */}
      <CelebrationBanner />
    </div>
  );
}
