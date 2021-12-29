import React from "react";
import leftArrow from "../../assets/icons/left-arrow.png";
import rightArrow from "../../assets/icons/right-arrow.png";

const BtnSlider = ({ direction, moveSlide }) => {
  
  return (
    <div
      onClick={moveSlide}
      className={direction === "next" ? "slider__button slider__button--next" : "slider__button slider__button--prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </div>
  );
}
export default BtnSlider;
