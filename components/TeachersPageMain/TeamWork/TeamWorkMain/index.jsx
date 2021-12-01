import React from 'react';
import styles from './TeamWorkMain.module.css';

const TeamWorkMain = () => {
    return (
        <div className={styles.teamWorkMain}>
            <div className={styles.img}>
                <img src='./static/images/teamWork.svg' alt='teamWork.img' />
            </div>
            <div className={styles.teamWorkInfo}>
                <div className={styles.square}></div>
                <p className={styles.text}>
                    <span className={styles.span}>Teamwork</span> is our Success Formula Together with your team we create a squad that knows how to make your project the absolute champion and conquer global markets
                </p>
            </div>
        </div>
    )
}

export default TeamWorkMain;