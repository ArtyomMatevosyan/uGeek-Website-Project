import HeaderLayout from '../HeaderLayout';
import styles from './Header.module.css';
import { useMedia } from '../../hooks/useMedia';
import HeaderMenu from './HeaderMenu';
import UgeekIcon from './UgeekIcon';
import { useState } from 'react';


const Header = ({ scroll, iconType }) => {

    const isMobile = useMedia('(max-width: 960px)');
    const [isOpenBurger, setIsOpenBurger] = useState(false);

    const handleOpenBurger = () => {
        setIsOpenBurger(!isOpenBurger);
    }


    return isMobile ? (
        <header className={styles.headerMobile}>
            <button className={styles.burger} onClick={handleOpenBurger}>
                <span className={styles.burger_line}></span>
                <span className={styles.burger_line}></span>
                <span className={styles.burger_line}></span>
            </button>
            <UgeekIcon iconType='primary' />
            <div className={isOpenBurger ? `${styles.burgerMenu}` : `${styles.burgerMenu} ${styles.burgerMenuClosed}`}>
                <HeaderMenu />
            </div>
        </header>
    ) : (
        <header className={`${styles.header}  ${scroll > 100 ? styles.sticky : ''}`}>
            <div className={styles.header_div}>
                <HeaderLayout scroll={scroll} iconType={iconType} />
            </div>
        </header>
    )
}

export default Header;