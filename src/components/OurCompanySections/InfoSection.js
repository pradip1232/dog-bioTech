import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import '../css/InfoSection.css'; // Additional custom CSS if needed
import 'bootstrap/dist/css/bootstrap.min.css';
import mm from '../img/OUR COMPANY/our company (21).png';

const InfoSection = () => {
  const infoData = [
    {
      id: 1,
      icon: "🐕‍🦺", // Replace with the actual icon
      title: "Market leadership in the Domestic Veterinary Sector",
    },
    {
      id: 2,
      icon: "📦", // Replace with the actual icon
      title: "Over 100+ Stockists Across India",
    },
    {
      id: 3,
      icon: "🏥", // Replace with the actual icon
      title: "Over 4,000 Client's encompassing Veterinary Hospitals and Veterinary Clinics",
    },
  ];

  return (
    <div className="info-section">
      {/* Background Image */}
      <div className="background-image">
        <Image src={mm} fluid className="bg-image" />
      </div>

      {/* Info Cards */}
      <Container>
        <Row className="justify-content-center">
          {infoData.map((item) => (
            <Col key={item.id} xs={12} md={6} lg={4} className="mb-4">
              <Card className="text-center info-card">
                <Card.Body>
                  <div className="icon-circle mx-auto">
                    <span className="icon">{item.icon}</span>
                  </div>
                  <Card.Text className="mt-3 info-text">
                    {item.title}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default InfoSection;
