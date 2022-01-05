import React, { useState, useContext } from "react";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
import { SlideContext } from "../../context/Contexts";
const Slider = () => {
    const { slideProject, setSlideproject } = useContext(SlideContext);
    const [slideIndex, setSlideIndex] = useState(1);
    const nextSlide = (slideProject) => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === dataSlider.length) {
            setSlideIndex(1);
        }
    };
    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length);
        }
    };
    const moveDot = (index) => {
        setSlideproject(index);
    };
    const Switcher = ({ obj }) => {
        switch (slideProject) {
            case 1:
                return <img src={obj.adres} />;
            case 2:
                return <img src={obj.adres1} />;
            default:
                return <img src={obj.adres} />;
        }
    };
    return (
        <div className="dotsAndSlider">
            <div className="dotsAndSlider__Dots">
                {Array.from({ length: 2 }).map((obj, index) => (
                    <div
                        key={index}
                        onClick={() => moveDot(index + 1)}
                        className={
                            slideProject === index + 1
                                ? "dotsAndSlider__Dots--dot dotsAndSlider__Dots--dotActive"
                                : "dotsAndSlider__Dots--dot"
                        }
                    ></div>
                ))}
            </div>
            <div className="dotsAndSlider__slides">
                {dataSlider.map((obj, index) => (
                    <div
                        key={index}
                        className={
                            slideIndex === index + 1
                                ? "dotsAndSlider__slides--slide dotsAndSlider__slides--activeSlide"
                                : "dotsAndSlider__slides--slide"
                        }
                    >
                        <Switcher obj={obj} />
                    </div>
                ))}
                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <div className="dotsAndSlider__slideNumber">{slideIndex}/5</div>
                <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            </div>
        </div>
    );
};
export default Slider;
