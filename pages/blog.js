import React from "react";

import {
	getEvents,
	getMedia,
	getPosts,
	getFeaturedMedia,
} from "../utils/wordpress";

const Blog = ({ posts, events, media }) => {
	console.log(posts);
	const jsxPosts = posts?.map((post) => {
		const featuredMediaId = post["featured_media"];
		const featuredMedia = getFeaturedMedia(media, featuredMediaId);
		return <h1>hello</h1>;
	});
	return (
		<div>
			<h1>Welcome Blog</h1>
			{jsxPosts}
		</div>
	);
};

export default Blog;

// export async function getStaticProps({ params }) {
// 	const posts = await getPosts();
// 	const events = await getEvents();
// 	const media = await getMedia();

// 	return {
// 		props: {
// 			posts,
// 			events,
// 			media,
// 		},
// 		revalidate: 10, // In seconds
// 	};
// }
