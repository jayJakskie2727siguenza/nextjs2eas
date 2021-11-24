import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Seo from "../components/seo";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import CallToAction from "../components/CallToAction";

import Solutions from "../components/About/Solutions";
import Goals from "../components/About/Goals";
import Achievements from "../components/About/Achievements";

const myGraphql = graphql`
	{
		wpPage(uri: { eq: "/about/" }) {
			aboutpage_cf {
				aboutpageSeo {
					sitemetatitle
					sitemetadescription
				}
			}
		}
	}
`;

const AboutPage = () => {
	const {
		wpPage: { aboutpage_cf },
	} = useStaticQuery(myGraphql);

	return (
		<Layout>
			<Seo
				// title="about"
				title={aboutpage_cf?.aboutpageSeo.sitemetatitle}
				description={aboutpage_cf?.aboutpageSeo.sitemetadescription}
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
