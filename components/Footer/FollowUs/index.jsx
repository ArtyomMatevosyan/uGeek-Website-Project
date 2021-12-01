import React from 'react';
import styles from './FollowUs.module.css';
import useTranslation from 'next-translate/useTranslation';

const FollowUs = () => {
    const { t } = useTranslation('common');

    return (
        <div className={styles.followUs}>
            <div className={styles.follow}>{t('footer.followUs')}</div>
            <a href='https://www.facebook.com/'><img className={styles.img} src='/static/icons/facebook.svg' /></a>
            <a href='https://www.instagram.com/'><img src='/static/icons/instagram1.svg' /></a>
            <a href='https://www.linkedin.com/'><img src='/static/icons/linkedin.svg' /></a>
        </div>
    )
}

export default FollowUs;