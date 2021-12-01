import React from 'react';
import AboutComponent from '../../../ui-kit/AboutComponent';
import useTranslation from 'next-translate/useTranslation';
import styles from './OurTeam.module.css';

const OurTeam = () => {
    const { t } = useTranslation('common');
 
    return (
        <div className={styles.ourTeam}>
            <AboutComponent
                title={t('teachers.subTitle')}
                text={t('teachers.title')} />
            <div className={styles.teachersDiv}>
                <div className={styles.teachersDivSquare}></div>
                <div className={styles.teacherPage}>
                    <p>
                        {t('teachers.rightPartText')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OurTeam;