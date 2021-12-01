import styles from './LessonInfo.module.css';

const LessonInfo = ({duration, price, course}) => {
    return (
        <div className={styles.lesson_info}>
            <div className={styles.lesson_duration}>
                <div className={styles.durationImg}><img src='./static/icons/lessonDuration2.svg' /></div>
                <div className={styles.lesson_durationText}>Duration: {duration} Months</div>
            </div>
            <div className={styles.lesson_price}>
                <div className={styles.wallet}><img src='./static/icons/wallet.svg' /></div>
                <div className={styles.price}>Price: {price} AMD/Month</div>
            </div>
            <div className={styles.lesson_type}>
                <div className={styles.typeImg}><img src='./static/icons/graduation-cap.svg' /></div>
                <div className={styles.course}>Сourse for {course}</div>
            </div>
        </div>
    )
}

export default LessonInfo