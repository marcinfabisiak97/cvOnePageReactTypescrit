import { createContext } from "react";
export const SlideContext = createContext<number | string>({
	slideProject: (item) => {},
	expander: (item) => {},
});
