import HeaderMenu from '../Header/HeaderMenu';
import Search from '../Header/Search';
import UgeekIcon from '../Header/UgeekIcon';
import styles from './HeaderLayout.module.css';

const HeaderLayout = ({ scroll, iconType }) => {

    return (
        <div className={styles.headerlayout}>
            <div className={styles.layoutDiv}>
                <UgeekIcon iconType={iconType} />
                <HeaderMenu scroll={scroll} />
                <Search scroll={scroll} />
            </div>
        </div>
    )
}

export default HeaderLayout;