import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import loginImg from '../assets/pc.jpg';  // replace with your image


const Login = () => {
  const [credential, setCredential] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (
      storedUser &&
      credential.email === storedUser.email &&
      credential.password === storedUser.password
    ) {
      localStorage.setItem('loggedin', 'true');
      navigate('/home');
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-page">
      <Container fluid className="h-100">
        <Row className="h-100 align-items-center">
          {/* Image column */}
          <Col md={6} className="d-none d-md-flex justify-content-center">
            <img src={loginImg} alt="Fitness" className="login-image" />
          </Col>

          {/* Form column */}
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <Form className="auth-form" onSubmit={handleLogin}>
              <h2 className="mb-4">Login</h2>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  required
                  placeholder="Enter email"
                  onChange={(e) => setCredential({ ...credential, email: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  placeholder="Enter password"
                  onChange={(e) => setCredential({ ...credential, password: e.target.value })}
                />
              </Form.Group>

              <Button variant="success" type="submit" className="w-100">
                Login
              </Button>

              <div className="form-link mt-3 text-center">
                Don't have an account? <a href="/register">Register</a>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
