import React, { useState } from 'react';
import { Carousel, Card, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handleNext = () => {
        if (currentIndex < 3) { // Max index to show the last set of 3 cards
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div>
            <Carousel controls={false} interval={null}>
                <Carousel.Item>
                    <Row>
                        <Col md={4} class>
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                                <Card.Body>
                                    <Card.Title>Card 1</Card.Title>
                                    <Card.Text>This is card 1</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                                <Card.Body>
                                    <Card.Title>Card 2</Card.Title>
                                    <Card.Text>This is card 2</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                                <Card.Body>
                                    <Card.Title>Card 3</Card.Title>
                                    <Card.Text>This is card 3</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                                <Card.Body>
                                    <Card.Title>Card 4</Card.Title>
                                    <Card.Text>This is card 4</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                                <Card.Body>
                                    <Card.Title>Card 5</Card.Title>
                                    <Card.Text>This is card 5</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                                <Card.Body>
                                    <Card.Title>Card 6</Card.Title>
                                    <Card.Text>This is card 6</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
            <div className="d-flex justify-content-between mt-2">
                <Button variant="primary" onClick={handlePrev} disabled={currentIndex === 0}>
                    Previous
                </Button>
                <Button variant="primary" onClick={handleNext} disabled={currentIndex >= 3}>
                    Next
                </Button>
            </div>
        </div>
    );
};

export default CardCarousel;
