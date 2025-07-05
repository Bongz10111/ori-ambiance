// src/pages/Products.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const productList = [
  {
    id: 1,
    name: 'Bubble Candle',
    price: 180,
    image: '/images/bubble-candle.jpg',
    scents: ['No Scent', 'Lavender', 'Vanilla', 'Ocean']
  },
  {
    id: 2,
    name: 'Knot Candle',
    price: 180,
    image: '/images/knot-candle.jpg',
    scents: ['No Scent', 'Lavender', 'Vanilla', 'Ocean']
  },
  {
    id: 3,
    name: 'Diffuser',
    price: 180,
    image: '/images/diffuser.jpg',
    scents: ['Rose', 'Lemon', 'Cinnamon']
  }
];

const Products = () => {
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const handleQuantityChange = (id, qty) => {
    const newQty = { ...quantities, [id]: parseInt(qty) || 0 };
    setQuantities(newQty);

    const total = Object.entries(newQty).reduce((acc, [prodId, q]) => {
      const product = productList.find(p => p.id === parseInt(prodId));
      return acc + (product.price * q);
    }, 0);

    setTotalPrice(total);
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Our Products</h2>
      <Row>
        {productList.map(product => (
          <Col md={4} key={product.id} className="mb-4">
            <Card className="h-100 shadow-sm border-0 bg-transparent">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                style={{ height: '220px', objectFit: 'cover', borderRadius: '10px' }}
              />
              <Card.Body
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '15px',
                  padding: '20px'
                }}
              >
                <Card.Title style={{ color: '#a83264' }}>{product.name}</Card.Title>
                <Card.Text>Price: R{product.price} (for 2 candles)</Card.Text>

                <Form.Group className="mb-3">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Select
                    value={quantities[product.id] || 0}
                    onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.6)',
                      border: '1px solid #d63384',
                      color: '#333'
                    }}
                  >
                    <option value={0}>Select Quantity</option>
                    {[1, 2, 3, 4, 5].map(n => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Scent</Form.Label>
                  <Form.Select
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.6)',
                      border: '1px solid #d63384',
                      color: '#333'
                    }}
                  >
                    {product.scents.map((scent, idx) => (
                      <option key={idx} value={scent}>{scent}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Button
                  variant="secondary"
                  className="mt-3 w-100"
                  style={{
                    backgroundColor: 'rgba(214, 51, 132, 0.8)',
                    border: 'none',
                    color: 'white'
                  }}
                >
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h4 className="text-center mt-4">Total Price: R{totalPrice}</h4>
    </Container>
  );
};

export default Products;
