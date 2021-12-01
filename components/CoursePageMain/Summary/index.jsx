import React from 'react';
import withStickyHeader from '../../../hocs/withStickyHeader';
import styles from './Summary.module.css';
import TitleAnimate from './TitleAnimate';


const Summary = ({ scroll }) => {
    return (
        <div className={styles.summary}>
            {/* <div className={scroll >= 1950 ? `${styles.title} ${styles.title_animated}` : styles.title}>By the end of this course you will be able to</div> */}
           <TitleAnimate/>
            <div className={styles.information}>
                <div className={styles.bgDiv} />
                <div className={styles.info}>
                    <div className={scroll >= 2200 ? `${styles.div1} ${styles.div1_animated}` : styles.div1}>
                        <p className={styles.text}>The duration of C++ course is 3 months, 3 courses a week, each lasts 2 hours.</p>
                        <div className={styles.square} />
                    </div>
                    <div className={scroll >= 2300 ? `${styles.div2} ${styles.div2_animated}` : styles.div2}>
                        <p className={styles.text}>The participants should spend at least 4 hours a day on assignments.</p>
                        <div className={styles.square}></div>
                    </div>
                    <div className={scroll >= 2500 ? `${styles.div3} ${styles.div3_animated}` : styles.div3}>
                        <p className={styles.text}>The first lesson of the course is introductory and experimental course.</p>
                        <div className={styles.square}></div>
                    </div>
                    <div className={scroll >= 2700 ? `${styles.div4} ${styles.div4_animated}` : styles.div4}>
                        <p className={styles.text}>If you have mastered any of these stages, you can participate in the training bypassing that stage by taking the final stage test in advance.</p>
                        <div className={styles.square}></div>
                    </div>
                    <div className={scroll >= 2200 ? `${styles.div5} ${styles.div5_animated}` : styles.div5}>
                        <p className={styles.text2}>If you have mastered any of these stages, you can participate in the training bypassing that stage by taking the final stage test in advance.</p>
                        <div className={styles.square2}></div>
                    </div>
                    <div className={scroll >= 2300 ? `${styles.div6} ${styles.div6_animated}` : styles.div6} >
                        <p className={styles.text2}>At the end of each phase the participants need to pass an exam, only in case of success they are allowed to take part in the next phase. In case of failure the participants have the chance to pass the same phase once again with 50% discount.</p>
                        <div className={styles.square2}></div>
                    </div>
                    <div className={scroll >= 2500 ? `${styles.div7} ${styles.div7_animated}` : styles.div7}>
                        <p className={styles.text2}>The best test taker will receive a 20% discount for the next phase ․ (Discount is not valid for the participants who already attend with a discount card).</p>
                        <div className={styles.square2}></div>
                    </div>
                    <div className={scroll >= 2700 ? `${styles.div8} ${styles.div8_animated}` : styles.div8}>
                        <p className={styles.text2}>Individual-based courses are also being held, for which your investment is 60.000 AMD per month.</p>
                        <div className={styles.square2}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withStickyHeader(Summary);