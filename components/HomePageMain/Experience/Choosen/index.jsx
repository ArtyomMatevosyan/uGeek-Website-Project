import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import styles from './Choosen.module.css';

const Choosen = () => {
    const { t } = useTranslation('common');

    return (
        <div className={styles.choosen}>
            <p className={styles.text}>
                {t('experience.choosenPart.title')}
            </p>
        </div>
    )
}

export default Choosen;