// src/pages/Register.js
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Register = () => (
  <Container className="my-5" style={{ maxWidth: '500px' }}>
    <h2>Register</h2>
    <Form>
      <Form.Group className="mb-3" controlId="registerFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" maxLength={15} placeholder="First name" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="registerSurname">
        <Form.Label>Surname</Form.Label>
        <Form.Control type="text" maxLength={20} placeholder="Surname" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="registerEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="registerPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          minLength={8}
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).+"
          title="Must contain uppercase, lowercase, number and special character"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="registerConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm password" minLength={8} required />
      </Form.Group>

      <Button
  type="submit"
  className="w-100 mt-3"
  style={{
    backgroundColor: '#d63384',
    border: 'none',
    color: 'white'
  }}
>
  Register
</Button>

    </Form>
  </Container>
);

export default Register;
