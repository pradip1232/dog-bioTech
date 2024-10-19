import { Carousel } from 'react-bootstrap';
import dog from '../img/dog.jpg'; // Replace with your actual image path
import '../css/CarouselComponent.css'; // Import the CSS

function CarouselComponent() {
    return (
        <Carousel interval={3000} fade={true} pause="hover" indicators={true}>
            {/* Slide 1 */}
            <Carousel.Item style={{ height: '100vh', position: 'relative' }}>
                <div
                    style={{
                        backgroundImage: `linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%), url(${dog})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        width: '100%',
                    }}
                ></div>
                <Carousel.Caption className="text-start" style={{ left: '10%' }}>
                    <h2 className="fw-bold">Pioneering Healthcare Innovation</h2>
                    <p>
                        As a leader in the Indian healthcare industry, <strong>PANAV BIO TECH</strong> is dedicated to
                        pushing the boundaries of medical science.
                    </p>
                    <hr style={{ width: '60px', height: '3px', backgroundColor: '#fff', border: 'none' }} />
                </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item style={{ height: '100vh', position: 'relative' }}>
                <div
                    style={{
                        backgroundImage: `linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%), url(${dog})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        width: '100%',
                    }}
                ></div>
                <Carousel.Caption className="text-start" style={{ left: '10%' }}>
                    <h2 className="fw-bold">Transforming Wellness Landscape</h2>
                    <p>
                        Our cutting-edge research and innovative products are redefining health and wellness.
                    </p>
                    <hr style={{ width: '60px', height: '3px', backgroundColor: '#fff', border: 'none' }} />
                </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item style={{ height: '100vh', position: 'relative' }}>
                <div
                    style={{
                        backgroundImage: `linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%), url(${dog})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        width: '100%',
                    }}
                ></div>
                <Carousel.Caption className="text-start" style={{ left: '10%' }}>
                    <h2 className="fw-bold">Driven by Innovation</h2>
                    <p>
                        Experience the future of healthcare with our relentless focus on quality and research.
                    </p>
                    <hr style={{ width: '60px', height: '3px', backgroundColor: '#fff', border: 'none' }} />
                </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 4 */}
            <Carousel.Item style={{ height: '100vh', position: 'relative' }}>
                <div
                    style={{
                        backgroundImage: `linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%), url(${dog})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        width: '100%',
                    }}
                ></div>
                <Carousel.Caption className="text-start" style={{ left: '10%' }}>
                    <h2 className="fw-bold">Empowering Lives</h2>
                    <p>
                        We are committed to making a difference in the lives of individuals worldwide.
                    </p>
                    <hr style={{ width: '60px', height: '3px', backgroundColor: '#fff', border: 'none' }} />
                </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 5 */}
            <Carousel.Item style={{ height: '100vh', position: 'relative' }}>
                <div
                    style={{
                        backgroundImage: `linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%), url(${dog})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        width: '100%',
                    }}
                ></div>
                <Carousel.Caption className="text-start" style={{ left: '10%' }}>
                    <h2 className="fw-bold">Innovating for Tomorrow</h2>
                    <p>Join us on our journey towards a healthier and better future.</p>
                    <hr style={{ width: '60px', height: '3px', backgroundColor: '#fff', border: 'none' }} />
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;
