// import Head from "next/head";
import React from "react";
import Seo from "../components/seo";

import Layout from "../components/Layout";
import Hero from "../components/Home/Hero";
import Why from "../components/Home/Why";
import Service from "../components/Home/Service";
import AboutSec from "../components/Home/AboutSec";
import Features from "../components/Home/Features";
import { getWpPagesSlug } from "../utils/wordpress";

export default function Home({
	seoSettingSlug,
	homePageSlug,
	generalSettingSlug,
}) {
	const { sitemetadata } = seoSettingSlug.acf;
	const { sitemetatitle, sitemetadescription } = homePageSlug.acf.homepage_seo;
	const { site_title } = generalSettingSlug.acf;

	// const jsxPosts = posts.map((post) => {
	// 	const featuredMediaId = post["featured_media"];
	// 	const featuredMedia = getFeaturedMedia(media, featuredMediaId);
	// 	return <Post post={post} featuredMedia={featuredMedia} key={post.id} />;
	// });

	// const jsxEvents = events.map((event) => {
	// 	return <Event event={event} key={event.id} />;
	// });

	return (
		<Layout>
			<Seo
				title={sitemetatitle}
				description={sitemetadescription}
				sitemetadata={sitemetadata}
				sitetitle={site_title}
			/>
			<Hero HomepageHero={homePageSlug.acf.hero} />
			<Why HomepageWhy={homePageSlug.acf.why} />
			<Service HomepageServices={homePageSlug.acf.services} />
			<AboutSec HomepageAbout={homePageSlug.acf.about} />
			<Features HomepageFeatures={homePageSlug.acf.features} />
		</Layout>
	);

	// return (
	// 	<>
	// 		<Head>
	// 			<title>Tech Blog</title>
	// 			<meta
	// 				name="description"
	// 				content="Keep up to date with the latest trends in tech"
	// 			/>
	// 			<link rel="icon" href="/favicon.ico" />
	// 			{/* You can add more metadata here, like open graph tags for social media, etc */}
	// 		</Head>

	// 		<div className="container pt-5">
	// 			<h1 className="text-center pb-5">Tech Blog</h1>
	// 			<div className="row">
	// 				<div className="col-lg-8">
	// 					<h2 className="pb-3">Our blog posts</h2>
	// 				</div>
	// 				<div className="col-lg-4">
	// 					<h2 className="pb-3">Events</h2>
	// 					{/* {jsxEvents} */}
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</>
	// );
}

export async function getStaticProps() {
	const seoSettingSlug = await getWpPagesSlug("seosettings");
	const homePageSlug = await getWpPagesSlug("home");
	const generalSettingSlug = await getWpPagesSlug("generalsettings");

	return {
		props: {
			seoSettingSlug,
			homePageSlug,
			generalSettingSlug,
		},
		revalidate: 10, // In seconds
	};
}
