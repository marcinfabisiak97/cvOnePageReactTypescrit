import React from "react";
import dataSlider from "../../Slider/dataSlider";
const pr2 = require("../../../assets/pr2.png");
const Modal1 = ({ setOpenModal1 }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <img src={pr2} />
        <div className="modalContainer__CloseBtn">
          <button
            onClick={() => {
              setOpenModal1(1);
            }}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal1;
