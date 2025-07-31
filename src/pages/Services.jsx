import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import strengthImg from '../assets/s.jpg';
import yogaImg from '../assets/y.jpg';
import groupImg from '../assets/gc.jpg';
import personalImg from '../assets/pt.jpg';

const services = [
    {
        title: 'Strength Training',
        description: 'Build muscle and boost your power with our state-of-the-art equipment and personalized coaching.',
        img: strengthImg,
    },
    {
        title: 'Yoga & Wellness',
        description: 'Find your balance and improve flexibility with guided yoga classes tailored for all levels.',
        img: yogaImg,
    },
    {
        title: 'Group Classes',
        description: 'High-energy group workouts including spin, HIIT, and bootcamps to keep you motivated.',
        img: groupImg,
    },
    {
        title: 'Personal Training',
        description: 'One-on-one expert training to help you smash your fitness goals faster and safer.',
        img: personalImg,
    }
];

const Services = () => {
    const navigate = useNavigate();

    const handleApply = () => {
        navigate('/Pricing'); // adjust as needed
    };

    return (
        <Container className="my-5">
            <h1 className="text-center mb-3" style={{ fontWeight: '700', color: '#003366' }}>
                Heat-Fit — Our Services
            </h1>
            <h4 className="text-center mb-5" style={{ color: '#90ee90' }}>
                What We Offer
            </h4>

            {/*  Wrap Row in a centered Col with offset */}
            <Row xs={1} sm={2} md={3} lg={4} className="g-4 services-row">
                {services.map(({ title, description, img }, idx) => (
                    <Col key={idx}>
                        <Card className="h-100 shadow-sm border-0">
                            <Card.Img variant="top" src={img} style={{ height: '180px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title style={{ fontSize: '1.25rem', fontWeight: '600' }}>{title}</Card.Title>
                                <Card.Text style={{ color: '#004080' }}>{description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>


            <div className="text-center mt-5">
                <h5 style={{ color: '#003366', fontWeight: '600' }}>Ready to get started?</h5>
                <Button
                    variant="success"
                    size="lg"
                    onClick={handleApply}
                    style={{
                        backgroundColor: '#004080',
                        borderColor: '#90ee90',
                        color: '#90ee90'
                    }}
                    className="mt-3"
                >
                    Apply for Membership
                </Button>
            </div>
        </Container>

    );
};

export default Services;
