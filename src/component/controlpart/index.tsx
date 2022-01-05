import React, { useState, useContext } from "react";
import { myTechnolgieExpand } from "../../context/technologyPartBackEnd/technologiesExpand";
import { myTechnolgie } from "../../context/technologyPartBackEnd/technologies";
import { SlideContext } from "../../context/Contexts";
import Technolgie from "../technologypart/technolgie";

const Controlpart = () => {
    const { expander, setExpander } = useContext(SlideContext);
    return (
        <React.Fragment>
            <div className="controlAndTechnolgies">
                <div className="controlAndTechnolgies__text">
                    <p>
                        As a professional, I can provide a wide range of
                        services to make sure you have
                    </p>
                    <h2>everything under control</h2>
                </div>
                <div className="controlAndTechnolgies__technolgies">
                    {expander === ""
                        ? myTechnolgie.map((el, index) => (
                              <Technolgie
                                  key={index}
                                  photo={el.photo}
                                  number={el.number}
                                  kind={el.kind}
                                  text={el.text}
                              />
                          ))
                        : myTechnolgieExpand
                              .filter((el) => el.number.slice() === expander)
                              .map((el, index) => (
                                  <Technolgie
                                      key={index}
                                      photo={el.photo}
                                      number={el.number}
                                      kind={el.kind}
                                      text={el.text}
                                  />
                              ))}
                </div>
            </div>
        </React.Fragment>
    );
};
export default Controlpart;
