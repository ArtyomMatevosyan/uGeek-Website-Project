import React, { Fragment } from 'react';
import styles from './TeachersPageTitle.module.css';
import Title from './TeachersTitle';

const TeachersPageTitle = () => {
    return (
        <Fragment>
            <div className={styles.div}>
                <div className={styles.mainImg}>
                    <div className={styles.background} />
                </div>
                <div className={styles.title}><Title /></div>
            </div>
        </Fragment>
    )
}

export default TeachersPageTitle;