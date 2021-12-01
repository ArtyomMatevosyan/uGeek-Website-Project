import Eclips from "../../Eclips";
import LessonsSlide from "./LessonSlide";
import styles from './LessonsPart.module.css';
import AboutComponent from "../../../ui-kit/AboutComponent";
import useTranslation from 'next-translate/useTranslation';

const Lessons = () => {
    const { t } = useTranslation("common");

    return (
        <div className={styles.lessons}>
            <div className={styles.eclips}><Eclips img='/static/icons/vector_eclips.svg' /></div>
            <div className={styles.eclips2}><Eclips img='/static/icons/vector_eclips.svg' /></div>
            <AboutComponent
                title={t('upcomingLessons.subTitle')}
                text={t('upcomingLessons.title')} />
            <div className={styles.slideDiv}>
                <LessonsSlide />
                {/* <div className={styles.transparentDiv}></div> */}
            </div>
        </div>
    )
}

export default Lessons;