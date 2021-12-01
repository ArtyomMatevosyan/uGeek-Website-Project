import React from 'react';
import styles from './AboutComponent.module.css';

const AboutComponent = ({ text, title, coursePlanRef }) => {
    return (
        <div className={styles.titleDiv} ref={coursePlanRef}>
            <p className={styles.titleText}>
                {text}
            </p>
            <div className={styles.title}>
                {title}
            </div>
        </div>
    )
}

export default AboutComponent;