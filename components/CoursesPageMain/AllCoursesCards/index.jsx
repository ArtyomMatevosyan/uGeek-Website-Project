import React, {useState} from 'react';
import Eclips from '../../Eclips';
import CoursesCard from '../../../ui-kit/CoursesCard';
import Router from 'next/router';
import styles from './AllCoursesCards.module.css';

const AllCoursesCards = ({ allCourses }) => {
    const handleChangePage = (id) => {
        Router.push(`/courses/course/${id}`);
    }
    const [isOpenCardsDiv, setIsOpenCardsDiv] = useState(false);
    const toggleCardsPlan = () => {
        setIsOpenCardsDiv(!isOpenCardsDiv);
    }

    return (
        <div className={styles.allCards}>
            <div className={styles.eclips}><Eclips img='./static/icons/vector_eclips.svg' /></div>
            <div className={styles.eclips2}><Eclips img='./static/icons/blueEclipsRight.svg' /></div>
            <div className={!isOpenCardsDiv ? styles.cardsDiv : styles.cardsDivOpen}>
                <div className={styles.cards}>
                    {allCourses.map((lesson, index) => (
                        <div key={index}>
                            <CoursesCard
                                course={lesson.name}
                                duration={lesson.duration}
                                lessonImg={lesson.img1}
                                lessonTitle1={lesson.lessonTitle1}
                                lessonTitle2={lesson.lessonTitle2}
                                price={lesson.price}
                                info={lesson.firstDesc}
                                handleClick={handleChangePage}
                                id={index + 1}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className={!isOpenCardsDiv ? styles.arrow : styles.openArrow}>
                <img src='/static/icons/coursePlanVector.svg' onClick={toggleCardsPlan} className={styles.image} />
            </div>

            <div className={styles.eclips3}><Eclips img='./static/icons/bigYellowRightEclips.svg' /></div>
            <div className={styles.eclips4}><Eclips img='./static/icons/bigYellowRightEclips.svg' /></div>
        </div>
    )
}
export default AllCoursesCards;