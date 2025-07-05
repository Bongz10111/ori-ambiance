// src/pages/Contact.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with actual email logic later
    console.log('Message sent:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4" style={{ color: '#a83264' }}>Contact Us</h2>
      <Row>
        {/* Left: Contact Info */}
        <Col md={6}>
          <p>
            For any enquiries or orders, feel free to reach out to us:
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li><strong>Email:</strong> mbomvu103@gmail.com</li>
            <li><strong>WhatsApp:</strong> +27 71 234 5678</li>
            <li><strong>Instagram:</strong> @oriambiance</li>
            <li><strong>Facebook:</strong> facebook.com/oriambiance</li>
          </ul>
        </Col>

        {/* Right: Email Form */}
        <Col md={6}>
          <Form onSubmit={handleSubmit} style={{ backgroundColor: 'rgba(255,255,255,0.7)', padding: '20px', borderRadius: '12px' }}>
            {submitted && (
              <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                Your message has been sent!
              </Alert>
            )}
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Type your enquiry or order here"
                required
              />
            </Form.Group>

            <Button type="submit" variant="secondary" className="w-100" style={{ backgroundColor: '#d63384', border: 'none' }}>
              Send Email
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
