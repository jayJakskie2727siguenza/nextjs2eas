import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					{/* Global Site Tag (gtag.js) - Google Analytics */}

					<script
						async
						src="https://www.googletagmanager.com/gtag/js?id=UA-228056257-1"
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
                                 window.dataLayer = window.dataLayer || [];
                                 function gtag(){dataLayer.push(arguments);}
                                 gtag('js', new Date());
                                 gtag('config', 'UA-228056257-1');
                                `,
						}}
					/>
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							"@context": "http://www.schema.org",
							"@type": "AccountingService",
							name: "2E Accounting Solutions",
							logo: "https://www.2eas.ph/_next/image?url=https%3A%2F%2F2eas-1-629268.ingress-baronn.easywp.com%2Fwp-content%2Fuploads%2F2021%2F09%2F2EAS-LOGO-3.png&w=3840&q=75",
							priceRange: "$$",
							description:
								"2E Accounting Solutions is the leading accounting firm in the Philippines providing accounting consultancy, outsourcing remote staff, taxation, or bookkeeping services. We also offer Accounting Software & Taxation Systems for local businesses and e-commerce businesses.\n",
							address: {
								"@type": "PostalAddress",
								streetAddress: "21 Apple Street, Barangay Dadiangas North",
								addressLocality: "General Santos City",
								addressRegion: "South Cotabato",
								postalCode: "9500",
								addressCountry: "Philippines",
							},
							geo: {
								"@type": "GeoCoordinates",
								latitude: "6.1175446",
								longitude: "125.1635562",
							},
							hasMap:
								"https://www.google.com/maps?cid=11361407447807399369&_ga=2.188380207.603980927.1651622499-582430681.1629164215",
							openingHours:
								"Mo 08:30-17:30 Tu 08:30-17:30 We 08:30-17:30 Th 08:30-17:30 Fr 08:30-17:30",
							telephone: "+63 945 813 0917",
						}}
					/>
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
