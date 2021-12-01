import React, { useContext } from "react";
import { getMapObjectForSlider } from './utils';
import styles from './SmallHeaderSlider.module.css';
import ThingsContext from "../../context";
import { baseURL } from '../../constants'



const Slider = (props) => {
    const { slideWidth, slideHeight, children } = props;

    const isCurrentIndex = (index) => {
        return props.currentIndex === index;
    }

    const calculatePosition = ({ index, width, height }) => {
        const x = index * width / 5;
        const y = width - index * height / 30;
        const z = width - index * height * 1.5;

        const transform = `
        translateX(${x}px)
        translateY(${y}px)
        translateZ(${z}px) 
       `;
        return {
            transform
        };
    }
    // className={`${course.level === 0 ? 'begginers' : course.level === 1 ? 'middles' : 'seniors'}`}
    const getPosition = (childIndex, currentIndex) => {
        const map = getMapObjectForSlider(props.length);
        return map[childIndex][currentIndex];
    }

    return (
        <div className={styles["Slider-Container"]} style={{ height: `${slideHeight}px` }}>
            <div
                className={styles["Slider-Content"]}
                // style={{ width: `${slideWidth}px`, height: `${slideHeight}px` }}
            >
                {React.Children.map(children, (child, childIndex) =>
                    React.cloneElement(child, {
                        isCurrent: isCurrentIndex(childIndex),
                        index: childIndex,
                        slideStyle: calculatePosition({
                            index: getPosition(props.currentIndex, childIndex),
                            width: 100,
                            height: 50,
                            
                        })
                    })
                )}
            </div>
            <Controls goToPrevSlide={props.goToPrevSlide} goToNextSlide={props.goToNextSlide} />
        </div>
    );
}

const Slide = (props) => {
    const { children, isCurrent, slideStyle } = props;

    const className = [styles["Slide"], isCurrent && styles["Slide--current"]]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={className} style={slideStyle}>
            {children}
        </div>
    );
}

const Controls = (props) => {
    const { goToPrevSlide, goToNextSlide } = props;

    return (
        <div className={styles.Controls}>
            <button className={styles['Arrow--prev']} onClick={() => goToPrevSlide()}>
                <img src="/static/icons/Arrow_left.svg" />
            </button>
            <button className={styles['Arrow--next']} onClick={() => goToNextSlide()}>
                <img src="/static/icons/Arrow_right.svg" />
            </button>
        </div>
    );
}


const TeachersSlider = ({ goToPrevSlide, goToNextSlide, currentIndex }) => {

    const data = useContext(ThingsContext);
    const teacherData = data.teacherData;

    return (
        <div>
            <Slider length={teacherData.length} goToPrevSlide={goToPrevSlide} goToNextSlide={goToNextSlide} currentIndex={currentIndex} >
                {teacherData?.map((teacherInfo, index) => {
                    return (
                        <Slide visibility={index} key={index} ><img className={styles.img} src={`${baseURL}${teacherInfo.img1}`}  /></Slide>
                       
                    )
                })}
            </Slider>
        </div>
    );
}

export default TeachersSlider;

