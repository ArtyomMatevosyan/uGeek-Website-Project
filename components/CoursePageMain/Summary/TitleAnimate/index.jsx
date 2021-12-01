import React from 'react';
import Bounce from 'react-reveal/Bounce';
import styles from './TitleAnimate.module.css'

class TitleAnimate extends React.Component {
    render() {
        return (
            <div>
                <Bounce bottom>
                    <div className={styles.title}>By the end of this course you will be able to</div>
                </Bounce>
            </div>
        );
    }
}

export default TitleAnimate;