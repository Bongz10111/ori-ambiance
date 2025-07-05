import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const CustomNavbar = () => (
  <Navbar
    bg="light"
    expand="lg"
    className="py-2 shadow-sm"
    style={{ backgroundColor: '#f8d8e9' }} // same as footer color
  >
    <Container>
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <img src={logo} alt="ORI AMBIANCE Logo" style={{ height: '50px' }} />
        {/* Brand Name next to logo */}
        <span
          style={{
            fontWeight: 'bold',
            color: 'pink',
            fontSize: '1.5rem',
            marginLeft: '10px',
            fontFamily: 'Georgia, serif',
            userSelect: 'none',
          }}
        >
          ORI AMBIANCE
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ms-auto" style={{ fontWeight: 500, fontSize: '1.1rem' }}>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/products">
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/register">
            Register
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default CustomNavbar;
