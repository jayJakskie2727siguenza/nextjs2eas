import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { GeneralContext } from "../components/Context/General_Context";
import MobileNav from "../components/ComponentWrapper/MobileNav";

const Layout = ({ children, Banner }) => {
	return (
		<GeneralContext>
			<MobileNav />
			<section className="layout">
				<Header Banner={Banner} />
				{children}
				<Footer />
			</section>
		</GeneralContext>
	);
};

export default Layout;
