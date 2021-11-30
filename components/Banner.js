import React from "react";
import Link from "next/link";

import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

const Banner = ({ pages }) => {
	return (
		<section className="banner">
			<div className="banner__wrapper container">
				<div className="banner__content">
					<h2 className="banner__content--heading">{pages}</h2>
					<div className="banner__content--subheadingContent">
						<Link href="/" passHref>
							<p className="banner__content--subheading">home</p>
						</Link>
						<ArrowRightSLineIcon className="banner__content--icon" />
						<p className="banner__content--subheading">{pages}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
