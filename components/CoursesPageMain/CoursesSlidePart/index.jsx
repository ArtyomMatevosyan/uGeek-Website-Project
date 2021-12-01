import Eclips from '../../Eclips';
import AboutComponent from '../../../ui-kit/AboutComponent';
import LessonSlide from '../../HomePageMain/LessonsPart/LessonSlide';
import styles from './CoursesSlidePart.module.css';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

const CoursesSlidePart = () => {
    const { t } = useTranslation('common');

    return (
        <div className={styles.div}>
            <div className={styles.mediaEclips1}>
                <Eclips img='./static/icons/vector_eclips.svg' />
            </div>
            <div className={styles.mediaEclips2}>
                <Eclips img='./static/icons/vector_eclips.svg' />
            </div>
            <div className={styles.eclips}>
                <Eclips img='./static/icons/bigblueEclips.svg' />
            </div>
            <div className={styles.eclips2}>
                <Eclips img='./static/icons/bigblueEclips.svg' />
            </div>
            <AboutComponent
                title={t('upcomingLessons.subTitle')}
                text={t('upcomingLessons.title')}
            />
            <div className={styles.slide}>
                <LessonSlide />
            </div>
        </div>
    )
}

export default CoursesSlidePart;