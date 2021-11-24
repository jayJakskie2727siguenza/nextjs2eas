import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Seo from "../components/seo";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import CallToAction from "../components/CallToAction";

import Content from "../components/Contact/Content";

const myGraphql = graphql`
	{
		wpPage(uri: { eq: "/contact/" }) {
			contactpage_cf {
				contactpageSeo {
					sitemetatitle
					sitemetadescription
				}
			}
		}
	}
`;

const ContactPage = () => {
	const {
		wpPage: { contactpage_cf },
	} = useStaticQuery(myGraphql);

	return (
		<Layout>
			<Seo
				// title="contact"
				title={contactpage_cf?.contactpageSeo.sitemetatitle}
				description={contactpage_cf?.contactpageSeo.sitemetadescription}
			/>
			<Banner pages={"contact"} />
			<Content />

			<CallToAction />
		</Layout>
	);
};

export default ContactPage;
