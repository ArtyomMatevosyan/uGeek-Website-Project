import React from 'react';
import styles from './Footer.module.css';
import UgeekIcon from '../Header/UgeekIcon';
import FollowUs from './FollowUs';
import FooterUgeekInfo from './FooterUgeekInfo';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.upperPart}>
                <div className={styles.icon}><UgeekIcon iconType="primary"/></div>
                <FollowUs />
            </div>
            <FooterUgeekInfo />
            <div className={styles.endPart}>
                <p className={styles.year}>© 2021 |</p>
            </div>
        </footer>
    )
}

export default Footer;