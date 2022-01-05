import React, { useState } from "react";
import dataSlider from "../Slider/dataSlider";
import Modal from "../myprojectspart/modal";
const rightPointer = require("../../assets/icons/rightPointer.png");
const myProjects = [
    { source: dataSlider[0].adres, descr: "See more" },
    { source: dataSlider[1].adres, descr: "See more" },
];
const Project = (props) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <div className="firstproject">
                <div className="firstproject__image">
                    <img src={props.source} />
                </div>
            </div>
            <div className="projects__btnSee">
                <h3 className="projects__description">{props.descr}</h3>
                <img
                    src={rightPointer}
                    className="projects__image"
                    alt="rightPointer"
                    onClick={() => {
                        setModalOpen(true);
                    }}
                />
            </div>
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
    );
};
const Projectspart = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className="projects">
            <div className="projects__title">My projects</div>
            <div className="projects__btnSee">
                <h3 className="projects__description">See all projects</h3>
                <img
                    src={rightPointer}
                    className="projects__image"
                    alt="rightPointer"
                    onClick={() => {
                        setModalOpen(true);
                    }}
                />
                {modalOpen && <Modal setOpenModal={setModalOpen} />}
            </div>
            {myProjects.map((el, index) => {
                return (
                    <Project key={index} source={el.source} descr={el.descr} />
                );
            })}
        </div>
    );
};
export default Projectspart;
