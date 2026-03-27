import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      name: 'Painting',
      description: 'Professional interior and exterior painting services with high-quality finishes that enhance durability and appearance.',
      icon: 'fa-paint-roller',
      image: '/painting.jpg'
    },
    {
      id: 2,
      name: 'Waterproofing',
      description: 'Effective waterproofing solutions to protect buildings from water damage, leaks, and moisture-related issues.',
      icon: 'fa-water',
      image: '/proofing.jpg'
    },
    {
      id: 3,
      name: 'Tiling',
      description: 'Expert wall and floor tiling services with precision installation for both residential and commercial spaces.',
      icon: 'fa-border-all',
      image: '/tiling.jpg'
    },
    {
      id: 4,
      name: 'Gypsum Ceiling Installation',
      description: 'Modern gypsum ceiling designs that improve aesthetics, insulation, and lighting integration.',
      icon: 'fa-home',
      image: '/gypsum.jpg'
    },
    {
      id: 5,
      name: 'Office Partitioning',
      description: 'Efficient and stylish office partitioning solutions to maximize space and improve productivity.',
      icon: 'fa-building',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      name: 'Epoxy Flooring',
      description: 'Durable and attractive epoxy flooring solutions for industrial and commercial spaces.',
      icon: 'fa-layer-group',
      image: '/epoxy.jpg'
    },
    {
      id: 7,
      name: 'Wainscoting (Wall Paneling)',
      description: 'Decorative wall paneling that adds elegance, texture, and character to interiors.',
      icon: 'fa-border-style',
      image: '/Wainscoting.jpg'
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="section-header">
        <h2>Our Services</h2>
        <p>At Barang Solutions Limited, we offer a wide range of interior finishing and design services:</p>
      </div>
      <div className="services-container">
        {servicesList.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-image">
              <img src={service.image} alt={service.name} />
            </div>
            <div className="service-icon">
              <i className={`fas ${service.icon}`}></i>
            </div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;