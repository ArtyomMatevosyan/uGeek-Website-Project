import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CoursePage from '../../../components/CoursePageMain';
import { ThingsProvider } from '../../../context';
import axiosInstance from '../../../api';
import withStickyHeader from '../../../hocs/withStickyHeader';
import Head from 'next/head';

const Course = ({ courses, teacher, serverLanguages, oneCourseInfo, scroll }) => {
    const router = useRouter()
    const [course, setCourse] = useState([]);
    const [teacherData, setTeacherData] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [courseInfo, setCourseInfo] = useState([]);

    const urlId = router.query.id;
    const oneCourse = courses?.find(({ id }) => id === parseInt(urlId));
    
    useEffect(() => {
        setCourse(courses);
        setTeacherData(teacher);
        setLanguages(serverLanguages);
        setCourseInfo(oneCourseInfo)
    }, [courses, teacher, serverLanguages, oneCourseInfo])
    return (
        <ThingsProvider value={{ teacherData, course, languages }}>
            <Head>
                <title>UGeek</title>
                <link rel="icon" type="image/svg+xml" href="/ugeek.svg" />
            </Head>
            <Header scroll={scroll} iconType='secondary' />
            <CoursePage course={oneCourse} />
            <Footer />
        </ThingsProvider>
    )
}

export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'second-post' } },
        ],
        fallback: true,
    }
}

export const getStaticProps = async () => {
    const response = await axiosInstance.get('client/course/many');
    const teachers = await axiosInstance.get('/client/teacher/many');
    const courseInfoResponse = await axiosInstance.get('/client/course/one/1')
    const languagesResponse = await axiosInstance.get('/client/language/many');

    const { data: serverLanguages } = languagesResponse;
    const { data: courses } = response;
    const { data: teacher } = teachers;
    const { data: oneCourseInfo } = courseInfoResponse

    return {
        props: {
            courses,
            teacher,
            oneCourseInfo,
            serverLanguages
        }
    }
}

export default withStickyHeader(Course);
