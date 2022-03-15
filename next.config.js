// const path = require("path");
// const withSass = require("@zeit/next-sass");
// const withPWA = require("next-pwa");

let env = {};
let images = {};

if (process.env.NODE_ENV === "development") {
	(env = {
		APP_NAME: "2E Accounting Solution",
		DOMAIN: "http://localhost:3000/",
		FACEBOOK_APPID: "",
	}),
		(images = {
			//enter the domain or subdomain where you have WordPress installed
			// domains: ["nextjs2eas.local"],
			domains: ["2eas-1-629268.ingress-baronn.easywp.com"],
		});
} else {
	(env = {
		APP_NAME: "2E Accounting Solution",
		DOMAIN: "https://2eas.ph",
		FACEBOOK_APPID: "",
	}),
		(images = {
			//enter the domain or subdomain where you have WordPress installed
			// domains: ["nextjs2eas.local"],
			domains: ["2eas-1-629268.ingress-baronn.easywp.com"],
		});
}

module.exports = {
	env,
	images,
};

// module.exports = {
// 	reactStrictMode: true,
// 	env: {
// 		APP_NAME: "2E Accounting Solution",
// 		DOMAIN: "https://2eas.ph",
// 		FACEBOOK_APPID: "",
// 	},

// 	images: {
// 		//enter the domain or subdomain where you have WordPress installed
// 		// domains: ["nextjs2eas.local"],
// 		domains: ["2eas-1-629268.ingress-baronn.easywp.com"],
// 	},
// };

// module.exports = {
// 	sassOptions: {
// 		includePaths: [path.join(__dirname, "styles")],
// 	},
// };
// module.exports = withSass({
// 	cssModule: true,
// });
