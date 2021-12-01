import React, { useContext } from 'react';
import ThingsContext from "../../../context";
import TeacherCard from '../../CoursePageMain/TeachersPart/TeacherCard';
import { baseURL } from '../../../constants';
import styles from './AllTeachers.module.css';

const AllTeachers = () => {
    const { teachersData } = useContext(ThingsContext);
    return (
        <div className={styles.allTeachers}>
            <div className={styles.teachersDiv}>
                {teachersData?.map((teacher, index) => (
                    <div key={index} className={styles.teacherCard}>
                        <TeacherCard
                            img={`${baseURL}${teacher.img1}`}
                            name={teacher.firstName}
                            profession={teacher.position}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllTeachers