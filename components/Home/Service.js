import React from "react";
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

const Service = ({ HomepageServices }) => {
	// const { HomepageServices, HomepageServicesNodes } = useStaticQuery(myGraphql);

	return (
		<div
			className="home__service padding--sections"
			style={{ backgroundImage: `url(${bgImg1})` }}
		>
			<div className="home__service--wrapper container">
				<h2 className="home__service--heading">
					{/* {HomepageServices.homepage_cf.services} */}
					Our Services
				</h2>
				<div className="home__service--content">
					<ul className="home__service--content--lists">
						{/* {HomepageServicesNodes.nodes.map(
							({ homepage_services_cpt: itm }, indx) => {
								return (
									<li key={`${indx}`} className="home__service--content--items">
										<div className="home__service--content--items--imgWrapper">
											{itm.image ? (
												<Image
													className="home__services__content--items--img"
													fluid={itm.image.localFile.childImageSharp.fluid}
													alt={itm.image.altText}
												/>
											) : (
												<img
													className="home__services__content--items--img"
													src={defaultImages}
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
							}
						)} */}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Service;
