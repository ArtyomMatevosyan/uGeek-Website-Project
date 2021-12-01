import styles from './TeacherCard.module.css';

const TeacherCard = ({ img, name, profession }) => {
    return (
        <div className={styles.teacherCard}>
            <div className={styles.img}><img src={img} alt='teacherImg' /></div>
            <div className={styles.info}>
                <div className={styles.teacherName}>{name}</div>
                <div className={styles.teacherProf}>{profession}</div>
                <div className={styles.social}>
                    <img src='/static/icons/linkedin2.svg' alt='linkedin' />
                    <img src='/static/icons/share2.svg' alt='share' />
                </div>
            </div>
        </div>
    )
}

export default TeacherCard;