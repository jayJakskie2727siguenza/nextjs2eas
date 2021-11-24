import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

import defaultImage from "../../images/defaultImages.png";

const myGraphql = graphql`
	{
		AboutpageSolutions: wpPage(uri: { eq: "/about/" }) {
			aboutpage_cf {
				solutions {
					heading
					subheading
					description1
					description2
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

const Solutions = () => {
	const { AboutpageSolutions } = useStaticQuery(myGraphql);

	return (
		<section className="about__solutions padding--sections container">
			<div className="about__solutions--content">
				<h2 className="about__solutions--content--heading">
					{AboutpageSolutions.aboutpage_cf.solutions?.heading}
					{/* We Provide Online Accounting Solutions For Your Business! */}
				</h2>
				<p className="about__solutions--content--description">
					{AboutpageSolutions.aboutpage_cf.solutions?.description1}
					{/* Running a business can be hard and overwhelming. Most businesses fail
					due to poor financial management without proper accounting and
					taxation system. We`ve been there too, and solutions are our
					business.! We are an online professional services firm catering to the
					accounting and taxation needs of small-and-medium enterprises (SMEs),
					DFOs, accounting firms, and locally-based shared services centers. We
					provide the best solutions that are tailor-fit for your business. */}
				</p>

				<h2 className="about__solutions--content--subheading">
					{AboutpageSolutions.aboutpage_cf.solutions?.subheading}
					{/* What We Do? */}
				</h2>
				<p className="about__solutions--content--description">
					{AboutpageSolutions.aboutpage_cf.solutions?.description2}
					{/* We help you from SETUP, TRAINING, CONSULTATION and SUPPORT to move
					your finances online and reduce your accounting and taxing paperworks. */}
				</p>
			</div>
			<div className="about__solutions--imgWrapper">
				{AboutpageSolutions.aboutpage_cf.solutions.image ? (
					<Image
						fluid={
							AboutpageSolutions.aboutpage_cf.solutions.image.localFile
								.childImageSharp.fluid
						}
						className="about__solutions--img"
						alt={AboutpageSolutions.aboutpage_cf.solutions.image.altText}
					/>
				) : (
					<img
						src={defaultImage}
						className="about__solutions--img"
						alt="defaultImage"
					/>
				)}
			</div>
		</section>
	);
};

export default Solutions;
