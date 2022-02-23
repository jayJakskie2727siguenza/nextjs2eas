import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { graphql, useStaticQuery } from "gatsby";
// import Image from "gatsby-image";

// import img1 from "../../images/006-audit.png";
import defaultImages from "../../images/defaultImages.png";

// import imgData from "../addOnsImgData";

// const myGraphql = graphql`
// 	{
// 		HomepageFeatures: wpPage(uri: { eq: "/" }) {
// 			homepage_cf {
// 				features {
// 					heading
// 					subheading
// 				}
// 				addons
// 			}
// 		}
// 		HomepageFeaturesNodes: allWpHighlightfeatureAcf {
// 			nodes {
// 				homepage_highlightfeatures_cpt {
// 					heading
// 					description
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
// 		HomepageAddsOnNodes: allWpAddOnsAcf {
// 			nodes {
// 				homepage_addons_cpt {
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

const Features = ({
	HomepageFeatures,
	HomepageFeaturesHighlightNodes,
	HomepageAddonsNodes,
}) => {
	const [imgDivData, setImgDivData] = useState([]);
	const [counter, setCounter] = useState(1);
	// const { HomepageFeatures, HomepageFeaturesNodes, HomepageAddsOnNodes } =
	// 	useStaticQuery(myGraphql);

	const groupingImagesFunctionalities = (arrayData, groupBy = 1) => {
		let groupedData = [];
		let data = [];

		arrayData.map((itm) => {
			if (groupedData.length !== groupBy) {
				return (groupedData = [...groupedData, itm]);
			} else {
				data = [...data, groupedData];
				groupedData = [];
				return (groupedData = [...groupedData, itm]);
			}
		});

		data = [...data, groupedData];

		return data;
	};

	useEffect(() => {
		setImgDivData(groupingImagesFunctionalities(HomepageAddonsNodes, 4));
	}, [HomepageAddonsNodes]);

	// setting counter in addOns
	useEffect(() => {
		let getTimeout = setTimeout(() => {
			if (counter !== imgDivData.length) {
				setCounter(counter + 1);
			} else {
				setCounter(1);
			}
		}, 4000);

		return () => {
			clearTimeout(getTimeout);
		};
	}, [counter, imgDivData]);

	//.....

	return (
		<section className="home__features container padding--sections">
			<div className="home__features--top">
				<h2 className="home__features--top--heading">
					{HomepageFeatures.heading}
					{/* POPULAR HOME FEATURES TO RUN EVERY PART OF YOUR BUSINESS */}
				</h2>
				<p className="home__features--top--subheading">
					{HomepageFeatures.subheading}
					{/* Accounting Software with all the time-saving tools you need to grow
					your business. Always secure and reliable and our experts are here to
					support you 24/7. */}
				</p>
			</div>
			<div className="home__features--highlights">
				<ul className="home__features--highlights--lists">
					{HomepageFeaturesHighlightNodes.map(({ acf: itm }, indx) => {
						return (
							<li key={`${indx}`} className="home__features--highlights--items">
								<div className="home__features--highlights--items--imgWrapper">
									{itm.image ? (
										<Image
											className="home__features--highlights--items--img"
											src={itm.image?.url}
											layout="fill"
											objectFit="contain"
											alt="2eas"
										/>
									) : (
										<Image
											className="home__features--highlights--items--img"
											src={defaultImages}
											layout="fill"
											objectFit="contain"
											alt="defaultImages"
										/>
									)}
								</div>
								<div className="home__features--highlights--items--content">
									<h2 className="home__features--highlights--items--content--heading">
										{itm?.heading}
									</h2>
									<p className="fewatures__highlights--items--content--description">
										{itm?.description}
									</p>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="home__features--highlights--addOns padding--sections">
				<h2 className="home__features--highlights--addOns--heading">
					{HomepageFeatures.addons}
					{/* other xero add-on we recommend for your business */}
				</h2>
				<div className="home__features--highlights--addOns--recommended">
					{imgDivData.map((itm, indx) => {
						return (
							<div
								key={`${indx}`}
								className={`home__features--highlights--addOns--recommended--wrapper${
									counter === indx + 1 ? `--show` : ``
								}`}
							>
								{itm.map(({ acf: dataItm }, dataIndx) => {
									return (
										<div
											key={`${dataIndx}`}
											className="home__features--highlights--addOns--recommended--imgWrapper"
										>
											{dataItm.image ? (
												<Image
													className="home__features--highlights--addOns--recommended--img"
													src={dataItm.image.url}
													layout="fill"
													objectFit="contain"
													alt="2eas"
												/>
											) : (
												<Image
													src={defaultImages}
													layout="fill"
													objectFit="contain"
													className="home__features--highlights--addOns--recommended--img"
													alt="defaultImages"
												/>
											)}
										</div>
									);
								})}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Features;
