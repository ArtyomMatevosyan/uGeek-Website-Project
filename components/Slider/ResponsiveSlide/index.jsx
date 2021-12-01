import React from "react";
import Router from 'next/router';
import Slider from "react-slick";
import LessonCard from "../../HomePageMain/LessonsPart/LessonCard";
import styles from './Responsive.module.css';
import { lessons } from './constants';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Responsive = () => {
  const handleChangePage = (id) => {
    Router.push(`/courses/course/${id}`);
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {lessons.map((lesson, index) => (
          <div key={index} className={styles.sliderCard}>
            <LessonCard
              course={lesson.course}
              duration={lesson.duration}
              lessonImg={lesson.lessonImg}
              lessonTitle={lesson.lessonTitle}
              price={lesson.price}
              handleClick={handleChangePage}
              id={index + 1}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Responsive;