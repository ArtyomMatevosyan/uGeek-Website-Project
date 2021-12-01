import TeacherCard from './TeacherCard';
import styles from './TeachersPart.module.css';

const TeachersPart = () => {
    return (
        <div className={styles.teachersPart}>
            <TeacherCard
                img='/static/images/teacher1.jpg'
                name='Grigor Hayrapetyan'
                profession='c++ developer'
            />
            <TeacherCard
                img='/static/images/teacher3.jpg'
                name='Grigor Hayrapetyan'
                profession='c++ developer'
            />
              <TeacherCard
                img='/static/images/teacher3.jpg'
                name='Grigor Hayrapetyan'
                profession='c++ developer'
            />
        </div>
    )
}

export default TeachersPart;