import Circle from '../../../ui-kit/Circle';
import styles from './AboutCourse.module.css';

const AboutCourse = () => {
    return(
        <div className={styles.aboutCourse}>
            <div className={styles.div1}>
                <Circle number='1'/>
                <p>C++ is one of the most popular programming languages in the world developed by Bjarne Stroustrup in 1979.</p>
            </div>
            <div className={styles.div2}>
                <Circle number='2'/>
                <p>C++ provides developers with a high level of control over system resources and memory.</p>
            </div>
            <div className={styles.div3}>
                <Circle number='3'/>
                <p>Today many operating systems, browsers and games use C++ as the main programming language, making C++ one of the most popular languages.</p>
            </div>
            <div className={styles.div4}>
                <Circle number='4'/>
                <p>C++ is fun and easy to learn.</p>
            </div>
        </div>
    )
}

export default AboutCourse;