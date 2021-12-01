import React, { useState, useEffect } from 'react';
import RegistrationPageMain from '../../components/RegistrationPageMain';
import { useRouter } from 'next/router';
import Head from 'next/head';
import axiosInstance from '../../api';

const Registration = ({ serverCourse }) => {
    const route = useRouter();
    const [course, setCourse] = useState([]);
   
    useEffect(() => {
        setCourse(serverCourse);
    }, [serverCourse])

    return (
        <>
            <Head>
                <title>UGeek</title>
                <link rel="icon" type="image/svg+xml" href="/ugeek.svg" />
            </Head>
            <RegistrationPageMain
                text='We are pleased that you want to register C++ class.'
                courseImg={course.img1}
                title={course.name}
                price={course.price}
                date={route.query['open-lesson']}
                course={course}
            />
        </>
    );
};

export async function getServerSideProps({ query, locale }) {
    const response = await axiosInstance.get(`/client/course/registration/${query['course-id']}`, {
        headers: {
            'Accept-Language': locale,
        }
    });
    const { data: serverCourse } = response;

    return {
        props: {
            serverCourse
        }
    }
}

export default Registration;