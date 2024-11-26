import React from 'react';
import mm from '../img/OUR COMPANY/our company (7).png';
import { Button, Col, Container, Row } from 'react-bootstrap';

const OurStory = () => {
    return (
        <Container className='our-story text-left'>
            <Row>
                <Col md={6} className='d-flex justify-content-center'>
                    <img src={mm} alt="Our Company" className="img-fluid" />
                </Col>
                <Col md={6} className='d-flex flex-column justify-content-center text-left'>
                    <h1>Our Story</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non risus ut ligula blandit pretium.</p>
                    <Button variant="primary">View Video</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default OurStory;
