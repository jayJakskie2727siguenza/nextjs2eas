import React,{
    useContext
} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import MenuLineIcon from "remixicon-react/MenuLineIcon";
import PhoneFillIcon from "remixicon-react/PhoneFillIcon";
import CloseLineIcon from "remixicon-react/CloseLineIcon";

import {HomeContext} from '../components/Context/General_Context'


const myGraphql = graphql`
	{
		Banner: wpPage(uri: { eq: "/generalsettings/" }) {
			general_cf {
				banner {
					text
					image {
						altText
						localFile {
							childImageSharp {
								fluid(quality: 100) {
									...GatsbyImageSharpFluid_noBase64
								}
							}
						}
					}
				}
			}
		}
		Contact: wpPage(uri: { eq: "/generalsettings/" }) {
			general_settings_cf {
				contact {
					cellphone
				}
			}
		}
	}
`;

const Header = () => {
    const {
		Banner: { general_cf: BannerGraphql },
		Contact,
	} = useStaticQuery(myGraphql);

	const { generalCtx } = useContext(HomeContext);

	const handleShowMobileNav = () => {
		generalCtx.handlerToggleSetShowNavSlider(!generalCtx.showNavSlider);
	};

	return (
		<div className="navBar__header">
			<div className="navBar__header--topNav">
				{/* {BannerGraphql.banner.text
					? BannerGraphql.banner.text
					: `We offer 50% `} */}
			</div>
			<div className="navBar__header ">
				<div className="navBar__header--wrapper container">
					<Link href="/">
						<div className="navBar__header--imgWrapper">
							{/* <Image
								className="navBar__header--img"
								fluid={
									BannerGraphql.banner.image.localFile.childImageSharp.fluid
								}
								alt={BannerGraphql.banner.image.altText}
							/> */}
							<img className="navBar__header--img" src={imgLogo} alt="2eas" />
						</div>
					</Link>
					<div className="navBar__header--desktopViewWrapper">
						<div className="navBar__header--menu">
							<ul className="navBar__header--menu--lists">
								<li className="navBar__header--menu--items">
									<Link href="/">home</Link>
								</li>
								<li className="navBar__header--menu--items">
									<Link href="/about">about us</Link>
								</li>
								<li className="navBar__header--menu--items">
									<Link href="/services">services</Link>
								</li>
								<li className="navBar__header--menu--items">
									<Link href="/contact">contact</Link>
								</li>
								<li className="navBar__header--menu--items">
									<a
										href="https://login.xero.com/"
										target="_blank"
										rel="noreferrer">
										login to xero
									</a>
								</li>
							</ul>
							<div className="navBar__header--menu--cta  ">
								<a
									href={`tel:+${Contact.general_settings_cf.contact?.cellphone}`}
									// href=""
								>
									<button className="navBar__header--menu--cta--btn btn__cta">
										call now
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="navBar__header--mobileViewWrapper">
						<a
							className="navBar__header--menuBar"
							href={`tel:+${Contact.general_settings_cf.contact?.cellphone}`}>
							<PhoneFillIcon className="navBar__header--menuBar--phoneIcon" />
							<span>call</span>
						</a>
						<button
							className="navBar__header--menuBar"
							onClick={handleShowMobileNav}>
							<span>menu</span>
							<div className="navBar__header--menuBar--iconWrapper">
								<MenuLineIcon
									className={`navBar__header--menuBar--menuIcon${
										generalCtx.showNavSlider ? "" : "--show"
									}`}
								/>
								<CloseLineIcon
									className={`navBar__header--menuBar--closeIcon${
										generalCtx.showNavSlider ? "--show" : ""
									}`}
								/>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header
