import React, { useState } from 'react';
import HeaderSlider from './Slide';
import SmallHeaderSlider from '../../SmallHeaderSlider';
import useTranslation from 'next-translate/useTranslation';
import styles from './MainFirstSlide.module.css';

const MainFirstSlide = () => {
    const { t } = useTranslation('common');

    return (
        <div className={styles.d}>
            <div className={styles.header_slide}>
                <div className={styles.lines}></div>
                <div className={styles.lines_text}>{t('headerSliderTransformText')}</div>
                <div className={styles.line2}></div>
            </div>
            <div className={styles.headerSlider}>
                <HeaderSlider />
            </div>

            <div className={styles.smallSilderContainer}>
                <SmallHeaderSlider />
            </div>
            <div className={styles.slideCircle}></div>
            <div className={styles.slideCircle2}></div>
            <div className={styles.slideCircle3}></div>
        </div>
    )
}

export default MainFirstSlide;