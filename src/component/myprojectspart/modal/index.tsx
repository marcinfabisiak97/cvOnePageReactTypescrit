import React from "react";
import dataSlider from "../../Slider/dataSlider";
const pr1 = require("../../../assets/pr1.png");
const Modal = ({ setOpenModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <img src={pr1} alt="project 1" />
        <div className="modalContainer__CloseBtn">
          <button
            onClick={() => {
              setOpenModal(0);
            }}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
