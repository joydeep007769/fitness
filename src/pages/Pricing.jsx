import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import pricingBgImg from '../assets/au2.jpg'; // your image path

const plans = [
  {
    name: 'Basic Fit',
    features: ['Gym access (Mon–Fri)', 'Locker access', 'Free fitness assessment'],
    price: '₹999/month',
  },
  {
    name: 'Heat-Pro',
    features: ['24/7 gym access', 'Group classes', '1 PT session/month'],
    price: '₹1,799/month',
  },
  {
    name: 'Elite Burn',
    features: ['All Pro features', 'Unlimited classes', 'Personal trainer + nutrition guide'],
    price: '₹2,499/month',
  },
];

const Pricing = () => {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',  // full viewport height
        width: '100vw',      // full viewport width
        backgroundImage: `url(${pricingBgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflowY: 'auto',
      }}
    >
      {/* Overlay for readability */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: '#1a1f2b82',
          zIndex: 1,
        }}
      />

      {/* Content container above overlay */}
      <Container
        className="my-5"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1100px',
          padding: '50px 20px',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          className="content-wrapper"
          style={{
            textAlign: 'center',
            marginBottom: '40px',
            color: '#F5F1E9',
          }}
        >
          <h1
            style={{
              fontWeight: '700',
              fontSize: '2.5rem',
              lineHeight: '1.2',
              marginBottom: '0.75rem',
            }}
          >
            Heat-Fit Membership Plans
          </h1>
          <p
            style={{
              color: '#F5F1E9',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: 'auto',
              lineHeight: '1.4',
            }}
          >
            Flexible options for every lifestyle — no hidden fees.
          </p>
        </div>

        <Row
          className="justify-content-center"
          xs={1}
          sm={1}
          md={3}
          style={{
            gap: '1rem',
            margin: '0 auto',
            maxWidth: '1000px',
          }}
        >
          {plans.map(({ name, features, price }, idx) => (
            <Col key={idx} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                className="h-100 shadow-sm"
                style={{
                  borderRadius: '10px',
                  maxWidth: '320px',
                  width: '100%',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <Card.Body className="d-flex flex-column">
                  <Card.Title
                    style={{ fontWeight: '700', fontSize: '1.6rem', color: '#004080' }}
                  >
                    {name}
                  </Card.Title>

                  <div
                    style={{
                      fontWeight: '900',
                      fontSize: '1.8rem',
                      color: '#008000',
                      margin: '1rem 0',
                    }}
                  >
                    {price}
                  </div>

                  <ul
                    style={{
                      listStyle: 'none',
                      paddingLeft: 0,
                      color: '#333',
                      flexGrow: 1,
                      marginBottom: '1rem',
                    }}
                  >
                    {features.map((feat, i) => (
                      <li
                        key={i}
                        style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}
                      >
                        <span
                          style={{
                            color: '#28a745',
                            fontWeight: 'bold',
                            marginRight: '0.5rem',
                          }}
                        >
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="success"
                    size="lg"
                    style={{
                      backgroundColor: '#007b00',
                      borderColor: '#004d00',
                      fontWeight: '700',
                      borderRadius: '5px',
                    }}
                    onClick={() => alert(`Subscribed to ${name}`)}
                  >
                    Subscribe Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Pricing;
