import Head from "next/head";

import { getWpPages } from "../utils/wordpress";

export default function Home({ pages }) {
	// const jsxPosts = posts.map((post) => {
	// 	const featuredMediaId = post["featured_media"];
	// 	const featuredMedia = getFeaturedMedia(media, featuredMediaId);
	// 	return <Post post={post} featuredMedia={featuredMedia} key={post.id} />;
	// });

	// const jsxEvents = events.map((event) => {
	// 	return <Event event={event} key={event.id} />;
	// });
	console.log(pages);

	return (
		<>
			<Head>
				<title>Tech Blog</title>
				<meta
					name="description"
					content="Keep up to date with the latest trends in tech"
				/>
				<link rel="icon" href="/favicon.ico" />
				{/* You can add more metadata here, like open graph tags for social media, etc */}
			</Head>

			<div className="container pt-5">
				<h1 className="text-center pb-5">Tech Blog</h1>
				<div className="row">
					<div className="col-lg-8">
						<h2 className="pb-3">Our blog posts</h2>
					</div>
					<div className="col-lg-4">
						<h2 className="pb-3">Events</h2>
						{/* {jsxEvents} */}
					</div>
				</div>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const pages = await getWpPages();
	// const events = await getEvents();
	// const media = await getMedia();

	return {
		props: {
			pages,
		},
		revalidate: 10, // In seconds
	};
}
