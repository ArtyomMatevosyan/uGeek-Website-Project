import Company from './Company';
import OurMission from './OurMission';
import BestEnvironment from './BestEnvironment';
import Eclips from '../../Eclips';
import styles from './AboutCompany.module.css';

const AboutCompany = () => {
    return (
        <div className={styles.aboutCompany}>
            <div className={styles.eclips}>
                <Eclips img='/static/icons/bigYellowRightEclips.svg' />
            </div>
            <div className={styles.eclips2}>
                <Eclips img='/static/icons/bigblueEclips.svg' />
            </div>
            <div className={styles.company}>
                <div>
                    <Company />
                    <div className={styles.mission}>
                        <OurMission />
                    </div>
                </div>
                <div className={styles.environment}>
                    <BestEnvironment img='/static/icons/environment.png' />
                </div>
            </div>
        </div>
    )
}

export default AboutCompany;