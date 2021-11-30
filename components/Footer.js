import React, { useState, useEffect } from "react";
// import { Link } from "gatsby";

import Link from "next/link";
import Image from "next/image";

// import { Link, graphql, useStaticQuery } from "gatsby";
// import Image from "gatsby-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faMapMarkerAlt,
	faPhone,
	faEnvelope,
	// faMobile,
	faMobileAlt,
} from "@fortawesome/fontawesome-free-solid";

// import ArrowRightSFillIcon from "remixicon-react/ArrowRightSFillIcon";
import FacebookFillIcon from "remixicon-react/FacebookFillIcon";
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon";

// import addToMailChimp from "gatsby-plugin-mailchimp";

import defaultImage from "../images/defaultImages.png";

// const myGraphql = graphql`
// 	{
// 		FooterSection: wpPage(uri: { eq: "/generalsettings/" }) {
// 			general_cf {
// 				footer {
// 					description
// 					image {
// 						altText
// 						localFile {
// 							childImageSharp {
// 								fluid(quality: 100) {
// 									...GatsbyImageSharpFluid_noBase64
// 								}
// 							}
// 						}
// 					}
// 					cta {
// 						heading
// 						description
// 					}
// 				}
// 			}
// 			general_settings_cf {
// 				contact {
// 					cellphone
// 					telephone
// 				}
// 				address
// 				email
// 				socialmedia {
// 					facebook
// 					linkedin
// 				}
// 			}
// 		}
// 	}
// `;

const Footer = () => {
	// const { FooterSection } = useStaticQuery(myGraphql);
	const [telephoneNum, setTelephoneNum] = useState("");

	const [state, setState] = useState({
		email: "",
		result: "",
		loading: false,
	});

	// useEffect(() => {
	// 	setTelephoneNum(
	// 		handleFormattedTelNum(FooterSection.general_settings_cf.contact.telephone)
	// 	);
	// }, [FooterSection.general_settings_cf.contact.telephone]);

	const { email, result } = state;

	const handleEmailInputChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	// const submitButton = async (e) => {
	// 	e.preventDefault();
	// 	if (email) {
	// 		setState({
	// 			...state,
	// 			loading: true,
	// 		});

	// 		const status = await addToMailChimp(email);
	// 		// console.log(status);
	// 		if (status.result === "success") {
	// 			setState({
	// 				...state,
	// 				result: status.result,
	// 				loading: false,
	// 			});
	// 		} else {
	// 			setState({
	// 				...state,
	// 				result: status.result,
	// 				loading: false,
	// 			});
	// 		}
	// 	} else {
	// 		// console.log("The Field is Empty");
	// 		setState({
	// 			...state,
	// 			result: "pending",
	// 			loading: false,
	// 		});
	// 	}
	// };

	const handleFormattedTelNum = (getnum) => {
		return getnum
			.toString()
			.split("")
			.reduce((acc, itm, indx) => {
				if (indx === 3) {
					acc += `-${itm}`;
				} else {
					acc += `${itm}`;
				}

				return acc;
			}, "");
	};

	return (
		<>
			<div className="footer padding--sections">
				<div className="footer__wrapper container">
					<div className="footer__left">
						<Link href="/" passHref>
							<div className="footer__left--imgWrapper">
								{/* {FooterSection.general_cf.footer.image ? (
									<Image
										className="footer__left--img"
										fluid={
											FooterSection.general_cf.footer.image?.localFile
												.childImageSharp.fluid
										}
										alt={FooterSection.general_cf.footer.image?.altText}
									/>
								) : (
									<img
										src={defaultImage}
										className="footer__left--img"
										alt="defaultImage"
									/>
								)} */}
							</div>
						</Link>

						<div className="footer__left--content">
							<p className="footer__left--content--description">
								{/* {FooterSection.general_cf.footer?.description} */}
							</p>
							<div className="footer__left--content--followUs">
								<p className="footer__left--content--followUs--text">
									follow us:
								</p>
								<div className="footer__left--content--followUs--socialMedia">
									{/* <a
										href={`${FooterSection.general_settings_cf.socialmedia?.facebook}`}
										target="_blank"
										rel="noreferrer"
										// href=""
									>
										<div className="footer__left--content--followUs--socialMedia--iconWrapper">
											<FacebookFillIcon className="footer__left--content--followUs--socialMedia--icon" />
										</div>
									</a>
									<a
										href={`${FooterSection.general_settings_cf.socialmedia?.linkedin}`}
										target="_blank"
										rel="noreferrer"
										// href=""
									>
										<div className="footer__left--content--followUs--socialMedia--iconWrapper">
											<LinkedinFillIcon className="footer__left--content--followUs--socialMedia--icon" />
										</div>
									</a> */}
								</div>
							</div>
						</div>
					</div>
					<div className="footer__middle">
						<h2 className="footer__middle--heading">company address</h2>
						<div className="footer__middle--content">
							<ul className="footer__middle--content--lists">
								{/* {FooterSection.general_settings_cf.address && (
									<li className="footer__middle--content--items">
										<div className="footer__middle--content--items--wrapper">
											<div className="footer__middle--content--items--iconWrapper">
												<FontAwesomeIcon
													className="footer__middle--content--items--icon"
													icon={faMapMarkerAlt}
												/>
											</div>
											<address className="footer__middle--content--items--text">
												{FooterSection.general_settings_cf?.address}
											</address>
										</div>
									</li>
									////
								)} */}

								{/* {FooterSection.general_settings_cf.contact.telephone && (
									<li className="footer__middle--content--items">
										<a href={`tel:(083) ${telephoneNum}`}>
											<div className="footer__middle--content--items--wrapper">
												<div className="footer__middle--content--items--iconWrapper">
													<FontAwesomeIcon
														className="footer__middle--content--items--icon"
														icon={faPhone}
													/>
												</div>
												<p className="footer__middle--content--items--text">
													{FooterSection.general_settings_cf.contact
														.telephone && `(083) ${telephoneNum}`}
												</p>
											</div>
										</a>
									</li>
								)} */}

								{/* {FooterSection.general_settings_cf.contact.cellphone && (
									<li className="footer__middle--content--items">
										<a
											href={`tel:+${FooterSection.general_settings_cf.contact?.cellphone}`}
										>
											<div className="footer__middle--content--items--wrapper">
												<div className="footer__middle--content--items--iconWrapper">
													<FontAwesomeIcon
														className="footer__middle--content--items--icon"
														icon={faMobileAlt}
													/>
												</div>
												<p className="footer__middle--content--items--text">
													{FooterSection.general_settings_cf.contact
														.cellphone &&
														`+${FooterSection.general_settings_cf.contact.cellphone}`}
												</p>
											</div>
										</a>
									</li>
								)} */}
								{/* {FooterSection.general_settings_cf.email && (
									<li className="footer__middle--content--items">
										<a href="mailto:solutions.2eas@gmail.com">
											<div className="footer__middle--content--items--wrapper">
												<div className="footer__middle--content--items--iconWrapper">
													<FontAwesomeIcon
														className="footer__middle--content--items--icon"
														icon={faEnvelope}
													/>
												</div>
												<p className="footer__middle--content--items--text">
													{FooterSection.general_settings_cf?.email}
												</p>
											</div>
										</a>
									</li>
								)} */}
							</ul>
						</div>
					</div>
					<div className="footer__right">
						<h2 className="footer__right--heading">
							{/* {FooterSection.general_cf.footer.cta?.text} */}
						</h2>
						<div className="footer__right--content">
							<p className="footer__right--content--text">
								{/* {FooterSection.general_cf.footer.cta?.description} */}
							</p>
							<div className="footer__right--content--cta">
								<div className="footer__right--content--cta--inputWrapper">
									<input
										className={`footer__right--content--cta--inputWrapper--input${
											result === "pending" ? "--emptyField" : ""
										}`}
										type="email"
										name="email"
										value={state.email}
										placeholder={`${
											result === "pending"
												? "Your Field is Empty"
												: "Enter Your Email"
										}`}
										onChange={handleEmailInputChange}
									/>
								</div>
								<button
									disabled={false}
									// onClick={submitButton}
									onClick={() => console.log("click")}
									className={`footer__right--content--cta--inputWrapper--btn${
										result === "error" ? "--error" : ""
									}`}
								>
									{result === "success"
										? "sent"
										: result === "error"
										? "error"
										: "submit"}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__copyright">
				© 2020-2021 2E Accounting Solutions. All Rights Reserved. <br />
				Website Design By:{" "}
				<a href="https://greatweb.dev/" className="footer__copyright--a">
					Great Web
				</a>
			</div>
		</>
	);
};

export default Footer;
