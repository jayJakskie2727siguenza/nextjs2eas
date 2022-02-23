import React from "react";
import Image from "next/image";
// import { useStaticQuery, graphql } from "gatsby";
// import Image from "gatsby-image";

import bgImg1 from "../../images/demo-eleven-background-blue.jpg";
import defaultImages from "../../images/defaultImages.png";

// import iconImg1 from "../../images/demo-eleven-icon-dark01.png";
// import iconImg2 from "../../images/demo-eleven-icon-dark02.png";
// import iconImg3 from "../../images/demo-eleven-icon-dark03.png";

// const myGraphql = graphql`
// 	{
// 		HomepageServices: wpPage(uri: { eq: "/" }) {
// 			homepage_cf {
// 				services
// 			}
// 		}
// 		HomepageServicesNodes: allWpServiceAcf(limit: 3) {
// 			nodes {
// 				homepage_services_cpt {
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
// 	}
// `;

const Service = ({ HomepageServices, homePageServicesNodes }) => {
	// const { HomepageServices, HomepageServicesNodes } = useStaticQuery(myGraphql);

	return (
		<div
			className="home__service padding--sections"
			style={{ backgroundImage: `url(${bgImg1.src})` }}
		>
			<div className="home__service--wrapper container">
				<h2 className="home__service--heading">
					{HomepageServices}
					{/* Our Services */}
				</h2>
				<div className="home__service--content">
					<ul className="home__service--content--lists">
						{homePageServicesNodes.map(({ acf: itm }, indx) => {
							return (
								<li key={`${indx}`} className="home__service--content--items">
									<div className="home__service--content--items--imgWrapper">
										{itm.image ? (
											<Image
												className="home__services__content--items--img"
												src={itm.image.url}
												layout="fill"
												objectFit="cover"
												alt="2eas"
											/>
										) : (
											<Image
												className="home__services__content--items--img"
												src={defaultImages}
												layout="fill"
												objectFit="cover"
												alt="defaultImages"
											/>
										)}
									</div>
									<div className="home__service--content--items--description">
										<h2 className="home__service--content--items--description--heading">
											{itm.heading}
										</h2>
										<p className="home__service--content--items--description--text">
											{itm.description}
										</p>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Service;
