import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../css/AboutUsSection.css'; // Custom CSS for the section
// import bgImage from '../img/HOMEPAGE/webp/scientffic bg 1.webp'; // Background image path for the section
import
bg from "../img/HOMEPAGE/webp/scientffic bg 1.webp";
function AboutUsSection() {
    const cards = [
        {
            title: "LONGEST LASTING",
            text: "12 weeks of continuous flea and tick protection—nearly 5X longer than any other chew—means fewer chances to forget a treatment.",
            icon: "💧",
        },
        {
            title: "EFFECTIVE",
            text: "FDA approved and proven effective for both dogs and cats for 12 weeks.",
            icon: "⚕️",
        },
        {
            title: "WORK FAST",
            text: "Starts killing fleas and ticks within hours.",
            icon: "⚡",
        },
        {
            title: "CONVENIENT",
            text: "Ease and convenience of long-lasting protection means less worry.",
            icon: "⌛",
        }
    ];

    return (
        <Container fluid className="about-us-section py-5">

            <Container>
                <Row className="justify-content-center mb-4">
                    <Col xs={12} className="text-center">
                        <h2 className="section-title">ABOUT US</h2>
                        <p className="section-description">
                            The corporate ideology to construct consciousness regarding the relevance of vaccines in animals' life and serve the animal race with quality vaccines at economical prices to enhance their quality of life.
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    {cards.map((card, index) => (
                        <Col key={index} lg={3} md={6} sm={12} className="mb-4">
                            <div className="info-card text-center p-4 shadow">
                                <div className="card-icon mb-3">{card.icon}</div>
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.text}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
}

export default AboutUsSection;
