import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Head from 'next/head';
import TeachersPageMain from '../../components/TeachersPageMain';
import withStickyHeader from '../../hocs/withStickyHeader';
import axiosInstance from '../../api';
import { ThingsProvider } from '../../context';



const Teachers = ({ scroll, teacher, serverLanguages }) => {
    const [teacherData, setTeacherData] = useState([]);
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        setTeacherData(teacher);
        setLanguages(serverLanguages);
    }, [teacher, serverLanguages]);
    return (
        <>
            <Head>
                <title>UGeek</title>
                <link rel="icon" type="image/svg+xml" href="/ugeek.svg" />
            </Head>
            <ThingsProvider value={{ teacherData, languages }}>
                <Header iconType='secondary' scroll={scroll} />
                <TeachersPageMain />
                <Footer />
            </ThingsProvider>

        </>
    )
}

export const getStaticProps = async ({ locale }) => {
    const teachers = await axiosInstance.get('/client/teacher/many', {
        headers: {
            'Accept-Language': locale,
        }
    });
    const languagesResponse = await axiosInstance.get('/client/language/many', {
        headers: {
            'Accept-Language': locale,
        }
    });

    const { data: serverLanguages } = languagesResponse;
    const { data: teacher } = teachers;

    return {
        props: {
            teacher,
            serverLanguages
        }
    }
}

export default withStickyHeader(Teachers)