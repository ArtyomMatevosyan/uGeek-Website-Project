import React from 'react';
import Eclips from '../../Eclips';
import AboutComponent from '../../../ui-kit/AboutComponent';
import useTranslation from 'next-translate/useTranslation';
import styles from './WhyUs.module.css';

const WhyUs = () => {
    const { t } = useTranslation('common');

    return (
        <div className={styles.whyUsMainDiv}>
            <div className={styles.eclipsDiv}>
                <div className={styles.eclips}>
                    <Eclips img='/static/icons/vector_eclips.svg' />
                </div>
                <div className={styles.eclips2}>
                    <Eclips img='/static/icons/blueEclipsRight.svg' />
                </div>
            </div>
            <AboutComponent title={t('whyUs.subTitle')} text={t('whyUs.title')} />
            <div className={styles.whyus}>
                <div className={styles.readBook}>
                    <img src='/static/icons/reedBook.svg' />
                </div>
                <div className={styles.people}>
                    <img src='/static/icons/people.svg' />
                </div>
                <div className={styles.creative}>
                    <div className={styles.creativeShadow}>
                        <p>{t('whyUs.content.thirdCard.back.title')}</p>
                    </div>
                    <div className={styles.borderDiv}>
                        <div className={styles.inovation}>
                            <img src='/static/icons/innovation.svg' />
                            <p className={styles.name}>
                                {t('whyUs.content.thirdCard.front.title')}
                            </p>
                        </div>
                        <div className={styles.text}>
                            <p>
                                {t('whyUs.content.thirdCard.front.text')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.efficiency}><img src='/static/icons/efficiency.svg' /></div>
            </div>
        </div>
    )
}

export default WhyUs;