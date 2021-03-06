import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { GeneralContext } from "../components/Context/General_Context";
import MobileNav from "../components/ComponentWrapper/MobileNav";

const Layout = ({ children, Banner, FooterData, FooterGenSetting }) => {
	return (
		<GeneralContext>
			<MobileNav />
			<section className="layout">
				<Header Banner={Banner} />
				{children}
				<Footer FooterData={FooterData} FooterGenSetting={FooterGenSetting} />
			</section>
		</GeneralContext>
	);
};

export default Layout;
