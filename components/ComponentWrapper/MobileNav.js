import React, { useContext } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { HomeContext } from "../Context/General_Context";

import {
	faHome,
	faUserFriends,
	faHandHoldingHeart,
	faPhone,
} from "@fortawesome/fontawesome-free-solid";

const MobileNav = () => {
	const { generalCtx } = useContext(HomeContext);

	return (
		// <div className={`mobileNav${generalCtx.showNavSlider ? `--show` : ``}`}>
		// 	<div
		// 		className={`mobileNav__wrapper${
		// 			generalCtx.showNavSlider ? `--show` : ``
		// 		}`}>
		// 		<button className="mobileNav__btn" onClick={handleCloseMobileNav}>
		// 			<div className="mobileNav__btn--iconWrapper">
		// 				<CloseLineIcon className={`mobileNav__btn--icon`} />
		// 			</div>
		// 		</button>
		// 		<div className="mobileNav__menuWrapper">
		// 			<ul className="navBar__mobileNav--menu--lists">
		// 				<Link to="/">
		// 					<li className="navBar__mobileNav--menu--items">home</li>
		// 				</Link>
		// 				<Link to="/about">
		// 					<li className="navBar__mobileNav--menu--items">about us</li>
		// 				</Link>
		// 				<Link to="/services">
		// 					<li className="navBar__mobileNav--menu--items">services</li>
		// 				</Link>
		// 				<Link to="/contact">
		// 					<li className="navBar__mobileNav--menu--items">contact</li>
		// 				</Link>
		// 				<a href="https://login.xero.com/">
		// 					<li className="navBar__mobileNav--menu--items">login to xero</li>
		// 				</a>
		// 			</ul>
		// 		</div>
		// 	</div>
		// </div>
		<div className={`mobileNav${generalCtx.showNavSlider ? "--show" : ""}`}>
			<div className={`mobileNav__wrapper`}>
				<ul className="mobileNav__lists">
					<Link href="/" passHref>
						<li className="mobileNav__item">
							<FontAwesomeIcon
								className="mobileNav__item--icon"
								icon={faHome}
							/>
							<span>home</span>
						</li>
					</Link>
					<Link href="/about" passHref>
						<li className="mobileNav__item">
							<FontAwesomeIcon
								className="mobileNav__item--icon"
								icon={faUserFriends}
							/>
							<span>about us</span>
						</li>
					</Link>
					<Link href="/services" passHref>
						<li className="mobileNav__item">
							<FontAwesomeIcon
								className="mobileNav__item--icon"
								icon={faHandHoldingHeart}
							/>
							<span>services</span>
						</li>
					</Link>
					<Link href="/contact" passHref>
						<li className="mobileNav__item">
							<FontAwesomeIcon
								className="mobileNav__item--icon"
								icon={faPhone}
							/>
							<span>contact</span>
						</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default MobileNav;
