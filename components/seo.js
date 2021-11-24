import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

function SEO({ description, lang, meta, title }) {
	//  const { generalSettings, seoSettings } = useStaticQuery(
	//      graphql`
	//          {
	//              seoSettings: wpPage(slug: { eq: "seosettings" }) {
	//                  seo_cf {
	//                      sitemetadata {
	//                          description
	//                          title
	//                      }
	//                  }
	//              }
	//              generalSettings: wpPage(uri: { eq: "/generalsettings/" }) {
	//                  general_settings_cf {
	//                      siteTitle
	//                  }
	//              }
	//          }
	//      `
	//  );

	// const metaDescription =
	// 	description || seoSettings.seo_cf.sitemetadata.description;
	const metaDescription = description || "sitetitle";

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			// title={`${title} | ${generalSettings.general_settings_cf.siteTitle}`}
			title={`${title} | siteTitle`}
			// titleTemplate={
			// 	!title ? `%s | ${seoSettings.seo_cf.sitemetadata.title}` : null
			// }
			titleTemplate={!title ? `%s | title` : null}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				//  {
				//    name: `twitter:creator`,
				//    content: siteAuthor,
				//  },
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			].concat(meta)}
		/>
	);
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

export default SEO;
