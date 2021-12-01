import React from 'react';
import Slide from 'react-reveal/Slide';
import styles from './ReviewsSlide.module.css';


class ReviewsSlide extends React.Component {
    render() {
        return (
            <div>
                <Slide left duration={1500}>
                    <div className={styles.orangeDiv}></div>
                </Slide>
            </div>
        );
    }
}

export default ReviewsSlide;