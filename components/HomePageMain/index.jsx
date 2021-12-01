import React from 'react';
import MainHeaderSlide from './MainFirstSlide';
import MainSearchPart from './MainFirstSlide/MainSearchPart';
import AboutCompany from './AboutCompany';
import WhyUs from './WhyUs';
import Lessons from './LessonsPart';
import OurTeam from './OurTeam';
import Teachers from './Teachers';
import Reviews from '../../ui-kit/Reviews';
import Opinion from './Opinion';
import Experience from './Experience'
import useTranslation from 'next-translate/useTranslation';

const HomePageMain = () => {
    const { t } = useTranslation('common');

    return (
        <main>
            <MainHeaderSlide />
            <MainSearchPart />
            <Lessons />
            <AboutCompany />
            <WhyUs />
            <Experience />
            <OurTeam />
            <Teachers />
            <Reviews
                smalltext={t('recomandations.title')}
                bigtext={t('recomandations.subTitle')} />
            <Opinion />
        </main>
    )
}

export default HomePageMain;