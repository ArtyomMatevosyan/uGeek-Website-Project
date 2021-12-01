import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import styles from './OurMission.module.css';

const OurMission = () => {
    const { t } = useTranslation('common');

    return (
        <div className={styles.ourMission}>
            <div className={styles.mission}>
                <p>
                    {t('aboutCompany.subTitle')}
                </p>
            </div>
            <div className={styles.square}></div>
            <div className={styles.text}>
                <p>
                {t('aboutCompany.subTitleText')}
                </p>
            </div>
        </div>
    )
}

export default OurMission;