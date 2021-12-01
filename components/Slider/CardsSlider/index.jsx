import React, { useContext, useState, useEffect } from "react";
import Router from 'next/router';
import LessonCard from '../../HomePageMain/LessonsPart/LessonCard';
import styles from './CardsSlider.module.css';
import ScrollContainer from 'react-indiana-drag-scroll';
import ThingsContext from "../../../context";
import { baseURL } from '../../../constants';
import useTranslation from "next-translate/useTranslation";

const Responsive = () => {
    const handleChangePage = (id) => {
        Router.push(`/courses/course/${id}`);
    }
    const { t } = useTranslation("common");

    const data = useContext(ThingsContext);
    const courses = data.course;

    return (
        <div className={styles.scroll_wrapper}>
            <ScrollContainer className={styles.scroll_container} hideScrollbars={false}>
                {courses?.map((course, index) => (
                    <div key={index} className={styles.sliderCard}>
                        <LessonCard
                            course={`${course.level === 0 ? t('lessonCard.level.begginer') : course.level === 1 ? t('lessonCard.level.middle') : t('lessonCard.level.senior')}`}
                            duration={course.duration}
                            lessonImg={`${baseURL}${course.img1}`}
                            lessonTitle={course.name}
                            price={course.price}
                            handleClick={handleChangePage}
                            id={course.id}
                            openLessons={course.openLesson}
                        />
                    </div>
                ))}
            </ScrollContainer>
        </div>
    );
}

export default Responsive