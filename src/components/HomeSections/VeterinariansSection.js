import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/VeterinariansSection.css'; // Import custom CSS

// Import images directly
import Group261 from '../img/HOMEPAGE/webp/Group 261.webp';
import Group262 from '../img/HOMEPAGE/webp/Group 262.webp';
import Group263 from '../img/HOMEPAGE/webp/Group 263.webp';

// Sample data for divisions
const divisions = [
    {
        name: 'ORION DIVISON',
        description: 'Biological & Diagnostics',
        image: Group261, // Directly use imported image
    },
    {
        name: 'REGAL DIVISON',
        description: 'Innovative Therapeutic Solutions',
        image: Group262, // Directly use imported image
    },
    {
        name: 'IRIS DIVISON',
        description: 'Global Nutraceuticals',
        image: Group263, // Directly use imported image
    },
];

function VeterinariansSection() {
    return (
        <section className="veterinarians-section">
            <Container className="text-center">
                <h2 className="section-title">
                    Sold exclusively through <span className="highlight">VETERINARIANS</span>
                </h2>
                <p className="section-description">
                    The corporate ideology to construct consciousness regarding the relevance of animal health products in their life and serve the animal race with quality products at affordable prices to enhance their quality of life. The ethics and beliefs such as virtuosity, eminence, fidelity, faith and gratitude make Panav Biotech a company that stands out in the veterinary world.
                </p>

                <Row>
                    {divisions.map((division, index) => (
                        <Col key={index} sm={12} md={4} className="mb-4">
                            <div className="division-card shadow-sm">
                                <div
                                    className="division-image"
                                    style={{ backgroundImage: `url(${division.image})` }}
                                ></div>
                                <div className="division-content">
                                    <h3>{division.name}</h3>
                                    <p>{division.description}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default VeterinariansSection;
