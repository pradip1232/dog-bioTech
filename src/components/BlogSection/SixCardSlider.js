import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SixCardSlider = () => {
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
          slidesToShow: 1, // Show 1 card per row on smaller screens
          rows: 1,
        },
      },
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
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
    <div className="container mt-5">
      <h2 className="text-center">Latest Articles</h2>
      <Slider {...settings}>
        {articles.map((article) => (
          <div key={article.id} className="card-container">
            <div className="card">
              <img src={article.image} className="card-img-top" alt={article.title} />
              <div className="card-body">
                <span className="badge bg-primary">Blog</span>
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <button className="btn btn-primary">Read more</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SixCardSlider;
