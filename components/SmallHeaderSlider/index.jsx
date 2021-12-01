import React, { useState, useEffect } from "react";
import styles from './SmallHeaderSlider.module.css';

const Slider = (props) => {
    const { slideWidth, slideHeight, children } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const total = React.Children.count(children);

    const goToSlide = (index) => {
        const nextIndex = index < 0 || index > total - 1 ? 0 : index;

        setCurrentIndex(nextIndex);
    }

    const goToNextSlide = () => {
        goToSlide(currentIndex + 1);
    }

    const isCurrentIndex = (index) => {
        return currentIndex === index;
    }

    const calculatePosition = ({ index, width, height }) => {
        const x = index * width;
        const y = width - index * height;
        const z = width - index * height;

        const transform = `
        translateX(${x}px)
        translateY(${y}px)
        translateZ(${z}px)
      `;

        return {
            transform
        };
    }

    const getPosition = (childIndex, currentIndex) => {
        const map = {
            0: {
                0: 0,
                1: 1,
                2: 2
            },
            1: {
                0: 2,
                1: 0,
                2: 1
            },

            2: {
                0: 1,
                1: 2,
                2: 0
            }
        };

        return map[childIndex][currentIndex];
    }

    useEffect(() => {
        const slider = setInterval(() => {
            goToNextSlide();
        }, 4500);

        return () => clearInterval(slider);
    }, [currentIndex]);

    return (
        <div className={styles["Slider-Container"]} style={{ height: `${slideHeight}px` }}>
            <div
                className={styles["Slider-Content"]}
                style={{ width: `${slideWidth}px`, height: `${slideHeight}px` }}
            >
                {React.Children.map(children, (child, childIndex) =>
                    React.cloneElement(child, {
                        isCurrent: isCurrentIndex(childIndex),
                        index: childIndex,
                        slideStyle: calculatePosition({
                            index: getPosition(currentIndex, childIndex),
                            width: 100,
                            height: 50
                        })
                    })
                )}
            </div>
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


const SmallHeaderSlider = () => {
    return (
        <div>
            <Slider slideWidth={400} slideHeight={400}>
                <Slide><img src='./static/icons/firstSlideSmallImg1.jpg'/></Slide>
                <Slide><img src='./static/icons/firstSlideSmallImg2.jpg'/></Slide>
                <Slide><img src='./static/icons/firstSlideSmallImg3.jpg'/></Slide>
            </Slider>
        </div>
    );
}

export default SmallHeaderSlider;