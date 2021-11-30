import React from "react";
// import { useStaticQuery, graphql } from "gatsby";

import Seo from "../components/seo";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import CallToAction from "../components/CallToAction";

import Solutions from "../components/About/Solutions";
import Goals from "../components/About/Goals";
import Achievements from "../components/About/Achievements";
import { getWpPagesSlug } from "../utils/wordpress";

// const myGraphql = graphql`
// 	{
// 		wpPage(uri: { eq: "/about/" }) {
// 			aboutpage_cf {
// 				aboutpageSeo {
// 					sitemetatitle
// 					sitemetadescription
// 				}
// 			}
// 		}
// 	}
// `;

const AboutPage = ({ seoSettingSlug, aboutPageSlug, generalSettingSlug }) => {
	const { sitemetadata } = seoSettingSlug.acf;
	const { sitemetatitle, sitemetadescription } =
		aboutPageSlug.acf.aboutpage_seo;
	const { site_title } = generalSettingSlug.acf;
	// const {
	// 	wpPage: { aboutpage_cf },
	// } = useStaticQuery(myGraphql);

	return (
		<Layout>
			<Seo
				// title="title"
				// description="description"
				// sitemetadata="sitemetadata"
				// sitetitle="sitetitle"
				title={sitemetatitle}
				description={sitemetadescription}
				sitemetadata={sitemetadata}
				sitetitle={site_title}
			/>
			<Banner pages={"about"} />
			<Solutions />
			<Goals />
			<Achievements />
			<CallToAction />
		</Layout>
	);
};

export default AboutPage;

export async function getStaticProps() {
	const seoSettingSlug = await getWpPagesSlug("seosettings");
	const aboutPageSlug = await getWpPagesSlug("about");
	const generalSettingSlug = await getWpPagesSlug("generalsettings");

	return {
		props: {
			seoSettingSlug,
			aboutPageSlug,
			generalSettingSlug,
		},
		revalidate: 10, // In seconds
	};
}
