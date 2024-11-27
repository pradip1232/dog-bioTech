import React from 'react'
import '../components/css/blog.css';
import ff from '../components/img/BLOG PAGE/blog hero sldider 2.png';
import { Container, Row } from 'react-bootstrap';
import mask from '../components/img/BLOG PAGE/Mask group.png';
import Slider from "react-slick";
import SixCardSlider from '../components/BlogSection/SixCardSlider';
import NumberedSlider from '../components/BlogSection/NumberedSlider';


const Blogs = () => {

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 3 cards per row
    slidesToScroll: 1, // Smooth one-by-one scroll
    rows: 2, // 2 rows
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 2, // Show 1 card per row on smaller screens
          rows: 1,
        },
      },
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 3,
          rows: 2,
        },
      },
    ],
  };

  // Sample data for cards
  const articles = [
    {
      id: 1,
      title: "Unlocking the hidden potential of the biological blueprint",
      description:
        "Through genetics and precision analytics, scientists aim to transform the future of animal care.",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URLs
    },
    // Repeat for additional articles
    { id: 2, title: "Another Article", description: "Short description", image: "https://via.placeholder.com/300x200" },
    { id: 3, title: "Third Article", description: "Short description", image: "https://via.placeholder.com/300x200" },
    { id: 4, title: "Fourth Article", description: "Short description", image: "https://via.placeholder.com/300x200" },
    { id: 5, title: "Fifth Article", description: "Short description", image: "https://via.placeholder.com/300x200" },
    { id: 6, title: "Sixth Article", description: "Short description", image: "https://via.placeholder.com/300x200" },
  ];











  return (
    <>
      <section className='section-blogs-hero-container'>
        <img src={ff} className='img-fluid w-100' />
        <div className='blog-section-hero-imagesText'>
          <div className='blog-hero-images text-center'>
            <h2>Blogs</h2>
            <hr className='hr-blog-hero' />
          </div>
        </div>

      </section>



      <section>
        <Container>
          <Row>
            <div className="col-md-6">
              <img src={mask} className='img-fluid w-100' />
            </div>
            <div className="col-md-6">
              <h2>Welcome to the Panav Biotech Blog</h2>
              <h4>Your Trusted Source for Animal Healthcare Insights.</h4>
              <p>At Panav Biotech, we are committed to improving animal health and well-being through innovative and research-driven healthcare solutions. Our blog is dedicated to providing valuable insights, updates, and expert opinions on the latest trends in animal healthcare, veterinary medicine, and product innovations. Whether you’re a veterinarian, pet owner, or livestock manager, you’ll find topics here that are both informative and impactful.</p>
              <p>Explore our latest posts and stay informed on how to ensure optimal health for your animals!</p>
            </div>
          </Row>
        </Container>
      </section>







      <section>
        <SixCardSlider />
      </section>




      <section>
        <NumberedSlider />
      </section>



    </>
  )
}

export default Blogs
