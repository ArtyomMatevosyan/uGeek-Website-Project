import React, { useContext } from 'react';
import MainTitlePart from './MainTitlePart';
import CoursesSlidePart from './CoursesSlidePart';
import CoursesReviews from './CoursesReviews';
import AllCoursesCards from './AllCoursesCards';
import CoursesWhyUs from './CoursesWhyUs';
import styles from './Main.module.css';
import ThingsContext from '../../context';

const CoursesPageMain = ({ allCourses }) => {
    return (
        <main>
            <div className={styles.title}><MainTitlePart /></div>
            <CoursesSlidePart />
            <CoursesReviews />
            <AllCoursesCards allCourses={allCourses} />
            <CoursesWhyUs />
        </main>
    )
}

export default CoursesPageMain;