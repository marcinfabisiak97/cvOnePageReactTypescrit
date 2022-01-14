import React, { createContext, RefObject } from "react";
type SlideContextTypes = {
  slideProject: number;
  expander: string;
  show: boolean;
  setSlideproject: (slideProject) => void;
  setExpander: (expander) => void;
  setShow: (show) => void;
  myPortfolio: RefObject<HTMLDivElement> | null;
  myService: RefObject<HTMLDivElement> | null;
  myAwards: RefObject<HTMLDivElement> | null;
  myProjecty: RefObject<HTMLDivElement> | null;
  myContacty: RefObject<HTMLDivElement> | null;
};
export const SlideContext = createContext<SlideContextTypes>({
  slideProject: 1,
  expander: "",
  show: false,
  setSlideproject: () => {},
  setExpander: () => {},
  setShow: () => {},
  myPortfolio: () => {},
  myService: () => {},
  myAwards: () => {},
  myProjecty: () => {},
  myContacty: () => {},
});
