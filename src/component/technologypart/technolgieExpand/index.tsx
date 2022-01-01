import React, { useState, useContext } from "react";
import { myTechnolgieExpand } from "../../../context/technologyPartBackEnd/technologiesExpand";
import { SlideContext } from "../../../context/Contexts";
const rightPointer = require("../../../assets/icons/rightPointer.png");
const TechnolgieExpand = (props) => {
    const { expander, setExpander } = useContext(SlideContext);
    return (
        <div className="technolgiesBricksExpand">
            <img src={props.photo} alt="ui" />
            <div className="technolgiesBricksExpand__midleText">
                <p>{props.number}</p>
                <h3>{props.kind}</h3>
                <p>{props.text} </p>
            </div>
            <img
                className="technolgiesBricksExpand__cliker"
                onClick={() => setExpander("")}
                src={rightPointer}
                alt="pointer"
            />
        </div>
    );
};
export default TechnolgieExpand;
