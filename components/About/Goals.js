import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

// import goalImg1 from "../../images/Quality-2.png";
import defaultImages from "../../images/defaultImages.png";

const myGraphql = graphql`
	{
		AboutpageGoals: wpPage(uri: { eq: "/about/" }) {
			aboutpage_cf {
				goals
			}
		}
		AboutpageGoalsNodes: allWpGoalAcf(limit: 3) {
			nodes {
				aboutpage_goals_cpt {
					heading
					description
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
	}
`;

const Goals = () => {
	const { AboutpageGoals, AboutpageGoalsNodes } = useStaticQuery(myGraphql);

	return (
		<section className="about__goals container padding--sections">
			<div className="about__goals--wrapper">
				<h2 className="about__goals--heading">
					{AboutpageGoals.aboutpage_cf.goals}
					{/* What Makes Us Different? */}
				</h2>
				<div className="about__goals--content">
					<ul className="about__goals--content--lists">
						{AboutpageGoalsNodes.nodes?.map(
							({ aboutpage_goals_cpt: itm }, indx) => {
								return (
									<li key={`${indx}`} className="about__goals--content--items">
										<div className="about__goals--content--items--imgWrapper">
											{itm.image ? (
												<Image
													className="about__goals--content--items--img"
													fluid={itm.image.localFile.childImageSharp.fluid}
													alt={itm.image.altText}
												/>
											) : (
												<img
													src={defaultImages}
													className="about__goals--content--items--img"
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
							}
						)}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Goals;
