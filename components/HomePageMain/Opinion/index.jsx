import styles from './Opinion.module.css';
import Eclips from '../../Eclips';
import CommentSlider from '../../Slider/CommentSlider';

const Opinion = () => {
    return (
        <div className={styles.opinion}>
            <div className={styles.opinionDiv}>
                <div className={styles.eclips}><Eclips img='/static/icons/vector_eclips.svg' /></div>
                <div className={styles.eclips2}><Eclips img='/static/icons/vector_eclips.svg' /></div>
                {/* <div className={styles.circles}>
                    <div className={styles.circle}></div>
                    <div className={styles.circle2}></div>
                    <div className={styles.circle}></div>
                </div> */}
                <div className={styles.opinionSlide}>
                    <CommentSlider/>
                </div>
            </div>
            
        </div>
    )
}

export default Opinion;
