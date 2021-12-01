import React, { useMemo, useState } from 'react';
import Eclips from '../../../Eclips';
import styles from './LessonCard.module.css';
import Link from 'next/link';
import Select from '../../../../ui-kit/Select';
import { millisecondToDateFormat, prettyDate } from '../../../../utils';
import { useMedia } from '../../../../hooks/useMedia';
import useTranslation from 'next-translate/useTranslation';

const LessonCard = ({ lessonImg, lessonTitle, duration, price, course, handleClick, id, openLessons }) => {
    const isMobile = useMedia('(max-width: 540px)');
    const { t } = useTranslation('common');

    const newOpenLessons = useMemo(() => {
        return openLessons?.map(openLesson => ({
            value: openLesson.startDate,
            label: `${millisecondToDateFormat(Number(openLesson.startDate))} ${prettyDate(Number(openLesson.startDate))}`,
            id: openLesson.id
        }))
    }, [openLessons]);

    const [isSelectedCard, setSelectedCard] = useState(false);


    const [openlessonDate, setOpenLessonDate] = useState(newOpenLessons?.[0]);

    const handleSelectChange = (value) => {
        setOpenLessonDate(value);
    }

    return (
        <div>
            <div className={isSelectedCard ? `${styles.card} ${styles.cardHoveredMobile}` : styles.card} onClick={isMobile ? () => {
                setSelectedCard(!isSelectedCard);
            } : null}>
                <div className={styles.share}><img src='/static/icons/share.svg'></img></div>
                <div>
                    <div className={styles.smallEclips}>
                        <Eclips img='/static/icons/small_vector.svg' />
                    </div>
                    <div className={styles.smallEclips2}>
                        <Eclips img='/static/icons/small_vector.svg' />
                    </div>
                </div>
                <div className={styles.lessonType} onClick={() => handleClick(id)}>
                    <img src={lessonImg} />
                </div>
                <div className={styles.lesson_title}>
                    <p>{lessonTitle}</p>
                </div>
                <div className={styles.lesson_info}>
                    <div className={styles.lesson_duration}>
                        <div className={styles.durationImg}><img src='/static/icons/lessonDuration2.svg' /></div>
                        <div className={styles.lesson_durationText}>{t('lessonCard.duration')}: {duration} {t('lessonCard.month')}</div>
                    </div>
                    <div className={styles.lesson_price}>
                        <div className={styles.wallet}><img src='/static/icons/wallet.svg' /></div>
                        <div className={styles.price}>{t('lessonCard.price')}: {price} AMD/Month</div>
                    </div>
                    <div className={styles.lesson_type}>
                        <div className={styles.typeImg}><img src='/static/icons/graduation-cap.svg' /></div>
                        <div className={styles.course}>{t('lessonCard.courseFor')} {course}</div>
                    </div>
                </div>
                <div className={styles.registerDiv}>

                    <div className={styles.time}>
                        <Select
                            options={newOpenLessons}
                            value={openlessonDate}
                            scroll={200}
                            onChange={handleSelectChange}
                            width="100%"
                            fontSize="16px"
                            withCard={true}
                        />
                    </div>
                    <Link href={`registration?course-id=${id}&open-lesson-id=${openlessonDate?.id}`}>
                        <button className={styles.register}>{t('lessonCard.register')}!</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default LessonCard;