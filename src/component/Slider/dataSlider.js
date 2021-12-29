import { v4 as uuidv4 } from "uuid";
import portfolio_case_01 from '../../assets/portfolio_case_01.png';
import portfolio_case_02 from '../../assets/portfolio_case_02.png';
import portfolio_case_03 from '../../assets/portfolio_case_03.png';
import portfolio_case_04 from '../../assets/portfolio_case_04.png';
import portfolio_case_05 from '../../assets/portfolio_case_05.png';

import img1 from '../../assets/Imgs/img1.jpg';
import img2 from '../../assets/Imgs/img2.jpg';
import img3 from '../../assets/Imgs/img3.jpg';
import img4 from '../../assets/Imgs/img4.jpg';
import img5 from '../../assets/Imgs/img5.jpg';
const dataSlider = [
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    adres: img1,
    adres1: portfolio_case_01
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    adres: img2,
    adres1: portfolio_case_02
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    adres: img3,
    adres1: portfolio_case_03
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    adres: img4,
    adres1: portfolio_case_04
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    adres: img5,
    adres1: portfolio_case_05
  },
];

export default dataSlider;
