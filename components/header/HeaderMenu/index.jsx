import Link from 'next/link';
import { useContext, useMemo } from 'react';
import Select from '../../../ui-kit/Select';
import ThingsContext from '../../../context';
import styles from './HeaderMenu.module.css';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

const HeaderMenu = ({ scroll }) => {
    const languages = useContext(ThingsContext);
    const router = useRouter();
    const { t } = useTranslation("common");

    const newLanguages = useMemo(() => {
        return languages?.languages?.map((language) => ({
            value: language.langCode,
            label: <Link href={router.asPath} locale={language.langCode}>{language.langCode.toLocaleUpperCase()}</Link>
        }))
    }, [languages]);

    return (
        <nav className={`${styles.nav}  ${scroll > 100 ? styles.sticky : ''}`}>
            <Link href='/courses'>{t("courses")}</Link>
            {/* <Link href='/students'>{t("ourStudents")}</Link> */}
            <Link href='/teachers'>{t("ourTeachers")}</Link>
            <div className={styles.select}>
                <Select options={newLanguages} value={{ value: router.locale.toLocaleUpperCase(), label: router.locale.toLocaleUpperCase() }} scroll={scroll} />
            </div>
        </nav>
    )
};

export default HeaderMenu;