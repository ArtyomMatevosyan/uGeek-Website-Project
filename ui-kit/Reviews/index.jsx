import styles from './Reviews.module.css';
import ReviewsSlide from './ReviewsSlide';

const Reviews = ({ smalltext, bigtext }) => {
    return (
        <div className={styles.reviews}>
            <p className={styles.smalltext}>{smalltext}</p>
            <p className={styles.bigtext}>{bigtext}</p>
            <ReviewsSlide />
        </div>
    )
}

export default Reviews;