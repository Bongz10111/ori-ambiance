import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer
    style={{
      backgroundColor: '#f8d8e9',
      color: '#a83264',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      padding: '10px 0',
      fontSize: '0.85rem',
      boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
      zIndex: 1000,
    }}
  >
    <Container className="text-center d-flex justify-content-center align-items-center gap-3">
      <span>Follow us on social media:</span>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
        <FaInstagram size={20} color="#a83264" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
        <FaFacebook size={20} color="#a83264" />
      </a>
      <span className="ms-3">© 2025 ORI AMBIANCE. All rights reserved.</span>
    </Container>
  </footer>
);

export default Footer;
