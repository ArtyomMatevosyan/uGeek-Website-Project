import React from 'react';
import styles from './GoogleMap.module.css';
import useTranslation from 'next-translate/useTranslation';

const GoogleMap = () => {
    const { t } = useTranslation('common');

    return (
        <div className={styles.googleMap}>
            <h3 className={styles.title}>{t('footer.map')}</h3>
            <div className={styles.map}>
                <iframe
                    className={styles.iframe}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.881723309735!2d44.519058914754474!3d40.1894455773561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd48ef6f325f%3A0x2b5ce37cae96e378!2suGeek!5e0!3m2!1sen!2s!4v1621255347510!5m2!1sen!2s" />
            </div>
        </div>
    )
}
export default GoogleMap;