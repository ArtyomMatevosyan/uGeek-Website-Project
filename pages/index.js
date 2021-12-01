import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import HomePageMain from '../components/HomePageMain';
import Footer from '../components/Footer';
import withStickyHeader from '../hocs/withStickyHeader';
import axiosInstance from '../api';
import { ThingsProvider } from '../context';
import Head from 'next/head';

const Home = ({ courses, teacher, serverLanguages, scroll }) => {
  const [course, setCourse] = useState([]);
  const [teacherData, setTeacherData] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    setCourse(courses);
    setTeacherData(teacher);
    setLanguages(serverLanguages);
  }, [courses, teacher, serverLanguages]);

  return (
    <>
      <ThingsProvider value={{ teacherData, course, languages }} >
        <Head>
          <title>UGeek</title>
          <link rel="icon" type="image/svg+xml" href="/ugeek.svg" />
        </Head>
        <Header scroll={scroll} iconType={scroll > 100 ? 'secondary' : 'primary'} />
        <HomePageMain />
        <Footer />
      </ThingsProvider>
    </>
  );
};

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

  const { data: serverLanguages } = languagesResponse;
  const { data: courses } = response;
  const { data: teacher } = teachers;

  return {
    props: {
      courses,
      teacher,
      serverLanguages
    }
  }
}

export default withStickyHeader(Home);