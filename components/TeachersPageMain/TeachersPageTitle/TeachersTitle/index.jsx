import React from 'react';
import styles from './TeachersTitle.module.css';
import useTranslation from 'next-translate/useTranslation';

const Title = () => {
    const { t } = useTranslation('teachers');

    return (
        <div className={styles.mainTitle}>
            <div className={styles.title}>{t('firstPart.title')}</div>
            <div className={styles.text}>
                <p>
                    {t('firstPart.subTitle')}
                </p>
            </div>
        </div>
    )
}

export default Title;