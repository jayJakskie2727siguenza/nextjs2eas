import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/fontawesome-free-solid";

// import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

// const myGraphql = graphql`
// 	{
// 		ServicepageListsOffer: wpPage(uri: { eq: "/services/" }) {
// 			services_cf {
// 				listHeading
// 			}
// 		}
// 		ServicepageListsOfferNodes: allWpAcctngTaxationAcf {
// 			nodes {
// 				servicespage_acctngtaxation_cpt {
// 					text
// 				}
// 			}
// 		}
// 	}
// `;

const ListsOfOffer = ({ listOfferNodes, listHeading }) => {
	// const { ServicepageListsOffer, ServicepageListsOfferNodes } =
	// 	useStaticQuery(myGraphql);
	console.log(listHeading);
	return (
		<section className="services__listWrapper container padding--sections">
			<h2 className="services__listWrapper--heading">
				{listHeading}
				{/* Accounting &
				Taxation Solutions */}
			</h2>
			<ul className="services__listWrapper--lists">
				{listOfferNodes.map(({ acf: itm }, indx) => {
					return (
						<li key={`${indx}`} className="services__listWrapper--items">
							<div className="services__listWrapper--items--iconWrapper">
								<FontAwesomeIcon
									className="services__listWrapper--items--icon"
									icon={faCheck}
								/>
							</div>
							<p className="services__listWrapper--items--name">{itm.text}</p>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default ListsOfOffer;
