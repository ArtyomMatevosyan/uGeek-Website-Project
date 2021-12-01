import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import styles from './Search.module.css';

const Search = ({ scroll }) => {
    const {t} = useTranslation('common');
    return (
        <div>
            <div   className={`${styles.search}  ${scroll > 100 ? styles.stickySearch : ''}`}>
                <div className={styles.search_icon}>
                    {scroll > 100 ? <img src='/static/icons/search-black-icon.svg' /> : <img src='/static/icons/search-white-icon.svg' />}
                </div>
                <div className={styles.search_inputDiv}>
                    <input placeholder={t('search')} className={`${styles.search_input}  ${scroll > 100 ? styles.sticky : ''}`} />
                </div>

            </div>
        </div >
    )
}

export default Search;