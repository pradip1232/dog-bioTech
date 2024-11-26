import React from 'react';
import '../css/WelcomeSection.css'; // Custom CSS for styling
import dog from '../img/1  (5).webp'; // Dog image path
import { Col, Container, Row } from 'react-bootstrap';

function WelcomeSection() {

    const products = [
        { name: 'Vaccines', icon: '💉' },
        { name: 'Hyperimmune serums', icon: '🧪' },
        { name: 'Endocrinology', icon: '👐' },
        { name: 'Medicines', icon: '💊' },
        { name: 'Diagnostic Kits', icon: '📋' },
        { name: 'Supplements', icon: '⚕️' },
    ];

    return (
        <Container fluid className="welcome-section-container my-5">
            <Row className="d-flex align-items-center justify-content-center mb-5">
                {/* Left Content and Text */}
                <Col lg={10} md={12} className="d-flex align-items-center content-section">
                    <div className="text-content">
                        <h1 className="fw-bold">WELCOME TO</h1>
                        <h2 className="fw-bold">PANAV BIO-TECH</h2>
                        <p className="text-justify">
                            The corporate ideology to construct consciousness regarding the relevance of vaccines in
                            animals' life and serve the animal race with quality vaccines at economical prices to
                            enhance their quality of life.
                            <br />
                            The ethics and beliefs such as virtuosity, eminence, fidelity, faith, and gratitude make
                            Panav Biotech a company that stands out in the veterinary world. The innovations, service
                            orientation, drive towards achieving success, and an attitude of being triumphant against
                            all odds are at the heart of Panav Bio-tech.
                        </p>
                    </div>
                </Col>

                {/* Right Side Dog Image */}
                <Col lg={2} md={12} className="position-relative">
                    <img src={dog} alt="Dog" className="dog-image" />
                </Col>
            </Row>

            {/* Products Section */}
            <Row className="text-center my-5">
                <h2 className="mb-4">OUR PRODUCTS</h2>
                {products.map((product, index) => (
                    <Col key={index} sm={12} md={4} lg={2} className="mb-4">
                        <div className="product-circle shadow-sm mx-auto">
                            <span className="product-icon">{product.icon}</span>
                        </div>
                        <p className="mt-2">{product.name}</p>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default WelcomeSection;
