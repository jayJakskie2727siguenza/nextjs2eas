import React from "react";
import Image from "next/image";
// import { graphql, useStaticQuery } from "gatsby";
// import Image from "gatsby-image";

// import img1 from "../../images/Years.png";
import defaultImages from "../../images/defaultImages.png";

// const myGraphql = graphql`
// 	{
// 		AboutpageAchievement: allWpAchievementAcf(limit: 3) {
// 			nodes {
// 				aboutpage_achievement_cpt {
// 					text
// 					highlight
// 					number
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

const Achievements = ({ AboutPageAchievementsNodes }) => {
	// const { AboutpageAchievement } = useStaticQuery(myGraphql);

	return (
		<section className="about__achievement">
			<div className="about__achievement--wrapper container">
				<ul className="about__achievement--lists">
					{AboutPageAchievementsNodes.map(({ acf: itm }, indx) => {
						return (
							<li key={`${indx}`} className="about__achievement--items">
								<div className="about__achievement--items--imgWrapper">
									{itm.image ? (
										<Image
											className="about__achievement--items--img"
											src={itm.image?.url}
											layout="fill"
											objectFit="contain"
											alt="bahay renta"
										/>
									) : (
										<Image
											src={defaultImages}
											className="about__achievement--items--img"
											layout="fill"
											objectFit="contain"
											alt="defaultImage"
										/>
									)}
								</div>
								<div className="about__achievement--items--content">
									<h2 className="about__achievement--items--content--numbers">
										{itm.number}
									</h2>
									<p className="about__achievement--items--content--titles">
										{itm.highlight}
									</p>
									<p className="about__achievement--items--content--accomplishment">
										{itm.text}
									</p>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default Achievements;
