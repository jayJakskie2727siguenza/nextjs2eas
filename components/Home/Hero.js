import React from "react";
import Link from "next/link";
import Image from "next/image";
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
	// console.log(HomepageHero.image);
	return (
		<div className="home__hero">
			<div className="home__hero--imgWrapper">
				{/* <Image
					className="home__hero--img"
					src={HomepageHero.image.url}
					layout="fill"
					alt="bahay renta image"
					objectFit="cover"
				/> */}
				{HomepageHero.image ? (
					<Image
						className="home__hero--img"
						src={HomepageHero.image.url}
						layout="fill"
						alt="bahay renta image"
						objectFit="cover"
					/>
				) : (
					<Image
						src={defaultimage}
						className="home__hero--img"
						layout="fill"
						objectFit="cover"
						alt="default Images"
					/>
				)}
			</div>
			<div className="home__hero--content container">
				<div className="home__hero--content--description">
					<h2 className="home__hero--content--description--title">
						{HomepageHero.heading ||
							"no more struggling to your accounting and taxation problems!"}
						{/* No More Struggling To Your Accounting And Taxation Problems! */}
					</h2>
					<p className="home__hero--content--description--subTitle">
						{HomepageHero.subheading ||
							`fast, accurate, complete, quality accounting and taxation system for
							small to medium business and e-commerce business`}
						{/* fast, accurate, complete, quality accounting and taxation system for
						small to medium business and e-commerce business */}
					</p>
				</div>
				<div className="home__hero--content--cta">
					<Link href="/contact" passHref>
						<button className="home__hero--content--cta--btn btn__primary btn">
							<p className="home__hero--content--cta--text">
								{HomepageHero.button || "free consultation"}
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
