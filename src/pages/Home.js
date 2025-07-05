// src/pages/Home.js
import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => (
  <div style={{
    backgroundImage: "url('/images/candle.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#d63384',
    textShadow: '2px 2px 6px white'
  }}>
    <Container className="text-center">
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>ORI AMBIANCE</h1>
      <p style={{ fontSize: '1.5rem' }}>Elegant scented candles & diffusers since 2021</p>
    </Container>
  </div>
);

export default Home;
