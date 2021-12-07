import React from "react";
// import { graphql, useStaticQuery } from "gatsby";

// const myGraphql = graphql`
// 	{
// 		Bannercta: wpPage(uri: { eq: "/general/" }) {
// 			general_cf {
// 				banner {
// 					cta {
// 						description
// 						button
// 					}
// 				}
// 			}
// 		}
// 	}
// `;

const CTA = ({ ctaData, ctaGeneralSettings }) => {
	// const { Bannercta } = useStaticQuery(myGraphql);

	return (
		<section className="cta padding--sections">
			<div className="cta__wrapper container">
				<p className="cta__description">
					{ctaData?.acf.banner.cta.description}
				</p>
				<a href={`tel:+${ctaGeneralSettings?.acf.contact.cellphone}`}>
					<button className="cta__btn btn btn__primary">
						{ctaData?.acf.banner.cta.button}
					</button>
				</a>
			</div>
		</section>
	);
};

export default CTA;
