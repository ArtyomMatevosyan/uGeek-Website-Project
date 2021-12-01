import React from 'react';
import styles from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={styles.info}>
            <div className={styles.phone}>
                <img src='/static/icons/phone.svg' />
                <a href="tel:+37444000804">+37444000804</a>
            </div>
            <div className={styles.mail}>
                <img src='/static/icons/mail.svg' />
                <a href="mailto:ugeek.education@gmail.com">ugeek.education@gmail.com</a>
            </div>
            <div className={styles.time}>
                <img src='/static/icons/time.svg' />
                <p>10:00-22:00</p>
            </div>
        </div>
    )
}

export default Contacts;