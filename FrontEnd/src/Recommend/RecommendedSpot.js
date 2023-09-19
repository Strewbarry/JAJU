import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";

import BusanImage from '../assets/Busan.png';
import YangyangImage from '../assets/Yangyang.png';
import SeoulImage from '../assets/Seoul.png';

function Slide({ image, text, bgColor, onClick }) {
  return (
    <div 
      style={{ 
        background: 'linear-gradient(45deg, #9b59b6, #8e44ad)', 
        padding: '20px', 
        textAlign: 'center', 
        color: 'white' 
      }} 
      onClick={onClick}
    >
      {text}
      <img 
        src={image} 
        alt={text} 
        style={{ 
          width: '100%', 
          height: '300px', 
          objectFit: 'cover', 
          cursor: 'pointer', 
          marginBottom: '40px' 
        }} 
      />
    </div>
  );
}



function RecommendedSpot() {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const slidesData = [
    { image: BusanImage, text: '부산 가볼만한 곳 Top 20', bgColor: 'linear-gradient(45deg, #9b59b6, #8e44ad)', link: '/busan' },
    { image: YangyangImage, text: '양양 가볼만한 곳 Top 20', bgColor: 'linear-gradient(45deg, #9b59b6, #8e44ad)', link: '/yangyang' },
    { image: SeoulImage, text: '서울 가볼만한 곳 Top 20', bgColor: 'linear-gradient(45deg, #9b59b6, #8e44ad)', link: '/seoul' },
  ];
  

  return (
    <div className="RecommendedSpot">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <Slide key={index} {...slide} onClick={() => navigate(slide.link)} />
        ))}
      </Slider>
    </div>
  );
}

export default RecommendedSpot;
