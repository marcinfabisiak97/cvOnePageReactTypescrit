import React, { useState, useRef, useEffect } from "react";
const rightPointer = require("../../assets/icons/rightPointer.png");
const leftQuote = require("../../assets/leftQuote.png");
const rightQuote = require("../../assets/rightQuote.png");
const dot = require("../../assets/dot.png");
const facebook = require("../../assets/facebook_icon.png");
const linkedin = require("../../assets/linkedin_icon.png");

const opinion = [
  "Creating such a unique and effective solution for our company, which allowed to reduce production cost thanks to new software and in such a short time is a real challenge and success.",
  "Martin did an awesome job, exceeding my expectations on both the quality and quantity of his work. Great communication skills and ability to stick to a tight deadline. I will surely hire him again in the future for more projects.",
  "It was great to work with Martin. I will work with him again for sure in the near future. He communicates well and makes himself available to answer questions and helps above and beyond what is expected of him.",
];
const delay = 4000;
const Contact = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === opinion.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="contactPart">
      <h3 className="contactPart__title">Clients'</h3>
      <h2 className="contactPart__bigTitle">experience</h2>

      <div className="slideShow">
        <div
          className="slideShow__Slider"
          style={{ transform: `translate3d(${-index * 28}%, 0, 0)` }}
        >
          {opinion.map((el, index) => (
            <div className="slideShow__slide" key={index}>
              <div className="description" key={index}>
                <img src={leftQuote} className="description__quote" />
                <p className="description__opinion">{el}</p>
                <img
                  src={rightQuote}
                  className="description__quote description__quote--right"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="contact">
        <p className="contact__btn">
          Contact me
          <img className="contact__cliker" src={rightPointer} alt="pointer" />
        </p>
      </div>

      <div className="footer">
        <div className="footer__initials">
          <h2>
            <img src={dot} alt="dot" />
            M<img src={dot} alt="dot" />F
          </h2>
          <p>Marcin Fabisiak 2022</p>
          <p>All rights reserved.</p>
        </div>
        <div className="footer__nav">
          <p>Portfolio</p>
          <p>Service</p>
          <p>Awards</p>
          <p>Technology</p>
        </div>
        <div className="footer__terms">
          <p>Contact me</p>
          <p>Privacy</p>
          <p>Terms & Condtions</p>
        </div>

        <div className="footer__links">
          <img
            className="footer__links--bigger"
            src={facebook}
            alt="facebook"
          />
          <img
            className="footer__links--bigger"
            src={linkedin}
            alt="linkedin"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
