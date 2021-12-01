import { baseURL } from '../../constants';
import LessonInfo from '../LessonInfo';
import styles from './CoursesCard.module.css';

const CoursesCard = ({ lessonImg, lessonTitle1, lessonTitle2, info, duration, price, course, handleClick, id }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.hoverDiv}></div>
            <div className={styles.card}>
                <div className={styles.share}><img className={styles.shareImg} src='./static/icons/share.svg'></img></div>
                <div className={styles.lessonType} onClick={() => handleClick(id)}>
                    <div className={styles.lessonImg} ><img className={styles.img} src={`${baseURL}${lessonImg}`} /></div>
                </div>
                <div className={styles.arrow}></div>
                <div className={styles.title}>
                    <div className={styles.title1}>{lessonTitle1}</div>
                    <div className={styles.title2}>Development</div>
                </div>
                <div className={styles.lesson_info}>
                    <LessonInfo
                        duration={duration}
                        price={price}
                        course={course}
                    />
                </div>
                <div className={styles.year}>2021</div>
                <div className={styles.lesson_sub_info}>
                    <p>{info}</p>
                </div>
            </div>
         </div>

    )
}

export default CoursesCard;