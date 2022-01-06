import React, { useState, useContext } from "react";
import { myTechnolgieExpand } from "../../../context/technologyPartBackEnd/technologiesExpand";
import { myTechnolgie } from "../../../context/technologyPartBackEnd/technologies";
import { SlideContext } from "../../../context/Contexts";
const rightPointer = require("../../../assets/icons/rightPointer.png");
const Technolgie = (props) => {
    const { expander, setExpander } = useContext(SlideContext);
    return (
        <React.Fragment>
            {expander ? (
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
            ) : (
                <div className="technolgiesBricks">
                    <img src={props.photo} alt="ui" />
                    <div className="technolgiesBricks__midleText">
                        <p>{props.number}</p>
                        <h3>{props.kind}</h3>
                        <p>{props.text} </p>
                    </div>
                    <img
                        className="technolgiesBricks__image"
                        onClick={() => setExpander(props.number)}
                        src={rightPointer}
                        alt="pointer"
                    />
                </div>
            )}
        </React.Fragment>
    );
};
export default Technolgie;
