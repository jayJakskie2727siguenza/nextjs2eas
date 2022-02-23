import React from "react";
import Image from "next/image";
// import { graphql, useStaticQuery } from "gatsby";
// import Image from "gatsby-image";

// import goalImg1 from "../../images/Quality-2.png";
import defaultImages from "../../images/defaultImages.png";

// const myGraphql = graphql`
// 	{
// 		AboutpageGoals: wpPage(uri: { eq: "/about/" }) {
// 			aboutpage_cf {
// 				goals
// 			}
// 		}
// 		AboutpageGoalsNodes: allWpGoalAcf(limit: 3) {
// 			nodes {
// 				aboutpage_goals_cpt {
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

const Goals = ({ AboutpageGoals, AboutPageGoalsNodes }) => {
	// const { AboutpageGoals, AboutpageGoalsNodes } = useStaticQuery(myGraphql);
	return (
		<section className="about__goals container padding--sections">
			<div className="about__goals--wrapper">
				<h2 className="about__goals--heading">
					{AboutpageGoals}
					{/* What Makes Us Different? */}
				</h2>
				<div className="about__goals--content">
					<ul className="about__goals--content--lists">
						{AboutPageGoalsNodes.map(({ acf: itm }, indx) => {
							return (
								<li key={`${indx}`} className="about__goals--content--items">
									<div className="about__goals--content--items--imgWrapper">
										{itm.image ? (
											<Image
												className="about__goals--content--items--img"
												src={itm.image?.url}
												layout="fill"
												objectFit="contain"
												alt="2eas"
											/>
										) : (
											<Image
												src={defaultImages}
												className="about__goals--content--items--img"
												layout="fill"
												objectFit="contain"
												alt="defaultImages"
											/>
										)}
									</div>
									<div className="about__goals--content--items--content">
										<h2 className="about__goals--content--items--content--heading">
											{itm.heading}
										</h2>
										<p className="about__goals--content--items--content--description">
											{itm.description}
										</p>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Goals;
