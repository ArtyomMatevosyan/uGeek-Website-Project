import React from 'react';
import styles from './OurGallery.module.css';
import useTranslation from 'next-translate/useTranslation';

const OurGallery = () => {
    const { t } = useTranslation('common');

    return (
        <div className={styles.ourGallery}>
            <h3 className={styles.title}>{t('footer.gallery')}</h3>
            <div className={styles.gallery}>
                <div className={styles.smallImages}>
                    <div className={styles.smallimg}><img src='/static/icons/gallerySmallImg1.jpg' /></div>
                    <div className={styles.smallimg}><img src='/static/icons/gallerySmallImg2.jpg' /></div>
                    <div className={styles.smallimg3}><img src='/static/icons/gallerySmallImg3.jpg' /></div>
                    <div className={styles.smallimg4}><img src='/static/icons/gallerySmallImg1.jpg' /></div>
                </div>
                <div className={styles.bigImg}><img src='/static/icons/galleryBigImg.jpg' /></div>
            </div>
        </div>
    )
}
export default OurGallery;