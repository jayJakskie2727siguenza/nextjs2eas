import React from "react";
import Image from "next/image";
// import { graphql, useStaticQuery } from "gatsby";
// import Image from "gatsby-image";

// import img1 from "../../images/DEMO-ELEVEN-ANALYZE-YOUR-BU.png";
import defaultImages from "../../images/defaultImages.png";

// const myGraphql = graphql`
// 	{
// 		ServicePageOffer: wpPage(uri: { eq: "/services/" }) {
// 			services_cf {
// 				heading
// 				description1
// 				description2
// 			}
// 		}
// 		ServicesPageOfferNodes: allWpOfferAcf(limit: 3) {
// 			nodes {
// 				servicespage_offer_cpt {
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

const Offer = ({ ServicePageOffer, ServiceOfferNodes }) => {
	// const { ServicePageOffer, ServicesPageOfferNodes } =
	// 	useStaticQuery(myGraphql);
	return (
		<section className="services__offer container padding--sections">
			<h2 className="services__offer--heading">
				{ServicePageOffer.heading}
				{/* We Offer Solutions You Need */}
			</h2>
			<div className="services__offer--descriptionWrapper">
				<p className="services__offer--description">
					{ServicePageOffer.description1}
					{/* We provide accounting system, taxation system, POS, Hr & payroll
					system, virtual staff outsourcing, and financial consultancy services
					that fit the needs of your local business here in the Philippines */}
				</p>
				<p className="services__offer--description">
					{ServicePageOffer.description2}
					{/* At 2E Accounting Solutions, we offer a broad suite of accounting
					taxation services for owners of small-and-medium businesses,
					accounting firms, CFOs of large corporations, and shared services
					centers around the world. We are passionately driven to help our
					clients simplify and improve their general accounting and tax
					functions. */}
				</p>
			</div>
			<ul className="services__offer--lists">
				{ServiceOfferNodes.map(({ acf: itm }, indx) => {
					return (
						<li key={`${indx}`} className="services__offer--items">
							<div className="services__offer--items--line">
								<div className="services__offer--items--line--fill"></div>
							</div>
							<div className="services__offer--items--content">
								<div className="services__offer--items--content--imgWrapper">
									{itm.image ? (
										<Image
											className="services__offer--items--content--img"
											src={itm.image?.url}
											layout="fill"
											objectFit="contain"
											alt="2eas"
										/>
									) : (
										<Image
											src={defaultImages}
											className="services__offer--items--content--img"
											layout="fill"
											objectFit="contain"
											alt="defaultImages"
										/>
									)}
								</div>
								<h2 className="services__offer--items--content--heading">
									{itm.heading}
								</h2>
								<p className="services__offer--items--content--description">
									{itm.description}
								</p>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Offer;
