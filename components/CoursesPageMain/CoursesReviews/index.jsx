import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import Reviews from '../../../ui-kit/Reviews';
import styles from './CoursesReviews.module.css';

const CoursesReviews = () => {
    const { t } = useTranslation('common');

    return (
        <div className={styles.reviews}>
            <Reviews
                smalltext={t("recomandations.title")}
                bigtext={t("recomandations.subTitle")}
            />
            <div className={styles.allCoursesDiv}>
                <div className={styles.coursesDivSquare}></div>
                <div className={styles.coursesPage}>
                    <p>
                       {t('allCourses')}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default CoursesReviews;