import React, { FC, useState, useEffect } from "react";
import { TypeProps } from "../../types";
import NavItem from "../../component/navitem";
const imgTextRight = require("../../assets/text_left.png");
const dropDown = require("../../assets/dropdown.png");

const Menupart: FC<TypeProps> = ({ myPortfolio, myService, myPhone }) => {
    const navMenu = [
        { name: "My Portfolio", linker: myPortfolio },
        { name: "Service", linker: myService },
        { name: "Awards", linker: myPhone },
        { name: "Technology", linker: "" },
        { name: "Contact me", linker: "" },
    ];

    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 350) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });

    return (
        <React.Fragment>
            <div className="imagePart" ref={myPortfolio}>
                <div className="namenMenu">
                    <div className="namenMenu__name">
                        <h1>
                            <span>.</span>M.F
                        </h1>
                        <p>Marcin Fabisiak Portfolio</p>
                        <p>Front End Developer</p>
                    </div>
                    <div
                        className={
                            scrolled
                                ? "namenMenu__menu--scrolled namenMenu__menu"
                                : "namenMenu__menu"
                        }
                    >
                        <button>
                            Menu
                            <span className="namenMenu__menu--buttonImgWrapper">
                                <img src={dropDown} alt="dropdown arrow" />
                            </span>
                        </button>
                        <ul>
                            {navMenu.map((el, index) => {
                                return (
                                    <NavItem
                                        key={index}
                                        name={el.name}
                                        linker={el.linker}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="imagePart__imgRight">
                    <img src={imgTextRight} alt="engage design evolve" />
                </div>
            </div>
        </React.Fragment>
    );
};
export default Menupart;
