import React from "react";
import Image from "next/image";
// import { useStaticQuery, graphql } from "gatsby";
// import Image from "gatsby-image";

// import img1 from "../../images/demo-eleven-image01.jpg";
// import img2 from "../../images/demo-eleven-image02.jpg";

// import img3 from "../../images/case-study-img-one.jpg";
// import img4 from "../../images/case-study-img-two.jpg";
// import img5 from "../../images/case-study-img-three.jpg";

import defaultImages from "../../images/defaultImages.png";

// const myGraphql = graphql`
// 	{
// 		HomepageAbout: wpPage(uri: { eq: "/" }) {
// 			homepage_cf {
// 				about {
// 					heading1
// 					description1
// 					heading2
// 					description2
// 					image1 {
// 						altText
// 						localFile {
// 							childImageSharp {
// 								fluid(quality: 100) {
// 									...GatsbyImageSharpFluid_noBase64
// 								}
// 							}
// 						}
// 					}
// 					image2 {
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
// 				overviews {
// 					heading
// 					subheading
// 				}
// 			}
// 		}
// 		HomepageAboutNodes: allWpAboutprojectAcf {
// 			nodes {
// 				homepage_aboutprojects_cpt {
// 					heading
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

const About = ({
	HomepageAbout,
	homePageAboutProjectsNodes,
	HomepageOverviews,
}) => {
	// const { HomepageAbout, HomepageAboutNodes } = useStaticQuery(myGraphql);

	return (
		<section className="home__about padding--sections container">
			<div className="home__about--solutions">
				<div className="home__about--solutions--row">
					<div className="home__about--solutions--row--content">
						<h2 className="home__about--solutions--row--content--heading">
							{HomepageAbout.heading1}
							{/* Solutions That`S Our Business */}
						</h2>
						<p className="home__about--solutions--row--content--description">
							{HomepageAbout.description1}
							{/* We, your trusted online professional accountants, are proudly
							serving local businesses and E-commerce businesses in the
							Philippines. We make accounting, bookkeeping, and taxation as
							simple and hassle free as possible for our clients. */}
						</p>
					</div>
					<div className="home__about--solutions--row--imgWrapper">
						{HomepageAbout.image1 ? (
							<Image
								className="home__about--solutions--row--img"
								src={HomepageAbout.image1.url}
								layout="fill"
								objectFit="cover"
								alt="2eas"
							/>
						) : (
							<Image
								className="home__about--solutions--row--img"
								src={defaultImages}
								layout="fill"
								objectFit="cover"
								alt="project2eas"
							/>
						)}
					</div>
				</div>
				<div className="home__about--solutions--row">
					<div className="home__about--solutions--row--imgWrapper">
						{HomepageAbout.image2 ? (
							<Image
								className="home__about--solutions--row--img"
								src={HomepageAbout.image2.url}
								layout="fill"
								objectFit="cover"
								alt="2eas"
							/>
						) : (
							<Image
								className="home__about--solutions--row--img"
								src={defaultImages}
								layout="fill"
								objectFit="cover"
								alt="project2eas"
							/>
						)}
					</div>
					<div className="home__about--solutions--row--content">
						<h2 className="home__about--solutions--row--content--heading">
							{HomepageAbout.heading2}
							{/* Your Business Accountants In The Top End! */}
						</h2>
						<p className="home__about--solutions--row--content--description">
							{HomepageAbout.description2}
							{/* Our dedicated team of CPAs has over 10 years of experience
							combined and have a wide range of expertise to help you with all
							your accounting needs, whatever they may be. You are in good hands
							with our professional accountants, tax consultant, and account
							manager. We can partner with you every step of the way. */}
						</p>
					</div>
				</div>
			</div>
			<div className="home__about--overviews">
				<div className="home__about--overviews--top">
					<h2 className="home__about--overviews--top--heading">
						{HomepageOverviews.heading}
						{/* Our Project Overviews */}
					</h2>
					<p className="home__about--overviews--top--subheading">
						{HomepageOverviews.subheading}
						{/* professionals can train you and your staff from setup, training,
						testing, finalization and go live on accounting system and tex
						system so that you get the most out of it. */}
					</p>
				</div>
				<div className="home__about--projects">
					<ul className="home__about--projects--lists">
						{homePageAboutProjectsNodes.map(({ acf: itm }, indx) => {
							return (
								<li key={`${indx}`} className="home__about--projects--items">
									<h2 className="home__about--projects--items--heading">
										{itm.heading}
									</h2>
									<div className="home__about--projects--items--imgWrapper">
										{itm.image ? (
											<Image
												className="home__about--projects--items--img"
												src={itm.image.url}
												layout="fill"
												objectFit="cover"
												alt="2eas"
											/>
										) : (
											<Image
												className="home__about--projects--items--img"
												src={defaultImages}
												layout="fill"
												objectFit="cover"
												alt="defaultImages"
											/>
										)}
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

export default About;
