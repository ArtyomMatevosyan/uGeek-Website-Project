import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import styles from './ExperiencePart.module.css';

const ExperiencePart = () => {
    const { t } = useTranslation('common');

    return (
        <>
            <div className={styles.experiencePart}>
                <div className={styles.experiencies}>
                    <div className={styles.year}>
                        <div className={styles.img}><img src='/static/icons/calendar.svg' /></div>
                        <div className={styles.experienceP}>
                            <p className={styles.number}>3+</p>
                            <p className={styles.text}>{t('experience.experiencePart.first')}</p>
                        </div>
                    </div>
                    <div className={styles.lessons}>
                        <div className={styles.img}><img src='/static/icons/lesson.svg' /></div>
                        <div className={styles.experienceP}>
                            <div className={styles.lessonNumberDiv}>
                                <p className={styles.number}>
                                    30,000+
                                </p>
                            </div>
                            <p className={styles.text} >
                                {t('experience.experiencePart.second.part1')}
                                {" "}
                                <span className={styles.oneText}>
                                    {t('experience.experiencePart.second.part2')}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.graduates}>
                        <div className={styles.img}>
                            <img src='/static/icons/graduation-cap2.svg' />
                        </div>
                        <div className={styles.experienceP}>
                            <p className={styles.number}>2000+</p>
                            <p className={styles.text}>{t('experience.experiencePart.third')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExperiencePart;