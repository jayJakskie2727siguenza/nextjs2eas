const path = require("path");
// const withSass = require("@zeit/next-sass");

module.exports = {
	reactStrictMode: true,
	images: {
		//enter the domain or subdomain where you have WordPress installed
		domains: [
			"nextjs2eas.local",
			"https://2eas-1-629268.ingress-baronn.easywp.com/graphql",
		],
	},
};

// module.exports = {
// 	sassOptions: {
// 		includePaths: [path.join(__dirname, "styles")],
// 	},
// };
// module.exports = withSass({
// 	cssModule: true,
// });
