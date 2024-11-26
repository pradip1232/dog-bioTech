import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/BlogSlider.css'; // Import any custom styles here

const BlogSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet & medium devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const blogPosts = [
    {
      title: 'Unlocking the hidden potential of the biological blueprint',
      description:
        'Through genetics and precision analytics, scientists aim to transform the future of animal care by creating healthier and more productive herds.',
      image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
    },
    {
      title: 'Blog 2',
      description:
        'Through genetics and precision analytics, scientists aim to transform the future of animal care by creating healthier and more productive herds.',
      image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
    },
    {
      title: 'Blog 3',
      description:
        'Through genetics and precision analytics, scientists aim to transform the future of animal care by creating healthier and more productive herds.',
      image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
    },
  ];

  return (
    <div className="container">
      <Slider {...settings}>
        {blogPosts.map((post, index) => (
          <div key={index} className="card">
            <img src={post.image} className="card-img-top" alt={post.title} />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.description}</p>
              {/* <a href="#" className="btn btn-primary">
                Read More
              </a> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogSlider;
