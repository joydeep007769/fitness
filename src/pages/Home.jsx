import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Home.css';
import Carouselslider from '../components/Carousalslider';


const Home = () => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const userEmail = storedUser ? storedUser.email : 'Account';

  const [scrolled, setScrolled] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('loggedin');
    navigate('/login');
  };

  const handleApply = () => {
  navigate('/pricing');
};



  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        variant={scrolled ? 'dark' : 'dark'}
        className={scrolled ? 'navbar-scrolled' : 'navbar-top'}
      >
        <Container className="custom-container">
          <Navbar.Brand as={Link} to="/home" className="brand-left">Heat-Fit</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-content" />
          <Navbar.Collapse id="navbar-content">
            <Nav className="nav-center">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
              <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
            </Nav>
            <Nav className="profile-right">
              <NavDropdown title={userEmail} id="profile-dropdown" align="end">
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="carousel-wrapper">
        <Carouselslider />
      </div>
      <div className="promo-section">
  <p className="promo-text">
    At <strong>Heat-Fit</strong>, we’re not just building bodies—we’re building lifestyles.
    Whether you're a beginner or a seasoned athlete, our expert trainers, motivating classes,
    and modern facilities are designed to help you unlock your full potential. Join a community
    where energy is high, goals are real, and results happen.
  </p>

  
  <div className="promo-buttons">
    <button className="promo-btn primary">Join Heat-Fit Now</button>
    <button className="promo-btn secondary">Get Your Free Trial</button>
    <button className="promo-btn primary" onClick={handleApply}>
    View Memberships
</button>

  </div>
</div>


      
    </>
  );
};

export default Home;
