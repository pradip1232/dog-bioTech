import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'; // Helps with React Router Links
import './css/navbar.css';
function NavbarComponent() {
    return (
        <>
            {/* Upper Info Strip */}
            <div
                className="container-fluid upperStrip d-flex align-items-center"

            >
                <div className="row w-100">
                    {/* Left Side: Email and Phone Number */}
                    <div className="col-md-6 d-flex align-items-center">
                        <p className="mb-0 me-3" style={{ fontSize: '14px' }}>info@panavbiotech.com</p>
                        <p className="mb-0" style={{ fontSize: '14px' }}>011-47563428</p>
                    </div>

                    {/* Right Side: Social Media Icons */}
                    <div className="col-md-6 d-flex justify-content-end align-items-center">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white me-2"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white me-2"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>


            {/* Navbar Section */}
            <Navbar className='navbar-cutom'
                bg="white"
                variant="light"
                expand="lg"
                sticky="top"
               
            >
                <Container>
                    {/* Brand Logo */}
                    <Navbar.Brand href="/">
                        <img
                            src="https://via.placeholder.com/50" // Replace with actual logo path
                            alt="Panav Biotech Logo"
                            className="d-inline-block align-top custom-loggo"
                           
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav" className='navbar-nav-links'>
                        <Nav className="ms-auto">
                            {/* Navigation Links */}
                            <LinkContainer to="/">
                                <Nav.Link className='navLink-custom'>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/company">
                                <Nav.Link className='navLink-custom'>Our Company</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/products">
                                <Nav.Link className='navLink-custom'>Products</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/blogs">
                                <Nav.Link className='navLink-custom'>Blogs</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/events">
                                <Nav.Link className='navLink-custom'>Events</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Link className='navLink-custom'>Contact Us</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/research">
                                <Nav.Link className='navLink-custom'>Research & Innovation</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;
