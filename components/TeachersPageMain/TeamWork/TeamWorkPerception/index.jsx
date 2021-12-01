import React from 'react';
import PerceptionSlide from './PerceptionSlide';
import styles from './TeamWorkPerception.module.css';

const TeamWorkPerception = () => {
    return (
        <div className={styles.main}>
            <p className={styles.text}>our perception of<span className={styles.teamWork}>TeamWork</span> </p>
            <PerceptionSlide />
        </div>
    )
}

export default TeamWorkPerception;