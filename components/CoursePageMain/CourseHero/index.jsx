import React from 'react';
import Router from 'next/router';
import styles from './CourseHero.module.css';
import { baseURL } from '../../../constants';
import { getLevel } from './utils'


const CourseHero = ({ courseData }) => {
    const handleChangePage = () => {
        Router.push(`/registration/`);
    }
    const { course } = courseData;
    return (
        <div className={styles.courseHero}>
            <div className={styles.imgBackground}>
                <div className={styles.background} />
            </div>
            {/* <div className={styles.courseInfo}>
                <div className={styles.mounth}>
                    <div className={styles.leftBorderDiv}></div>
                    <div className={styles.text}>mounts: {course?.duration} </div>
                </div>
                <div className={styles.price}>
                    <div className={styles.leftBorderDiv}></div>
                    <div className={styles.text}>AMD/Month: {course?.price} </div>
                </div>
                <div className={styles.course}>
                    <div className={styles.leftBorderDiv}></div>
                    <div className={styles.text}>course: <span className={styles.textSpan} > for </span> {getLevel(course)}</div>
                </div>
            </div> */}
            <div className={styles.titleDiv}>
                <div className={styles.courseImg}>
                    <img src={`${baseURL}${course?.img1}`} />
                </div>
                <div className={styles.title}>{course?.name}</div>
                <div className={styles.timeSelect}></div>
                <button className={styles.register} onClick={handleChangePage} >register now</button>
            </div>
            <div className={styles.courseInfoMedia}>
                <div className={styles.courseInfoMediaDiv}>
                    <div className={styles.mounthMedia}>
                        <div>{course?.duration}</div>
                        <p>months</p>
                    </div>
                    <div className={styles.priceMedia}>
                        <div>{course?.price}</div>
                        <p>AMD/Month:</p>
                    </div>
                    <div className={styles.courseMedia}>
                        <div>for {getLevel(course)}</div>
                        <p>course</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseHero;