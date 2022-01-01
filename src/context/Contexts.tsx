import { createContext } from "react";
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
