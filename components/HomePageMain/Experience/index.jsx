import styles from './Experience.module.css';
import Choosen from './Choosen';
import ExperiencePart from './ExperiencePart';

const Experience = () => {
    return (
        <div className={styles.experience}>
            <div className={styles.choosen}><Choosen /></div>
            <div><ExperiencePart /></div>
            <div className={styles.background}></div>
        </div>
    )
}

export default Experience