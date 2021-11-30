import React from "react";
// import { useStaticQuery, graphql } from "gatsby";

import Seo from "../components/seo";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import CallToAction from "../components/CallToAction";

import Content from "../components/Contact/Content";
import { getWpPagesSlug } from "../utils/wordpress";

// const myGraphql = graphql`
// 	{
// 		wpPage(uri: { eq: "/contact/" }) {
// 			contactpage_cf {
// 				contactpageSeo {
// 					sitemetatitle
// 					sitemetadescription
// 				}
// 			}
// 		}
// 	}
// `;

const ContactPage = ({
	seoSettingSlug,
	contactPageSlug,
	generalSettingSlug,
}) => {
	const { sitemetadata } = seoSettingSlug.acf;
	const { sitemetatitle, sitemetadescription } =
		contactPageSlug.acf.contactpage_seo;
	const { site_title } = generalSettingSlug.acf;
	// const {
	// 	wpPage: { contactpage_cf },
	// } = useStaticQuery(myGraphql);

	return (
		<Layout>
			<Seo
				title={sitemetatitle}
				description={sitemetadescription}
				sitemetadata={sitemetadata}
				sitetitle={site_title}
			/>
			<Banner pages={"contact"} />
			<Content />

			<CallToAction />
		</Layout>
	);
};

export default ContactPage;

export async function getStaticProps() {
	const seoSettingSlug = await getWpPagesSlug("seosettings");
	const contactPageSlug = await getWpPagesSlug("contact");
	const generalSettingSlug = await getWpPagesSlug("generalsettings");

	return {
		props: {
			seoSettingSlug,
			contactPageSlug,
			generalSettingSlug,
		},
		revalidate: 10, // In seconds
	};
}
