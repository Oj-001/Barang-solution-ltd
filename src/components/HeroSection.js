import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Barang Solutions Limited</h1>
        <h2>Transform Your Space with Expert Interior Finishing</h2>
        <p>From concept to completion, we create beautiful and functional interiors for every space</p>
        <div className="hero-buttons">
          <a href="#products" className="btn primary-btn">Explore Our Offers</a>
          <a href="#contact" className="btn secondary-btn">Contact Us</a>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6" alt="Security System" />
      </div>
    </section>
  );
};

export default HeroSection;