import React, { FC, RefObject } from "react";
export interface TypeProps {
	myPortfolio: RefObject<HTMLDivElement> | null;
	myService: RefObject<HTMLDivElement> | null;
	myPhone: RefObject<HTMLDivElement> | null;
}
