import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(user));
    alert("Registered successfully");
    navigate('/login');
  };

  return (
    <Container className='auth-container'>
      <Form className='auth-form' onSubmit={handleSubmit}>
        <div className="tab-buttons">
          <button onClick={() => navigate('/register')} className="active">Register</button>
          <button onClick={() => navigate('/login')}>Login</button>
        </div>

        <h2>Register</h2>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            required
            placeholder="Enter email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            required
            placeholder="Enter password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>

        <Button variant='danger' type='submit' className='w-100'>
          Register
        </Button>

        <div className="form-link mt-3">
          Already have an account? <a href="/login">Login</a>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
