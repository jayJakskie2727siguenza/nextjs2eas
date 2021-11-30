import React, { createContext, useState } from "react";

const HomeContext = createContext({});

const GeneralContext = ({ children }) => {
	const [showNavSlider, setShowNavSlider] = useState(false);
	const [pages, setPages] = useState("home");

	const [pageData, setPageData] = useState({});

	const handlerToggleSetShowNavSlider = (getBoolean) => {
		setShowNavSlider(getBoolean);
	};
	const handlerSetpages = (getPages) => {
		setPages(getPages);
	};
	const handleGetPageData = (getPageData) => {
		setPageData(getPageData);
	};

	const generalCtx = {
		showNavSlider,
		handlerToggleSetShowNavSlider,
		pages,
		handlerSetpages,
		pageData,
		handleGetPageData,
	};

	return (
		<HomeContext.Provider value={{ generalCtx }}>
			{children}
		</HomeContext.Provider>
	);
};

export { GeneralContext, HomeContext };
