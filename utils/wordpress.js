const BASE_URL = "http://nextjs2eas.local/wp-json/wp/v2";

export async function getWpPages() {
	const wpPagesRes = await fetch(BASE_URL + "/pages");
	const wpPages = await wpPagesRes.json();

	return wpPages;
}

export async function getCPTFeatures() {
	const cptFeaturesRes = await fetch(BASE_URL + "/features");
	const cptFeatures = await cptFeaturesRes.json();

	return cptFeatures;
}

export async function getCPTServices() {
	const cptServicesRes = await fetch(BASE_URL + "/services");
	const cptServices = await cptServicesRes.json();
	return cptServices;
}

export async function getCPTAboutProjects() {
	const cptAboutProjectsRes = await fetch(BASE_URL + "/aboutprojects");
	const cptAboutProjects = await cptAboutProjectsRes.json();

	return cptAboutProjects;
}

export async function getCPTHighlightFeatures() {
	const cptHighlightFeaturesRes = await fetch(BASE_URL + "/highlightfeatures");
	const cptHighlightFeatures = await cptHighlightFeaturesRes.json();
	return cptHighlightFeatures;
}

export async function getCPTAddons() {
	const cptAddonsRes = await fetch(BASE_URL + "/addons");
	const cptAddons = await cptAddonsRes.json();
	return cptAddons;
}

export async function getCPTGoals() {
	const cptGoalsRes = await fetch(BASE_URL + "/goals");
	const cptGoals = cptGoalsRes.json();
	return cptGoals;
}

export async function getCPTAchievements() {
	const cptAchievementsRes = await fetch(BASE_URL + "/achievements");
	const cptAchievements = await cptAchievementsRes.json();
	return cptAchievements;
}

export async function getCPTOffers() {
	const cptOffersRes = await fetch(BASE_URL + "/");
	const cptOffers = await cptOffersRes.json();
	return cptOffers;
}

export async function getCPTAcctngTaxations() {
	const cptAcctngTaxationsRes = await fetch(BASE_URL + "/acctng_taxation");
	const cptAcctngTaxations = await cptAcctngTaxationsRes.json();
	return cptAcctngTaxations;
}

// export async function getPosts() {
// 	const postsRes = await fetch(BASE_URL + "/posts");
// 	const posts = await postsRes.json();
// 	return posts;
// }

export async function getPost(slug) {
	const posts = await getPosts();
	const postArray = posts.filter((post) => post.slug == slug);
	const post = postArray.length > 0 ? postArray[0] : null;
	return post;
}
// export async function getEvents() {
// 	const eventsRes = await fetch(BASE_URL + "/events");
// 	const events = await eventsRes.json();
// 	return events;
// }

export async function getEvent(slug) {
	const events = await getEvents();
	const eventArray = events.filter((event) => event.slug == slug);
	const event = eventArray.length > 0 ? eventArray[0] : null;
	return event;
}

// export async function getSlugs(type) {
// 	let elements = [];
// 	switch (type) {
// 		case "posts":
// 			elements = await getPosts();
// 			break;
// 		case "events":
// 			elements = await getEvents();
// 			break;
// 	}
// 	const elementsIds = elements.map((element) => {
// 		return {
// 			params: {
// 				slug: element.slug,
// 			},
// 		};
// 	});
// 	return elementsIds;
// }

export async function getMedia() {
	const mediaRes = await fetch(BASE_URL + "/media");
	const media = await mediaRes.json();
	return media;
}

export function getFeaturedMedia(media, id) {
	const featuredMediaArray = media.filter((element) => element.id == id);
	return featuredMediaArray.length > 0 ? featuredMediaArray[0] : null;
}
