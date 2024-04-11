import React from "react";
import { VariableProvider } from "./src/context/VariableProvider"; 

export const onClientEntry = () => {
	sessionStorage.setItem("hasOwlBeenShown", false);
};

// element is the page element being rendered.
// props are the properties passed to the page component.
export const wrapPageElement = ({ element, props }) => {
	return <VariableProvider {...props}>{element}</VariableProvider>;
};