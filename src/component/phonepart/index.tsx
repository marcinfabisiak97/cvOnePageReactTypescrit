import React, { FC, useState, useContext } from "react";
import { TypeProps } from "../../types";
import Slider from "../../component/Slider/Slider";
import { SlideContext } from "../../context/Contexts";
import dataSlider from "../Slider/dataSlider";
const Phonepart: FC = () => {
  const { slideProject, setSlideproject } = useContext(SlideContext);
  return (
    <React.Fragment>
      <div className="phonePart">
        <div className="phonePart__phone">
          <Slider />
        </div>
        <div className="phonePart__description">
          <h2>Description</h2>
          <h3>Tite</h3>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
            libero id tortor condimentum efficitur at eu massa. Sed sagittis sed
            leo nec consectetur.
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
            libero id tortor condimentum efficitur at eu massa. Sed sagittis sed
            leo nec consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
            libero id tortor condimentum efficitur at eu massa. Sed sagittis sed
            leo nec consectetur.
          </p>
        </div>
        <div className="phonePart__vertContainer">
          <div
            className="phonePart__vertiSlider phonePart__vertiSlider--btnUp"
            onClick={() => setSlideproject(1)}
          >
            <div className="phonePart__arrow phonePart__arrow--up"></div>
          </div>
          <div
            className="phonePart__vertiSlider phonePart__vertiSlider--btnDown"
            onClick={() => setSlideproject(2)}
          >
            <div className="phonePart__arrow phonePart__arrow--down"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Phonepart;
