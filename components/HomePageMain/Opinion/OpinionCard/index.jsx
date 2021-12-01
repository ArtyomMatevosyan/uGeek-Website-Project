import styles from './OpinionCard.module.css';

const OpinionCard = () => {
    return (
        <div className={styles.opinionCard}>
            <div className={styles.userDiv}>
                <div className={styles.user}>
                    <div className={styles.userImg}>
                        <img className={styles.img} src='/static/icons/avatar.png' />
                    </div>
                </div>
                <div className={styles.userName}>Firstname Lastname</div>
                <div className={styles.opinionText}>
                    <p>
                        The best educational center in Armenia.You can easily learn any language you want.
                    </p>
                </div>
                <div className={styles.stars}>
                    <img src='/static/icons/star.svg' />
                    <img src='/static/icons/star.svg' />
                    <img src='/static/icons/star.svg' />
                    <img src='/static/icons/star.svg' />
                    <img src='/static/icons/star.svg' />
                </div>
            </div>
        </div>
    )
}

export default OpinionCard;