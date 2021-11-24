import React, { createContext, useState } from "react";

const HomeContext = createContext();

const GeneralContext = ({ children }) => {
	const [showNavSlider, setShowNavSlider] = useState(false);
	const [pages, setPages] = useState("home");

	const handlerToggleSetShowNavSlider = (getBoolean) => {
		setShowNavSlider(getBoolean);
	};
	const handlerSetpages = (getPages) => {
		setPages(getPages);
	};

	const generalCtx = {
		showNavSlider,
		handlerToggleSetShowNavSlider,
		pages,
		handlerSetpages,
	};

	return (
		<HomeContext.Provider value={{ generalCtx }}>
			{children}
		</HomeContext.Provider>
	);
};

export { GeneralContext, HomeContext };
