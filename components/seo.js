import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
// import { Helmet } from "react-helmet";

function SEO({ description, lang, meta, title, featuredImage }) {
	return (
		<Head>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<title>{title}</title>

			<meta name="description" content={description} />
			{/* <link rel="canonical" href={`${process.env.DOMAIN}${path}`} /> */}
			<link rel="canonical" href={`${process.env.DOMAIN}`} />

			{/* Open Graph for social media link */}
			<meta property="og:title" content={title} key="title" />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			{/* <meta property="og:url" content={`${process.env.DOMAIN}${path}`} /> */}
			<meta property="og:url" content={`${process.env.DOMAIN}`} />
			<meta property="og:site_name" content={`${process.env.APP_NAME}`} />
			{/* <meta property="og:site_name" content={`${process.env.APP_NAME}`} /> */}

			<meta
				property="og:image"
				content={`https://2eas-1-629268.ingress-baronn.easywp.com/wp-content/uploads/2021/09/demo-eleven-banner-2.jpg`}
			/>
			<meta
				property="og:image:secure_url"
				content={`https://2eas-1-629268.ingress-baronn.easywp.com/wp-content/uploads/2021/09/demo-eleven-banner-2.jpg`}
			/>

			{/* https://2eas-1-629268.ingress-baronn.easywp.com/wp-content/uploads/2021/09/demo-eleven-banner-2.jpg */}
			<meta property="og:image:type" content="image/jpg" />
			<meta property="fb:app_id" content={`${process.env.FACEBOOK_APPID}`} />
			{/* <script
			  async
			  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4159099680789890"
			  crossorigin="anonymous"
		   ></script> */}
			{/* <script>(adsbygoogle = window.adsbygoogle || []).push({});</script> */}
		</Head>
	);

	// return (
	// 	<Helmet
	// 		htmlAttributes={{
	// 			lang,
	// 		}}
	// 		title={`${title} | ${sitetitle}`}
	// 		// title={`${title} | siteTitle`}
	// 		// titleTemplate={!title ? `%s | ${title}` : null}
	// 		titleTemplate={!title ? `%s | title` : null}
	// 		meta={[
	// 			{
	// 				name: `description`,
	// 				content: metaDescription,
	// 			},
	// 			{
	// 				property: `og:title`,
	// 				content: title,
	// 			},
	// 			{
	// 				property: `og:description`,
	// 				content: metaDescription,
	// 			},
	// 			{
	// 				property: `og:type`,
	// 				content: `website`,
	// 			},
	// 			{
	// 				name: `twitter:card`,
	// 				content: `summary`,
	// 			},
	// 			//  {
	// 			//    name: `twitter:creator`,
	// 			//    content: siteAuthor,
	// 			//  },
	// 			{
	// 				name: `twitter:title`,
	// 				content: title,
	// 			},
	// 			{
	// 				name: `twitter:description`,
	// 				content: metaDescription,
	// 			},
	// 		].concat(meta)}
	// 	/>
	// );
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
};

export default React.memo(SEO);
