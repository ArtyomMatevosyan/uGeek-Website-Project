import styles from './FooterUgeekInfo.module.css';
import Contacts from './Contacts';
import OurGallery from './OurGallery';
import GoogleMap from './GoogleMap';

const FooterUgeekInfo = () => {
    return (
        <div className={styles.footherUgeekInfo}>
            <Contacts/>
            <OurGallery/>
            <GoogleMap/>
        </div>
    )
}

export default FooterUgeekInfo;