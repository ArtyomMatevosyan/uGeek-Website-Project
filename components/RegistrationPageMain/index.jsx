import React, { useState, useMemo, useEffect } from 'react';
import UgeekIcon from '../Header/UgeekIcon';
import Select from '../../ui-kit/Select';
import styles from './RegistrationPageMain.module.css';
import { useRouter } from 'next/router';
import { millisecondToDateFormat, prettyDate } from '../../utils';
import { baseURL } from '../../constants';
import { validate } from './utils';
import axios from 'axios';

const RegistrationPageMain = ({ text, courseImg, title, price, handleChange, course }) => {
    const route = useRouter();
    const [courseState, setCourseState] = useState({});
    const [defaultSelectedValue, setDefaultSelectedValue] = useState({});
    const intialValues = {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        suggestion: "",
        courseId: '',
        openLessonId: null
    };

    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitForm = () => {
        axios.post(`${baseURL}client/student-registration`, formValues)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value, courseId: route.query['course-id'], openLessonId: route.query['open-lesson-id'] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submitForm();
        }
    }, [formErrors]);


    const selectedId = route.query['open-lesson-id'] || courseState.openLesson?.[0].id.toString();

    const newSelectOptions = useMemo(() => {
        return courseState.openLesson?.map(item => {
            if (item.id.toString() === selectedId) {
                setDefaultSelectedValue({
                    value: item.startDate,
                    label: `${millisecondToDateFormat(Number(item.startDate))} ${prettyDate(Number(item.startDate))}`
                })
            }
            return {
                value: item.startDate,
                label: `${millisecondToDateFormat(Number(item.startDate))} ${prettyDate(Number(item.startDate))}`
            }
        })
    }, [courseState, selectedId]);


    const selectChange = (value) => {
        setDefaultSelectedValue(value);
        setFormValues({ ...formValues, openCourseTime: value.label });
    };

    useEffect(() => {
        setCourseState(course);
    }, [course])

    return (
        <div className={styles.registration}>


            <div className={styles.background}>
                <div className={styles.container}>
                    <div className={styles.icon}>
                        <UgeekIcon iconType="primary" />
                    </div>
                    <div className={styles.registerTitle}>
                        <div className={styles.text}>Hello!<br /> {text}</div>
                        <div className={styles.learnMore}>
                            <div className={styles.learn}>
                                <p>learn more</p>
                                <div className={styles.arrow}>
                                    <img src='/static/icons/registerRightVector.svg' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.registerForm}>
                    <div className={styles.title}>
                        <div className={styles.courseImg}>
                            {courseImg && <img src={`${baseURL}${courseImg}`} />}
                        </div>
                        <div className={styles.courseTitle}>{title}</div>
                    </div>
                    <form
                        className={styles.register}
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <div className={styles.priceAndDate}>
                            <div className={styles.price}>
                                <p>Price: {price} AMD/Month</p>
                            </div>
                            <div className={styles.date}>
                                <Select
                                    options={newSelectOptions}
                                    value={defaultSelectedValue}
                                    onChange={selectChange}
                                    withCard={false}
                                    scroll={200}
                                    width="100%"
                                    fontSize="16px"
                                />
                            </div>
                        </div>
                        <div className={styles.inputs}>
                            <div className={styles.inputDiv}>
                                <input
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    value={formValues.firstname}
                                    onChange={handleChangeInput}
                                    placeholder='Firstname'
                                    className={styles.input}
                                />
                                {formErrors.firstname && (
                                    <span className={styles.error}>{formErrors.firstname}</span>
                                )}
                            </div>
                            <div className={styles.inputDiv}>
                                <input
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    value={formValues.lastname}
                                    onChange={handleChangeInput}
                                    placeholder='Lastname'
                                    className={styles.input}
                                />
                                {formErrors.lastname && (
                                    <span className={styles.error}>{formErrors.lastname}</span>
                                )}
                            </div>
                            <div className={styles.inputDiv}>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formValues.email}
                                    onChange={handleChangeInput}
                                    placeholder='Email'
                                    className={styles.input}
                                />
                                {formErrors.email && (
                                    <span className={styles.error}>{formErrors.email}</span>
                                )}
                            </div>
                            <div className={styles.inputDiv}>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    value={formValues.phone}
                                    onChange={handleChangeInput}
                                    placeholder='Phone Number'
                                    className={styles.input}
                                />
                                {formErrors.phone && (
                                    <span className={styles.error}>{formErrors.phone}</span>
                                )}
                            </div>
                        </div>
                        <div className={styles.submitDiv}><button className={styles.submit} >register</button></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPageMain;