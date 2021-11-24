import React from "react";
// import "../css/style.scss";
import "../styles/style.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { GeneralContext } from "../components/Context/General_Context";
import MobileNav from "../components/ComponentWrapper/MobileNav";

const Layout = ({ children }) => {
	return (
		<GeneralContext>
			<MobileNav />
			<section className="layout">
				<Header />
				{children}
				<Footer />
			</section>
		</GeneralContext>
	);
};

export default Layout;
