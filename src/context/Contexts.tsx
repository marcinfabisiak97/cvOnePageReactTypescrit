import React, { createContext } from "react";
type ContextState = {
	slideProject: number;
	expander: string;
	setSlideproject: (slideProject) => void;
	setExpander: (expander) => void;
};
export const SlideContext = createContext<ContextState>({
	slideProject: 1,
	expander: "",
	setSlideproject: () => {},
	setExpander: () => {},
});
// export const TechnologieContext = createContext({
// 	TechComp: Technolgie,
// });
// export const TechnologieExpandContext = ({ children }) => {
// 	const TechComp = TechnolgieExpand;

// 	return (
// 		<TechnologieContext.Provider
// 			value={{
// 				TechnolgieExpand,
// 			}}
// 		>
// 			{children}
// 		</TechnologieContext.Provider>
// 	);
// };

type ModalState = {
	modalOpen: boolean;
	setModalOpen: (modalOpen) => void;
};
export const ModalContext = createContext<ModalState>({
	modalOpen: false,
	setModalOpen: () => {},
});
