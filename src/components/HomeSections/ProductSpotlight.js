// ProductSpotlight.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import firstImage from "../img/HOMEPAGE/webp/Acepron Injcetion 1.webp"; // Replace with your image paths
import '../css/ProductSpotlight.css';

const ProductSpotlight = () => {
    return (
        <Container fluid className="product-spotlight mt-5">
            <Row className="align-items-center">
                {/* Left Column - Products */}
                <Col xs={12} md={6} className="product-section">
                    <div className="product-images">
                        <img src={firstImage} alt="Product 1" className="product-img" />
                        <img src={firstImage} alt="Product 2" className="product-img" />
                        <img src={firstImage} alt="Product 3" className="product-img" />
                    </div>
                    <div className="product-description">
                        <h5>Dog</h5>
                        <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </Col>

                {/* Right Column - Spotlight */}
                <Col xs={12} md={6} className="spotlight-section text-white d-flex align-items-center">
                    <div>
                        <h2 className="spotlight-title">PRODUCT SPOTLIGHT</h2>
                        <p>
                            Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <Button variant="light">See more</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductSpotlight;
