import { v4 as uuidv4 } from "uuid";
const portfolio_case_01 = require("../../assets/portfolio_case_01.png");
const portfolio_case_02 = require("../../assets/portfolio_case_02.png");
const portfolio_case_03 = require("../../assets/portfolio_case_03.png");
const portfolio_case_04 = require("../../assets/portfolio_case_04.png");
const portfolio_case_05 = require("../../assets/portfolio_case_05.png");

const img1 = require("../../assets/Imgs/img1.jpg");
const img2 = require("../../assets/Imgs/img2.jpg");
const img3 = require("../../assets/Imgs/img3.jpg");
const img4 = require("../../assets/Imgs/img4.jpg");
const img5 = require("../../assets/Imgs/img5.jpg");
const dataSlider = [
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    adres: img1,
    adres1: portfolio_case_01,
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    adres: img2,
    adres1: portfolio_case_02,
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    adres: img3,
    adres1: portfolio_case_03,
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    adres: img4,
    adres1: portfolio_case_04,
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    adres: img5,
    adres1: portfolio_case_05,
  },
];

export default dataSlider;
