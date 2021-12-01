import styles from './BestEnvironment.module.css';
import BestEnvAnimate from './BestEnvAnimate/';

const BestEnvironment = ({ img }) => {
    return (
        <div className={styles.environmentDiv}>
            <div className={styles.bestEnvironment}>
                <div className={styles.environmentImg}>
                    <img className={styles.img} src={img} />
                </div>
                <div className={styles.titleDiv}>
                    <div className={styles.titlePart1}></div>
                    <div className={styles.title}>
                        <BestEnvAnimate />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BestEnvironment;