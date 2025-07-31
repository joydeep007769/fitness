import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/do1.jpg';
import img2 from '../assets/download-2.jpg';
import img3 from '../assets/download-3.jpg';

const Carouselslider = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel fade interval={2000} controls indicators>
        <Carousel.Item>
          <img className="carousel-img" src={img1} alt="Slide 1" />
          <Carousel.Caption>
            <h3>Welcome to Heat-Fit</h3>
            <p>Your fitness journey starts here</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={img2} alt="Slide 2" />
          <Carousel.Caption>
            <h3>Build Strength</h3>
            <p>Expert trainers and modern equipment</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={img3} alt="Slide 3" />
          <Carousel.Caption>
            <h3>Join the Movement</h3>
            <p>Be a part of the Heat-Fit community</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carouselslider;
