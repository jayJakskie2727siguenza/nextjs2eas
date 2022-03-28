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

const ContactPage = ({ contactPageSlug, generalSettingSlug, generalSlug }) => {
	const { sitemetatitle, sitemetadescription } =
		contactPageSlug.acf.contactpage_seo;
	// const {
	// 	wpPage: { contactpage_cf },
	// } = useStaticQuery(myGraphql);

	return (
		<Layout
			Banner={generalSlug.acf.banner}
			FooterData={generalSlug.acf.footer}
			FooterGenSetting={generalSettingSlug.acf}
		>
			<Seo
				title={sitemetatitle}
				description={sitemetadescription}
				path="/contact"
				featuredImage={generalSettingSlug.acf.websiteicon.url}
				// sitemetadata={sitemetadata}
				// sitetitle={site_title}
			/>
			<Banner pages={"contact"} />
			<Content
				Contactpage={contactPageSlug.acf}
				ContactPageGeneralSettings={generalSettingSlug.acf}
			/>

			<CallToAction
				ctaData={generalSlug}
				ctaGeneralSettings={generalSettingSlug}
			/>
		</Layout>
	);
};

export default ContactPage;

export async function getStaticProps() {
	const contactPageSlug = await getWpPagesSlug("contact");
	const generalSettingSlug = await getWpPagesSlug("generalsettings");
	const generalSlug = await getWpPagesSlug("general");

	return {
		props: {
			contactPageSlug,
			generalSettingSlug,
			generalSlug,
		},
		revalidate: 10,
	};
}
