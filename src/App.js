// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer';

// ✅ Import all pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/contact';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <CustomNavbar />

        {/* ✅ USE the imported components here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
