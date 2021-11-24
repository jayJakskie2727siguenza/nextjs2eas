// import Head from "next/head";

import Seo from "../components/seo";

import Layout from "../components/Layout";
import Hero from "../components/Home/Hero";
import Why from "../components/Home/Why";
import Service from "../components/Home/Service";
import AboutSec from "../components/Home/AboutSec";
import Features from "../components/Home/Features";

import { getWpPagesSlug } from "../utils/wordpress";

export default function Home({ slugPages }) {
	// const jsxPosts = posts.map((post) => {
	// 	const featuredMediaId = post["featured_media"];
	// 	const featuredMedia = getFeaturedMedia(media, featuredMediaId);
	// 	return <Post post={post} featuredMedia={featuredMedia} key={post.id} />;
	// });

	// const jsxEvents = events.map((event) => {
	// 	return <Event event={event} key={event.id} />;
	// });
	console.log(slugPages);

	return (
		<Layout>
			<Seo
			// title="home"
			// title={homepage_cf?.homepageSeo.sitemetatitle}
			// description={homepage_cf?.homepageSeo.sitemetadescription}
			/>
			<Hero />
			<Why />
			<Service />
			<AboutSec />
			<Features />
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
	const slugPages = await getWpPagesSlug("home");

	return {
		props: {
			slugPages,
		},
		revalidate: 10, // In seconds
	};
}
