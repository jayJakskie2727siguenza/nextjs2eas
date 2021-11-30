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

const CTA = () => {
	// const { Bannercta } = useStaticQuery(myGraphql);

	return (
		<section className="cta padding--sections">
			<div className="cta__wrapper container">
				<p className="cta__description">
					{/* {Bannercta.general_cf.banner.cta?.description} */}
				</p>
				<a href="tel:+63 917 421 9688">
					<button className="cta__btn btn btn__primary">
						{/* {Bannercta.general_cf.banner.cta?.button} */}
					</button>
				</a>
			</div>
		</section>
	);
};

export default CTA;
