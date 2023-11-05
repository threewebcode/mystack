import React from 'react';
import Slider from 'react-slick';
import './ImageSlider.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slideWrapper">
      <Slider {...settings}>
        <div className="slide">
          <h3>Slide 1</h3>
        </div>
        <div className="slide">
          <h3>Slide 2</h3>
        </div>
        <div className="slide">
          <h3>Slide 3</h3>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
