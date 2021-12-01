import React from 'react';
import AboutComponent from '../../ui-kit/AboutComponent';
import MainTitlePart from '../TeachersPageMain/TeachersPageTitle';
import Teachers from '../HomePageMain/Teachers';
import AllTeachers from './AllTeachers';
import styles from './TeachersPageMain.module.css';
import TeamWork from './TeamWork';
import useTranslation from 'next-translate/useTranslation';


const TeachersPageMain = () => {
    const { t } = useTranslation('common');

    return (
        <>
            <main className={styles.main}>
                <div className={styles.title}>
                    <MainTitlePart />
                </div>
                <AboutComponent
                    title={t('teachers.subTitle')}
                    text={t('teachers.title')}
                />
                {/* <Teachers /> */}
                <TeamWork />
                <AllTeachers />
            </main>
        </>
    )
}

export default TeachersPageMain