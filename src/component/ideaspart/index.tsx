import React, { FC, RefObject, useContext } from "react";
import { SlideContext } from "../../context/Contexts";
import { TypeProps } from "../../types";
const Ideaspart: FC = () => {
  const { myPortfolio, myService, myAwards, myProjecty, myContacty } =
    useContext(SlideContext);
  const myServices: Array<string> = [
    "UX/UI",
    "Websites",
    "Applications",
    "Software",
  ];
  return (
    <React.Fragment>
      <div className="ideasPart" ref={myService}>
        <p className="ideasPart__upperText">
          My idealogy is to engage my best skills and technology in the process
          of design{" "}
        </p>
        <p className="ideasPart__text">to make your ideas evolve</p>
        <div className="ideasPart__downBoxes">
          {myServices.map((el, index) => (
            <div key={index}>{el}</div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Ideaspart;
