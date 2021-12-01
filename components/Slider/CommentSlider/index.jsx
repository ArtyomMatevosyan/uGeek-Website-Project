import { useState } from 'react'
import React from "react";
import Slider from "react-slick";
import OpinionCard from '../../HomePageMain/Opinion/OpinionCard';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import styles from './CommentSlide.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [<OpinionCard />, <OpinionCard />, <OpinionCard />, <OpinionCard />]

const CommentSlider = () => {
  const [cardIndex, setCardIndex] = useState(0);

  const NextArrow = ({ onClick }) => {
    return (
      <div className={styles.arrowNext} onClick={onClick}>
        <FaArrowRight />
      </div>
    )
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className={styles.arrowPrev} onClick={onClick}>
        <FaArrowLeft />
      </div>
    )
  };
  
  const settings = {
    infinite: true,
    lazyload: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCardIndex(next)
  }

  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {cards.map((card, idx) => (
          <div key={idx} className={idx === cardIndex ? `${styles.slideactiveSlide}` : `${styles.slide}`}>
            <div>{card}</div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CommentSlider;