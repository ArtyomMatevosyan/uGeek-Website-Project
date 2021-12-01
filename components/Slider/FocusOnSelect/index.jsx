import React from "react";
import Slider from "react-slick";
import LessonCard from '../../HomePageMain/LessonsPart/LessonCard';

const FocusOnSelect = () => {
    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 500
    };
    
    return (
        <div>
            <Slider {...settings}>
                <LessonCard />
                <LessonCard />
                <LessonCard />
                <LessonCard />
                <LessonCard />
                <LessonCard />
                <LessonCard />
                <LessonCard />
            </Slider>
        </div>
    );
};

export default FocusOnSelect;