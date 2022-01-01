import React, { useState, useEffect } from "react";
import Image from "../../component/images";
const imgTextRight = require("../../assets/text_left.png");
const dropDown = require("../../assets/dropdown.png");
const Menupart = ({ myPortfolio, myService, myPhone }) => {
    const NavItem = (props) => {
        const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
        return (
            <li onClick={() => scrollToRef(props.linker)}>
                <p>{props.name}</p>
            </li>
        );
    };
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
                                ? "namenMenu__menu1 namenMenu__menu"
                                : "namenMenu__menu"
                        }
                    >
                        <button>
                            Menu
                            <span className="namenMenu__menu--buttonImgWrapper">
                                <Image imageUrl={dropDown} />
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
