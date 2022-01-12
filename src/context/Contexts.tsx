import React, { createContext } from "react";
type ContextState = {
  slideProject: number;
  expander: string;
  show: boolean;
  setSlideproject: (slideProject) => void;
  setExpander: (expander) => void;
  setShow: (show) => void;
};
export const SlideContext = createContext<ContextState>({
  slideProject: 1,
  expander: "",
  show: false,
  setSlideproject: () => {},
  setExpander: () => {},
  setShow: () => {},
});

type ModalState = {
  modalOpen: boolean;
  setModalOpen: (modalOpen) => void;
};
export const ModalContext = createContext<ModalState>({
  modalOpen: false,
  setModalOpen: () => {},
});
