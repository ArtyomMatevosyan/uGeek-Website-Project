import React, { useState } from 'react';
import { coursePlan } from './constants';
import styles from './CoursePlan.module.css';

const CoursePlan = ({ coursePlanRef }) => {
    const [isOpenCoursePlan, setIsOpenCoursePlan] = useState(false);
    const executeScroll = () => coursePlanRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });

    const toggleCoursePlan = () => {
        setIsOpenCoursePlan(!isOpenCoursePlan);
        if (isOpenCoursePlan === true) {
            executeScroll();
        }
    }

    return (
        <>
            <div className={!isOpenCoursePlan ? styles.coursePlan : styles.coursePlanOpen}>
                <div className={styles.coursePlanDiv}>
                    {coursePlan.map((plan, index) => {
                        return (
                            <div key={index}>
                                <h2 className={styles.phaseName}>{plan.phase}</h2>
                                {plan.phaseLessons.map((lesson, index) => <p className={styles.planText} key={index + 1}>{index + 1}. {lesson.text}</p>)}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={!isOpenCoursePlan ? styles.arrow : styles.openArrow}>
                <img src='/static/icons/coursePlanVector.svg' onClick={toggleCoursePlan} className={styles.image} />
            </div>
        </>
    )
}

export default CoursePlan;