// const path = require("path");
// const withSass = require("@zeit/next-sass");

module.exports = {
	reactStrictMode: true,
	APP_NAME: "2E Accounting Solution",
	DOMAIN: "https://2eas.ph",
	FACEBOOK_APPID: "",
	images: {
		//enter the domain or subdomain where you have WordPress installed
		// domains: ["nextjs2eas.local"],
		domains: ["2eas-1-629268.ingress-baronn.easywp.com"],
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
