import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2>About Barang Solutions Limited</h2>
      </div>
      <div className="about-container">
        <div className="about-image">
          <img src="/about.jpeg" alt="Interior designers collaborating on project" />
        </div>
        <div className="about-content">
          <h3>Transforming Spaces with Quality Interior Solutions</h3>
          <p>
            Barang Solutions Limited is a professional interior design and finishing company dedicated 
            to transforming spaces into functional, modern, and aesthetically appealing environments.
          </p>
          <p>
            Our mission is to provide high-quality interior solutions that transform spaces and meet the needs of homeowners, businesses, institutions, and industries. We combine creativity, expertise, 
            and attention to detail to deliver functional, innovative, and exceptional results.
          </p>
          <p>Whether it's enhancing the beauty of a home or optimizing a commercial space, we are committed 
            to excellence, reliability, and customer satisfaction.</p>
          <div className="about-features">
            <div className="feature">
              <i className="fas fa-paint-roller"></i>
              <h4>Expert Finishing</h4>
            </div>
            <div className="feature">
              <i className="fas fa-users"></i>
              <h4>Skilled Team</h4>
            </div>
            <div className="feature">
              <i className="fas fa-check-circle"></i>
              <h4>Quality Work</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;