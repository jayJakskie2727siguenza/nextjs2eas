import React from "react";
// import { useStaticQuery, graphql } from "gatsby";

import Seo from "../components/seo";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import CallToAction from "../components/CallToAction";

import Solutions from "../components/About/Solutions";
import Goals from "../components/About/Goals";
import Achievements from "../components/About/Achievements";
import {
	getWpPagesSlug,
	getCPTGoals,
	getCPTAchievements,
} from "../utils/wordpress";

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

const AboutPage = ({
	aboutPageSlug,
	generalSettingSlug,
	aboutPageGoalsNodes,
	aboutPageAchievementsNodes,
	generalSlug,
}) => {
	const { sitemetatitle, sitemetadescription } =
		aboutPageSlug.acf.aboutpage_seo;

	// const {
	// 	wpPage: { aboutpage_cf },
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
				path="/about"
				featuredImage={generalSettingSlug.acf.websiteicon.url}
			/>
			<Banner pages={"about"} />
			<Solutions AboutpageSolutions={aboutPageSlug.acf.solutions} />
			<Goals
				AboutpageGoals={aboutPageSlug.acf.goals}
				AboutPageGoalsNodes={aboutPageGoalsNodes}
			/>
			<Achievements AboutPageAchievementsNodes={aboutPageAchievementsNodes} />
			<CallToAction
				ctaData={generalSlug}
				ctaGeneralSettings={generalSettingSlug}
			/>
		</Layout>
	);
};

export default AboutPage;

export async function getStaticProps() {
	const aboutPageSlug = await getWpPagesSlug("about");
	const generalSettingSlug = await getWpPagesSlug("generalsettings");
	const aboutPageGoalsNodes = await getCPTGoals();
	const aboutPageAchievementsNodes = await getCPTAchievements();
	const generalSlug = await getWpPagesSlug("general");

	return {
		props: {
			aboutPageSlug,
			generalSettingSlug,
			aboutPageGoalsNodes,
			aboutPageAchievementsNodes,
			generalSlug,
		},
		revalidate: 10, // In seconds
	};
}
