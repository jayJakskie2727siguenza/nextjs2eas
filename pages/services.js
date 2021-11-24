import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Seo from "../components/seo";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import CallToAction from "../components/CallToAction";
import Offer from "../components/Services/Offer";
import ListsOfOffer from "../components/Services/ListsOfOffer";

const myGraphql = graphql`
	{
		wpPage(uri: { eq: "/services/" }) {
			services_cf {
				servicepageSeo {
					sitemetadescription
					sitemetatitle
				}
			}
		}
	}
`;

const ServicesPage = () => {
	const {
		wpPage: { services_cf },
	} = useStaticQuery(myGraphql);

	return (
		<Layout>
			<Seo
				// title="services"
				title={services_cf?.servicepageSeo.sitemetatitle}
				description={services_cf?.servicepageSeo.sitemetadescription}
			/>
			<Banner pages={"services"} />
			<Offer />
			<ListsOfOffer />
			<CallToAction />
		</Layout>
	);
};

export default ServicesPage;
