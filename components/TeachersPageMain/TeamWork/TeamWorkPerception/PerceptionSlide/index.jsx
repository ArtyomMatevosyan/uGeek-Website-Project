import React from 'react';
import Slide from 'react-reveal/Slide';
import styles from './PerceptionSlide.module.css';


class PerceptionSlide extends React.Component {
    render() {
        return (
            <div>
                <Slide left duration={1500}>
                    <div className={styles.div}></div>
                </Slide>
            </div>
        );
    }
}

export default PerceptionSlide;