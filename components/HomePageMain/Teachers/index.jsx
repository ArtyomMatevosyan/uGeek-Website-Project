import React, { useState, useContext } from 'react';
import Eclips from '../../Eclips';
import TeachersSlider from '../../TeachersSlider';
import ThingsContext from "../../../context";
import styles from './Teachers.module.css';

const Teachers = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const data = useContext(ThingsContext);
    const teacherData = data.teacherData;

    const goToSlide = (index) => {
        let nextIndex;

        if (index < 0 || index > teacherData.length - 1) {
            nextIndex = 0;
        } else {
            nextIndex = index
        }

        if (index < 0) {
            nextIndex = teacherData.length - 1;
        }

        setCurrentIndex(nextIndex);
    }

    const goToNextSlide = () => {
        goToSlide(currentIndex + 1);
    }

    const goToPrevSlide = () => {
        goToSlide(currentIndex - 1);
    }

    return (
        <div className={styles.teacherComponent}>
            <div className={styles.eclips1}><Eclips img='/static/icons/vector_eclips.svg' /></div>
            <div className={styles.eclips2}><Eclips img='/static/icons/blueEclipsRight.svg' /></div>
            <div className={styles.teachers}>
                <TeachersSlider goToNextSlide={goToNextSlide} goToPrevSlide={goToPrevSlide} currentIndex={currentIndex} />
                <div className={styles.teachersInfo}>
                    <div className={styles.teacherName}>{teacherData[currentIndex]?.firstName} {teacherData[currentIndex]?.lastName} </div>
                    <div className={styles.profession}>{teacherData[currentIndex]?.position}</div>
                    <div className={styles.about}>
                        <div className={styles.aboutDiv}>
                            <div className={styles.aboutDivTitle}>
                                <div className={styles.circle}></div>
                                <div className={styles.title}>About</div>
                            </div>
                            <div className={styles.text}>
                                <p>
                                    {/* { teacherData[currentIndex]?.description} */}
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempore velit dicta, et illum, praesentium placeat ducimus, quam Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas accusantium rem tempore. Dolor eos facilis quo quia quis adipisci odio similique ipsa fugit magnam repudiandae aliquid, molestias culpa harum. Perferendis. porro iure quia tempora officiis minima id molestiae blanditiis! Animi, ipsa officiis!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.social}>
                        <a href={teacherData[currentIndex]?.socialLink}><img src='/static/icons/linkedinTeachers.svg' /></a>
                        <a><img src='/static/icons/shareTeachers.svg' /></a>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Teachers;