// MissionVisionSection.js
import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import '../css/MissionVisionSection.css'; // Optional custom CSS

import missionImage from '../img/OUR COMPANY/our company (20).png'; // Example right-side image

const MissionVisionSection = () => {
    return (
        <Container fluid className="mission-vision-section ">
            <h2 className="text-center mb-4">OUR MISSION | OUR VISION</h2>
            <Row className="align-items-center">
                {/* Cards Section */}
                <Col lg={6} md={12} className="mb-4">
                    <Row>
                        {/* Vision Card */}
                        <Col md={6} xs={12} className="mb-4">
                            <Card className="mission-vision-card shadow">
                                <div className="icon-container">
                                    <i className="bi bi-lightbulb-fill icon-style"></i>
                                </div>
                                <Card.Body>
                                    <Card.Title className="text-center">Vision</Card.Title>
                                    <div className="divider"></div>
                                    <Card.Text className="text-center">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Mission Card */}
                        <Col md={6} xs={12} className="mb-4">
                            <Card className="mission-vision-card shadow">
                                <div className="icon-container">
                                    <i className="bi bi-flag-fill icon-style"></i>
                                </div>
                                <Card.Body>
                                    <Card.Title className="text-center">Mission</Card.Title>
                                    <div className="divider"></div>
                                    <Card.Text className="text-center">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard since the 1500s.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>

                {/* Right-Side Image Section */}
                <Col lg={6} md={12} className="image-container">
                    <Image src={missionImage} alt="Mission Vision" fluid className="right-side-image" />
                </Col>
            </Row>
        </Container>
    );
};

export default MissionVisionSection;
