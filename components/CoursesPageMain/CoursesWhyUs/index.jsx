import AboutComponent from '../../../ui-kit/AboutComponent';
import styles from './CoursesWhyUs.module.css';

const CoursesWhyUs = () => {
    return (
        <div className={styles.coursesWhyUs}>
            <AboutComponent
                title='Why Us'
                text=' Take your first step into the big and exciting world of programming!'
            />
            <div className={styles.whyus}>
                <div className={styles.firstDiv}>
                    <img src='./static/icons/problem.svg' />
                    <p className={styles.firstDivText}>Should I have particular knowledge to participate in classes?</p>
                </div>
                <div className={styles.secondDiv}>
                    <img src='./static/icons/problem2.svg' />
                    <p className={styles.secondDivText}>Do you provide us with computers?</p>
                </div>
                <div className={styles.thirdDiv}>
                    <div className={styles.borderDiv}>
                        <img src='./static/icons/innovation2.svg' />
                        <p className={styles.thirdDivText}>To participate in our courses, you don't need any professional skills, for admission you will be interviewed by our instructor.</p>
                    </div>
                </div>
                <div className={styles.fourthDiv}>
                    <img src='./static/icons/problem2.svg' />
                    <p className={styles.secondDivText}>Is it possible to get a job after graduating the course?</p>
                </div>
            </div>
        </div>
    )
}

export default CoursesWhyUs;