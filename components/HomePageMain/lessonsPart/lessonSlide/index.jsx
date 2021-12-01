import styles from './LessonSlide.module.css';
import Responsive from '../../../Slider/CardsSlider';

const LessonSlide = ({ course }) => {
    return (
        <div className={styles.lessonSlide} >
            <div className={styles.shadowDIv}></div>
            <Responsive course={course} />
        </div>
    )
}

export default LessonSlide;