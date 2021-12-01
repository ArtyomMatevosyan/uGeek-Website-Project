import React, { Fragment } from 'react';
import styles from './MainTitlePart.module.css';
import Title from './Title';

const MainTitlePart = () => {
    return (
        <Fragment>
            <div className={styles.div}>
                <div className={styles.mainImg}>
                    <div className={styles.background} />
                </div>
                <div className={styles.title}>
                    <Title />
                </div>
            </div>
        </Fragment>
    )
}

export default MainTitlePart;