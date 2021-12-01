import React from 'react';
import Bounce from 'react-reveal/Bounce';
import useTranslation from 'next-translate/useTranslation';
import styles from './BestEnvAnimate.module.css';

const BestEnvAnimate = () => {
    const { t } = useTranslation('common');

    return (
        <Bounce right cascade className={styles.bounce}>
            {t('aboutCompany.rightSideText.part1')}
            <span className={styles.best}>
                {t('aboutCompany.rightSideText.part2')}
            </span>
        </Bounce>
    );

}

export default BestEnvAnimate;