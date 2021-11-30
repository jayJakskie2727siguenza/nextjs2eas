import React from "react";
import Link from "next/link";
// import { graphql, useStaticQuery, Link } from "gatsby";
// import Image from "gatsby-image";

// import ArrowRightLineIcon from "remixicon-react/ArrowRightLineIcon";

// import imgHero from "../../images/demo-eleven-banner-2.jpg";
import defaultimage from "../../images/defaultImages.png";

// const myGraphql = graphql`
// 	{
// 		HomepageHero: wpPage(uri: { eq: "/" }) {
// 			homepage_cf {
// 				hero {
// 					heading
// 					subheading
// 					button
// 					image {
// 						altText
// 						localFile {
// 							childImageSharp {
// 								fluid(quality: 100) {
// 									...GatsbyImageSharpFluid_noBase64
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// `;

const Hero = ({ HomepageHero }) => {
	// const { HomepageHero } = useStaticQuery(myGraphql);

	return (
		<div className="home__hero">
			<div className="home__hero--imgWrapper">
				{/* {HomepageHero.homepage_cf.hero.image ? (
					<Image
						className="home__hero--img"
						fluid={
							HomepageHero.homepage_cf.hero.image.localFile.childImageSharp
								.fluid
						}
						alt={HomepageHero.homepage_cf.hero.image.altText}
					/>
				) : (
					<img
						src={defaultimage}
						className="home__hero--img"
						alt="default Images"
					/>
				)} */}
			</div>
			<div className="home__hero--content container">
				<div className="home__hero--content--description">
					<h2 className="home__hero--content--description--title">
						{/* {HomepageHero.homepage_cf.hero.heading ||
							"no more struggling to your accounting and taxation problems!"} */}
						{/* No More Struggling To Your Accounting And Taxation Problems! */}
					</h2>
					<p className="home__hero--content--description--subTitle">
						{/* {HomepageHero.homepage_cf.hero.subheading ||
							`fast, accurate, complete, quality accounting and taxation system for
							small to medium business and e-commerce business`} */}
						{/* fast, accurate, complete, quality accounting and taxation system for
						small to medium business and e-commerce business */}
					</p>
				</div>
				<div className="home__hero--content--cta">
					<Link href="/contact" passHref>
						<button className="home__hero--content--cta--btn btn__primary btn">
							<p className="home__hero--content--cta--text">
								{/* {HomepageHero.homepage_cf.hero.button || "free consultation"} */}
								{/* free consultation */}
							</p>
							{/* <div className="home__hero--content--cta--iconWrapper">
								<ArrowRightLineIcon className="home__hero--content--cta--icon" />
							</div> */}
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
