import React from "react";
// import { useStaticQuery, graphql } from "gatsby";

import Seo from "../components/seo";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import CallToAction from "../components/CallToAction";
import Offer from "../components/Services/Offer";
import ListsOfOffer from "../components/Services/ListsOfOffer";
import {
	getWpPagesSlug,
	getCPTOffers,
	getCPTAcctngTaxations,
} from "../utils/wordpress";

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
	// // seoSettingSlug,
	servicesPageSlug,
	generalSettingSlug,
	generalSlug,
	servicesOffersNodes,
	acctngTxationNodes,
	servicesSlug,
}) => {
	const { sitemetatitle, sitemetadescription } =
		servicesPageSlug.acf.servicepage_seo;

	return (
		<Layout
			Banner={generalSlug.acf.banner}
			FooterData={generalSlug.acf.footer}
			FooterGenSetting={generalSettingSlug.acf}
		>
			<Seo
				title={sitemetatitle}
				description={sitemetadescription}
				path="/services"
				featuredImage={generalSettingSlug.acf.websiteicon.url}
				// sitemetadata={sitemetadata}
				// sitetitle={site_title}
			/>
			<Banner pages={"services"} />
			<Offer
				ServicePageOffer={servicesPageSlug.acf}
				ServiceOfferNodes={servicesOffersNodes}
			/>
			<ListsOfOffer
				listHeading={servicesSlug.acf.list_heading}
				listOfferNodes={acctngTxationNodes}
			/>
			<CallToAction
				ctaData={generalSlug}
				ctaGeneralSettings={generalSettingSlug}
			/>
		</Layout>
	);
};

export default ServicesPage;

export async function getStaticProps() {
	// const seoSettingSlug = await getWpPagesSlug("seosettings");
	const servicesPageSlug = await getWpPagesSlug("services");
	const generalSettingSlug = await getWpPagesSlug("generalsettings");
	const generalSlug = await getWpPagesSlug("general");
	const servicesOffersNodes = await getCPTOffers();
	const acctngTxationNodes = await getCPTAcctngTaxations();
	const servicesSlug = await getWpPagesSlug("services");

	return {
		props: {
			// seoSettingSlug,
			servicesPageSlug,
			generalSettingSlug,
			generalSlug,
			servicesOffersNodes,
			acctngTxationNodes,
			servicesSlug,
		},
		revalidate: 10, // In seconds
	};
}
