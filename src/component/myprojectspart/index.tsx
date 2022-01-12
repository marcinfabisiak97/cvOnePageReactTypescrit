import React, { FC, useState } from "react";
import { TypeProps } from "../../types";
import dataSlider from "../Slider/dataSlider";
import Modal from "../myprojectspart/modal";
import Modal1 from "../myprojectspart/modal1";
const rightPointer = require("../../assets/icons/rightPointer.png");
const myProjects = [
  { source: dataSlider[0].adres, descr: "See more", setOpen: 1 },
  { source: dataSlider[1].adres, descr: "See more", setOpen: 2 },
];
const Project = (props) => {
  const [modalOpen, setModalOpen] = useState(0);
  const [modalOpen1, setModalOpen1] = useState(1);
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
            setModalOpen(props.setOpen);
            setModalOpen1(props.setOpen);
          }}
        />
      </div>
      {modalOpen == 1 && <Modal setOpenModal={setModalOpen} />}
      {modalOpen1 == 2 && <Modal1 setOpenModal1={setModalOpen1} />}
    </div>
  );
};
const Projectspart: FC<TypeProps> = ({
  myPortfolio,
  myService,
  myAwards,
  myProjecty,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="projects" ref={myProjecty}>
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
      </div>
      {myProjects.map((el, index) => {
        return (
          <Project
            key={index}
            source={el.source}
            descr={el.descr}
            setOpen={el.setOpen}
          />
        );
      })}
    </div>
  );
};
export default Projectspart;
