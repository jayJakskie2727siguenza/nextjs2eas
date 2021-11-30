import React from "react";
// import { useStaticQuery, graphql } from "gatsby";

import Seo from "../components/seo";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import CallToAction from "../components/CallToAction";
import Offer from "../components/Services/Offer";
import ListsOfOffer from "../components/Services/ListsOfOffer";
import { getWpPagesSlug } from "../utils/wordpress";

// const myGraphql = graphql`
// 	{
// 		wpPage(uri: { eq: "/services/" }) {
// 			services_cf {
// 				servicepageSeo {
// 					sitemetadescription
// 					sitemetatitle
// 				}
// 			}
// 		}
// 	}
// `;

const ServicesPage = ({
	seoSettingSlug,
	servicesPageSlug,
	generalSettingSlug,
}) => {
	const { sitemetadata } = seoSettingSlug.acf;
	const { sitemetatitle, sitemetadescription } =
		servicesPageSlug.acf.servicepage_seo;
	const { site_title } = generalSettingSlug.acf;
	// const {
	// 	wpPage: { services_cf },
	// } = useStaticQuery(myGraphql);

	return (
		<Layout>
			<Seo
				title={sitemetatitle}
				description={sitemetadescription}
				sitemetadata={sitemetadata}
				sitetitle={site_title}
			/>
			<Banner pages={"services"} />
			<Offer />
			<ListsOfOffer />
			<CallToAction />
		</Layout>
	);
};

export default ServicesPage;

export async function getStaticProps() {
	const seoSettingSlug = await getWpPagesSlug("seosettings");
	const servicesPageSlug = await getWpPagesSlug("services");
	const generalSettingSlug = await getWpPagesSlug("generalsettings");

	return {
		props: {
			seoSettingSlug,
			servicesPageSlug,
			generalSettingSlug,
		},
		revalidate: 10, // In seconds
	};
}
