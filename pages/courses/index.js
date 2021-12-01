import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CoursesPageMain from '../../components/CoursesPageMain';
import { ThingsProvider } from '../../context';
import axiosInstance from '../../api';
import withStickyHeader from '../../hocs/withStickyHeader';
import Head from 'next/head';

const Courses = ({ courses, teacher, serverLanguages, scroll, allServerCourses }) => {
    const [course, setCourse] = useState([]);
    const [teacherData, setTeacherData] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [allCourses, setAllCourses] = useState([]);

    useEffect(() => {
        setCourse(courses);
        setTeacherData(teacher);
        setLanguages(serverLanguages);
        setAllCourses(allServerCourses)
    }, [courses, teacher, serverLanguages, allServerCourses]);

    return (
        <>
            <Head>
                <title>UGeek</title>
                <link rel="icon" type="image/svg+xml" href="/ugeek.svg" />
            </Head>
            <ThingsProvider value={{ teacherData, course, languages }}>
                <Header iconType='secondary' scroll={scroll} />
                <CoursesPageMain allCourses={allCourses} />
                <Footer />
            </ThingsProvider>
        </>
    )
}



export const getStaticProps = async ({ locale }) => {
    const response = await axiosInstance.get('client/course/open-lesson/many', {
        headers: {
            'Accept-Language': locale,
        }
    });
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
    const coursesResponse = await axiosInstance.get('/client/course/many', {
        headers: {
            'Accept-Language': locale,
        }
    })

    const { data: serverLanguages } = languagesResponse;
    const { data: courses } = response;
    const { data: teacher } = teachers;
    const { data: allServerCourses } = coursesResponse;

    return {
        props: {
            courses,
            teacher,
            serverLanguages,
            allServerCourses
        }
    }
}

export default withStickyHeader(Courses);
