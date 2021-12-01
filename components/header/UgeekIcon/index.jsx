import React from 'react';
import Router from 'next/router';
import styles from './UgeekIcon.module.css'

const UgeekIcon = ({ iconType }) => {
    const handleClick = () => {
        Router.push('/');
    };

    return (
        <div onClick={handleClick} style={{ cursor: 'pointer' }} className={styles.icon}>
            {iconType === 'primary' ? <img src='/static/icons/ugeek1.svg' /> : <img src='/static/icons/ugeek2.svg' />}
        </div>
    )
}

export default UgeekIcon;