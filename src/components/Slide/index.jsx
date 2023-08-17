import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './slide.scss'

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className='slide'>
      <Slider {...settings}>
        <img src="./img/1.png" alt="" />
        <img src="./img/2.png" alt="" />
        <img src="./img/3.png" alt="" />
        <img src="./img/1.png" alt="" />
        <img src="./img/2.png" alt="" />
      </Slider>
    </div>
  )
}

export default Slide