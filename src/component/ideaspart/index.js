import React from "react";
const Ideaspart = ({ myPortfolio, myService, myPhone }) => {
    const Services = ({ services }) => {
        return <div>{services}</div>;
    };
    const myServices = ["UX/UI", "Websites", "Applications", "Software"];
    return (
        <React.Fragment>
            <div className="ideasPart" ref={myService}>
                <p className="ideasPart__upperText">
                    My idealogy is to engage my best skills and technology in
                    the process of design{" "}
                </p>
                <p className="ideasPart__text">to make your ideas evolve</p>
                <div className="ideasPart__downBoxes">
                    {myServices.map((el, index) => {
                        return <Services key={index} services={el} />;
                    })}
                </div>
            </div>
        </React.Fragment>
    );
};
export default Ideaspart;
