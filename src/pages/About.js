// src/pages/About.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import candleImage from '../assets/logo.png'; // or use any other image

const About = () => (
  <Container className="my-5">
    <h2 className="text-center mb-4" style={{ color: '#a83264' }}>About ORI AMBIANCE</h2>
    <Row className="mt-4 align-items-center">
      <Col md={6}>
        <p>
          ORI AMBIANCE was founded in Cape Town in 2021. We create elegant scented candles and diffusers that bring a calming and luxurious atmosphere to your home.
        </p>
        <p>
          Our candles come in various scents including Vanilla, Lavender, Ocean, and No Scent. We pride ourselves on quality, style, and affordable prices. We use eco-friendly wax.
        </p>
      </Col>
      <Col md={6} className="text-center">
        <Image
          src={candleImage}
          alt="Candle Logo"
          fluid
          rounded
          style={{
            maxHeight: '500px',
            opacity: 0.75, // ✅ Make it semi-transparent
            filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))', // Optional glow
            borderRadius: '16px'
          }}
        />
      </Col>
    </Row>
  </Container>
);

export default About;
