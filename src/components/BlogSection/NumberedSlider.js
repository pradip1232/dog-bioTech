import React from "react";
import Slider from "react-slick";
import ff from '../img/BLOG PAGE/blog img 1.png';

const NumberedSlider = () => {
    // Slick slider settings
    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Enable looping
        speed: 500, // Transition speed
        slidesToShow: 4, // Display 4 cards at a time
        slidesToScroll: 1, // Scroll one card at a time
        autoplay: true, // Enable auto-slide
        autoplaySpeed: 2000, // Time between auto-slide
        responsive: [
            {
                breakpoint: 768, // For mobile screens
                settings: {
                    slidesToShow: 1, // Show one slide at a time
                },
            },
            {
                breakpoint: 1024, // For tablet screens
                settings: {
                    slidesToShow: 2, // Show two slides at a time
                },
            },
        ],
    };

    // Array of steps (1 to 10)
    const steps = [
        { id: 1, title: "Define Blog Purpose and Target Audience" },
        { id: 2, title: "Plan the Blog Content Strategy" },
        { id: 3, title: "Write Engaging and Structured Blog Posts" },
        { id: 4, title: "Optimize for SEO and Readability" },
        { id: 5, title: "Promote Your Blog Effectively" },
        { id: 6, title: "Analyze Blog Performance" },
        { id: 7, title: "Engage with Your Audience" },
        { id: 8, title: "Update Content Regularly" },
        { id: 9, title: "Expand Your Blog’s Reach" },
        // { id: 10, title: "Monetize Your Blog Strategically" },
    ];

    return (


        <section className="number-section-blog-pages">
            {/* <img src={ff} className='img-fluid w-100' /> */}
            <div className="container number-container-slider mt-5">
                <h2 className="text-center">Some Easy Steps to Process</h2>
                <Slider {...settings}>
                    {steps.map((step, index) => (
                        <div key={step.id} className="step-wrapper">
                            <div className="step-card">
                                <div className="step-number">{`0${step.id}`}</div>
                                <h5 className="step-title">{step.title}</h5>
                                <p className="step-description">
                                    Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
                            {/* Add a horizontal line for every card except the last one */}
                            {index < steps.length  && <div className="step-line"></div>}
                        </div>
                    ))}
                </Slider>
            </div>
        </section>

    );
};

export default NumberedSlider;
