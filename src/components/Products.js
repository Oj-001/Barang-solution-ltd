import React, { useState } from 'react';
import '../styles/Products.css';

const Products = () => {
  const [expandedProduct, setExpandedProduct] = useState(null);

  const productList = [
    {
      id: 1,
      name: 'Residential Homes',
      description: 'Modern finishes for stylish and comfortable homes.',
      extendedDescription: 'We transform homes with expert painting, tiling, gypsum ceilings, and elegant finishes to create comfortable and modern living spaces tailored to your lifestyle.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
    },
    {
      id: 2,
      name: 'Commercial Buildings',
      description: 'Professional interiors for business spaces.',
      extendedDescription: 'We design and deliver modern interior solutions for offices and commercial buildings, enhancing functionality, appearance, and overall business environment.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    },
    {
      id: 3,
      name: 'Companies & Factories',
      description: 'Durable finishes for industrial use.',
      extendedDescription: 'We provide strong and long-lasting solutions such as epoxy flooring, waterproofing, and industrial coatings built to withstand heavy-duty environments.',
      image: '/company.jpg',
    },
    {
      id: 4,
      name: 'Schools',
      description: 'Safe and vibrant learning spaces.',
      extendedDescription: 'We create clean, safe, and engaging school environments with quality painting, flooring, and ceiling installations that support effective learning.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      name: 'Churches',
      description: 'Elegant interiors for worship spaces.',
      extendedDescription: 'We create beautiful and functional church interiors with expert painting, tiling, and ceiling installations that enhance the spiritual atmosphere and support community gatherings.',
      image: '/church.jpeg',
    },
    {
      id: 6,
      name: 'Rental Apartments',
      description: 'Affordable upgrades to boost value.',
      extendedDescription: 'We improve rental apartments with cost-effective finishes that enhance appearance, increase property value, and attract more tenants.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const toggleDescription = (id) => {
    if (expandedProduct === id) {
      setExpandedProduct(null);
    } else {
      setExpandedProduct(id);
    }
  };

  return (
    <section id="products" className="products-section">
      <div className="section-header">
        <h2>Our Clients</h2>
        <p>Comprehensive security solutions for your peace of mind</p>
      </div>
      <div className="products-container">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{expandedProduct === product.id ? product.extendedDescription : product.description}</p>
              <button 
                className="btn product-btn" 
                onClick={() => toggleDescription(product.id)}
              >
                {expandedProduct === product.id ? 'Show Less' : 'WHY CHOOSE US'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;