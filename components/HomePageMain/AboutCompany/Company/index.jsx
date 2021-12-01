import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import styles from './Company.module.css';

const Company = () => {
    const { t } = useTranslation('common');

    return (
        <div className={styles.company}>
            <div className={styles.ourCompany}>
                <p>
                    {t('aboutCompany.title')}
                </p>
            </div>
            <div className={styles.square}></div>
            <div className={styles.text}>
                <p>
                    {t('aboutCompany.titleText')}
                </p>
            </div>
        </div>
    )
}

export default Company;