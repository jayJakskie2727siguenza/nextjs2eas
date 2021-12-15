import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { Link, graphql, useStaticQuery } from "gatsby";
// import Image from "gatsby-image";

import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

// import icon1 from "../../images/about-icon1-2.png";
import defaultImage from "../../images/defaultImages.png";
// import img1 from "../../images/ipod-mockup-xero.png";

// const myGraphql = graphql`
// 	{
// 		HomepageWhy: wpPage(uri: { eq: "/" }) {
// 			homepage_cf {
// 				why {
// 					heading
// 					subheading
// 					description
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
// 		HomepageNode: allWpFeatureAcf {
// 			nodes {
// 				homepage_features_cpt {
// 					image {
// 						localFile {
// 							childImageSharp {
// 								fluid(quality: 100) {
// 									...GatsbyImageSharpFluid_noBase64
// 								}
// 							}
// 						}
// 						altText
// 					}
// 					heading
// 					description
// 				}
// 			}
// 		}
// 	}
// `;

const Why = ({ HomepageWhy, homePageFeaturesNodes }) => {
	// const { HomepageWhy, HomepageNode } = useStaticQuery(myGraphql);

	return (
		<section className="home__why container padding--sections">
			<div className="home__why--headingWrapper">
				<h2 className="home__why--headingWrapper--heading">
					{HomepageWhy.heading &&
						"why online accounting is good for your business?"}
					{/* Why Online Accounting Is Good For Your Business? */}
				</h2>
			</div>
			<div className="home__why--features">
				<ul className="home__why--features--lists">
					{homePageFeaturesNodes.map(({ acf: itm }, indx) => {
						return (
							<li
								key={`${itm.image.ID}${indx}`}
								className="home__why--features--items"
							>
								<div className="home__why--features--items--imgWrapper">
									{itm.image ? (
										<Image
											className="home__why--features--content--img"
											src={itm.image.url}
											layout="fill"
											alt="bahay renta image"
											objectFit="cover"
										/>
									) : (
										<Image
											className="home__why--features--items--img"
											src={defaultImage}
											layout="fill"
											objectFit="cover"
											alt="defaultImage"
										/>
									)}
								</div>
								<div className="home__why--features--items--content">
									<h2 className="home__why--features--items--content--heading">
										{itm.heading}
									</h2>
									<p className="home__why--features--items--content--description">
										{itm.description}
									</p>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="home__why--features--content">
				<div className="home__why--features--content--imgWrapper">
					{HomepageWhy.image ? (
						<Image
							className="home__why--features--content--img"
							src={HomepageWhy.image.url}
							layout="fill"
							alt="bahay renta image"
							objectFit="cover"
						/>
					) : (
						<Image
							className="home__why--features--content--img"
							src={defaultImage}
							layout="fill"
							objectFit="cover"
							alt="defaultImage"
						/>
					)}
				</div>
				<div className="home__why--features--content--wrapper">
					<div className="home__why--features--content--description">
						<h2 className="home__why--features--content--description--heading">
							{HomepageWhy.subheading}
							{/* You`Ve Got All Reasons To Get Started In No Time */}
						</h2>
						<p className="home__why--features--content--description--text">
							{HomepageWhy.description}
							{/* whether you have an existing or no system in place, not a problem!
							we can spontaneously help you move into the cloud! it`s time to
							stop worrying about your accounting and taxation task! Xero online
							accounting software is designed to run every type of business so
							much easier and faster anytime and anywhere */}
						</p>
					</div>
					<Link href="/contact" passHref>
						<button className="home__why--features--content--description--btn btn btn__primary">
							<p className="home__why--features--content--description--btn--text">
								{HomepageWhy.button}
								{/* schedule a free demo */}
							</p>
							<ArrowRightSLineIcon className="home__why--features--content--description--btn--icon" />
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Why;
