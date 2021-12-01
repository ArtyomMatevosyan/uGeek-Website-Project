import React, { useEffect, useRef,useState } from 'react';
import AboutComponent from '../../ui-kit/AboutComponent';
import AboutCourse from './AboutCourse';
import CourseHero from './CourseHero';
import Reviews from '../../ui-kit/Reviews'
import styles from './CoursePageMain.module.css';
import TeachersPart from './TeachersPart';
import CoursePlan from './CoursePlan';
import Summary from './Summary';

const CoursePage = (oneCourse) => {
    const coursePlanRef = useRef(null);
    const [courseName, setCourseName] = useState();

    useEffect(()=>{
        setCourseName(oneCourse)
    },[oneCourse])
    
    return (
        <main className={styles.main}>
            <div className={styles.title} ref={coursePlanRef}><CourseHero courseData={oneCourse}/></div>
            <AboutComponent
                title={`About ${oneCourse?.course?.name}`}
                text='Take your first step into the big and exciting world of programming!'
            />
            <AboutCourse />
            <Reviews
                smalltext='Recommendations and Reviews'
                bigtext='Teaching Specialist' />
            <TeachersPart />
            <AboutComponent
                title='Syllabus'
                text='Take your first step into the big and exciting world of programming!'
                coursePlanRef={coursePlanRef}
            />
            <CoursePlan coursePlanRef={coursePlanRef} />
            <Summary />
        </main>
    )
}

export default CoursePage;