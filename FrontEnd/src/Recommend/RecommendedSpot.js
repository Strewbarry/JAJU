import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import styles from './RecommendedSpot.module.css';  // 스타일 파일 import
import BusanImage from '../assets/Busan.png';
import YangyangImage from '../assets/Yangyang.png';
import SeoulImage from '../assets/Seoul.png';

function Slide({ images, text, onClick }) {
  return (
    <div className={styles.slideContainer} onClick={onClick}>
      {text}
      <div className={styles.imagesContainer}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={text} className={styles.slideImage} />
        ))}
      </div>
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
    { images: [BusanImage, BusanImage, BusanImage, BusanImage], text: '부산 가볼만한 곳 Top 20', link: '/busan' },
    { images: [YangyangImage, YangyangImage, YangyangImage, YangyangImage], text: '양양 가볼만한 곳 Top 20', link: '/yangyang' },
    { images: [SeoulImage, SeoulImage, SeoulImage, SeoulImage], text: '서울 가볼만한 곳 Top 20', link: '/seoul' },
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
