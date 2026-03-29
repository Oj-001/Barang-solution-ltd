import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/logo.png" alt="Baranga Solutions Logo" />
          <p className='slogan'>WhereCreativity Meets Quality.</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Clients</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Clients</h3>
            <ul>
              <li><a href="#residential">Residential Homes</a></li>
              <li><a href="#commercialbuildings">Commercial Buildings</a></li>
              <li><a href="#companies&factories">Companies & Factories</a></li>
              <li><a href="#schools">Schools</a></li>
              <li><a href="#churches">Churches</a></li>
              <li><a href="#rentalapartments">Rental Apartments</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p><i className="fas fa-map-marker-alt"></i> Kiambu, Thika</p>
            <p><i className="fas fa-phone"></i> +254 722 504 262</p>
            <p><i className="fas fa-envelope"></i> info@barungsolutioms.com</p>
          </div>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1DDE1uVW7L/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Barang Solutions Limited. All Rights Reserved. Established in 2025</p>
      </div>
    </footer>
  );
};

export default Footer;