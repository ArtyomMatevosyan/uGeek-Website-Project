import React, { useEffect, useState } from "react";
import constants from './constants';
import styles from './Slide.module.css';

function HeaderSlider() {
    const [people, setPeople] = useState(constants);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;

        if (index < 0) {
            setIndex(lastIndex);
        }

        if (index > lastIndex) {
            setIndex(0);
        }

        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 4500);

        return () => clearInterval(slider);
    }, [index, people]);

    return (
        <div className={styles.section_center}>
            {people.map((person, personIndex) => {
                const { id, image, name, text } = person;
                let position = styles.nextSlide;
                if (personIndex === index) {
                    position = styles.activeSlide;
                }
                if (
                    personIndex === index - 1 ||
                    (index === 0 && personIndex === people.length - 1)
                ) {
                    position = styles.lastSlide;
                }
                return (
                    <article className={`${styles.article} ${position}`} key={id}>
                        <img src={image} alt={name} className={styles.img} />
                        <div className={styles.titleDiv}> 
                            <h3 className={styles.title}>{name}</h3>
                        </div>
                        <p className={styles.text}>{text}</p>
                    </article>
                );
            })}
        </div>
    );
}

export default HeaderSlider;