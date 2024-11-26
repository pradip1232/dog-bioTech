// ColdChainSection.js
import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import '../css/ColdChainSection.css'; // Optional CSS for custom styling

import coldChainImage from '../img/OUR COMPANY/our company (8).png'; // Replace with your image path

const ColdChainSection = () => {
    return (
        <Container fluid className="cold-chain-section">
            <Row className="align-items-center">
                {/* Left-side Image */}
                <Col lg={6} md={12} className="p-0">
                    <Image
                        src={coldChainImage}
                        alt="Cold Chain Management"
                        fluid
                        className="cold-chain-image"
                    />
                </Col>

                {/* Right-side Content */}
                <Col lg={6} md={12} className="content-section p-5">
                    <h2 className="title">
                        COLD CHAIN <span className="highlight">MANAGEMENT</span>
                    </h2>
                    <p className="description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <Button variant="primary" className="mt-3">
                        Know more
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ColdChainSection;
