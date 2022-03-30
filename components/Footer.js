import React, { useState, memo, useCallback, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

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

const NewsLetterForm = memo(
	({
		state,
		setState,
		status,
		message,
		onValidated,
		handleEmailInputChange,
	}) => {
		const handleSubmitForm = () => {
			setState({
				...state,
				loading: true,
			});

			console.log(message);

			if (state.email) {
				onValidated({ EMAIL: state.email });

				if (status === "success") {
					setState({
						...state,
						result: "success",
						loading: false,
					});
				}

				if (status === "error") {
					setState({
						...state,
						result: "error",
						loading: false,
					});
				}
			}

			if (!state.email) {
				setState({ ...state, result: "pending", loading: false });
			}
		};

		return (
			<div className="footer__right--content--cta">
				<div className="footer__right--content--cta--wrapper">
					<div className="footer__right--content--cta--inputWrapper">
						<input
							className={`footer__right--content--cta--inputWrapper--input${
								state.result === "pending" ? "--emptyField" : ""
							}`}
							type="email"
							name="email"
							value={state.email}
							placeholder={`${
								state.result === "pending"
									? "Your Field is Empty"
									: "Enter Your Email"
							}`}
							onChange={handleEmailInputChange}
						/>
					</div>
					<button
						type="submit"
						onClick={handleSubmitForm}
						className={`footer__right--content--cta--inputWrapper--btn${
							state.result === "error" ? "--error" : ""
						}`}
					>
						{state.result === "success"
							? "sent"
							: state.result === "error"
							? "error"
							: "submit"}
					</button>
				</div>
				<p className="footer__right--content--cta--status">
					{(state.result === "success" && "the email is successfully sent") ||
						(state.result === "error" && "the email is already exists")}
				</p>
			</div>
		);
	}
);

const Footer = ({ FooterData, FooterGenSetting }) => {
	const [state, setState] = useState({
		email: "",
		result: "",
		loading: false,
	});

	const handleEmailInputChange = useCallback(
		(e) => {
			e.preventDefault();
			setState({
				...state,
				[e.target.name]: e.target.value,
			});
		},
		[state.email]
	);

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

	function formatterPhilNumber(entry) {
		const match = String(entry)
			.replace(/\D+/g, "")
			.replace(/^1/, "")
			.match(/([^\d]*\d[^\d]*){1,10}$/)[0];
		const part1 = match.length > 2 ? `(${match.substring(0, 3)})` : match;
		const part2 = match.length > 3 ? ` ${match.substring(3, 6)}` : "";
		const part3 = match.length > 6 ? `-${match.substring(6, 10)}` : "";
		return `${part1}${part2}${part3}`;
	}

	console.log(typeof FooterGenSetting.contact.cellphone);

	return (
		<>
			<div className="footer padding--sections">
				<div className="footer__wrapper container">
					<div className="footer__left">
						<Link href="/" passHref>
							<div className="footer__left--imgWrapper">
								{FooterData.image ? (
									<Image
										className="footer__left--img"
										src={FooterData.image?.url}
										layout="fill"
										objectFit="contain"
										alt="2eas"
									/>
								) : (
									<Image
										src={defaultImage}
										className="footer__left--img"
										layout="fill"
										objectFit="contain"
										alt="defaultImage"
									/>
								)}
							</div>
						</Link>

						<div className="footer__left--content">
							<p className="footer__left--content--description">
								{FooterData.description}
							</p>
							<div className="footer__left--content--followUs">
								<p className="footer__left--content--followUs--text">
									follow us:
								</p>
								<div className="footer__left--content--followUs--socialMedia">
									<a
										href={`${FooterGenSetting.socialmedia.facebook}`}
										target="_blank"
										rel="noreferrer"
										// href=""
									>
										<div className="footer__left--content--followUs--socialMedia--iconWrapper">
											<FacebookFillIcon className="footer__left--content--followUs--socialMedia--icon" />
										</div>
									</a>
									<a
										href={`${FooterGenSetting.socialmedia.linkedin}`}
										target="_blank"
										rel="noreferrer"
										// href=""
									>
										<div className="footer__left--content--followUs--socialMedia--iconWrapper">
											<LinkedinFillIcon className="footer__left--content--followUs--socialMedia--icon" />
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="footer__middle">
						<h2 className="footer__middle--heading">company address</h2>
						<div className="footer__middle--content">
							<ul className="footer__middle--content--lists">
								{FooterGenSetting.address && (
									<li className="footer__middle--content--items">
										<div className="footer__middle--content--items--wrapper">
											<div className="footer__middle--content--items--iconWrapper">
												<FontAwesomeIcon
													className="footer__middle--content--items--icon"
													icon={faMapMarkerAlt}
												/>
											</div>
											<address className="footer__middle--content--items--text">
												{FooterGenSetting.address}
											</address>
										</div>
									</li>
								)}

								{FooterGenSetting.contact.telephone && (
									<li className="footer__middle--content--items">
										<a
											href={`tel:(083) ${formatterPhilNumber(
												FooterGenSetting.contact.telephone
											)}`}
										>
											<div className="footer__middle--content--items--wrapper">
												<div className="footer__middle--content--items--iconWrapper">
													<FontAwesomeIcon
														className="footer__middle--content--items--icon"
														icon={faPhone}
													/>
												</div>
												<p className="footer__middle--content--items--text">
													{FooterGenSetting.contact.telephone &&
														`
														${formatterPhilNumber(FooterGenSetting.contact.telephone)}
														`}
												</p>
											</div>
										</a>
									</li>
								)}

								{FooterGenSetting.contact.cellphone && (
									<li className="footer__middle--content--items">
										<a
											href={`tel:+${formatterPhilNumber(
												FooterGenSetting.contact.cellphone
											)}`}
										>
											<div className="footer__middle--content--items--wrapper">
												<div className="footer__middle--content--items--iconWrapper">
													<FontAwesomeIcon
														className="footer__middle--content--items--icon"
														icon={faMobileAlt}
													/>
												</div>
												<p className="footer__middle--content--items--text">
													{FooterGenSetting.contact.cellphone &&
														`${formatterPhilNumber(
															FooterGenSetting.contact.cellphone
														)}`}
												</p>
											</div>
										</a>
									</li>
								)}
								{FooterGenSetting.email && (
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
													{FooterGenSetting.email}
												</p>
											</div>
										</a>
									</li>
								)}
							</ul>
						</div>
					</div>
					<div className="footer__right">
						<h2 className="footer__right--heading">{FooterData.cta.heading}</h2>
						<div className="footer__right--content">
							<p className="footer__right--content--text">
								{FooterData.cta.description}
							</p>
							<MailchimpSubscribe
								url={process.env.MAILCHIMP}
								render={(props) => {
									const { subscribe, status, message } = props || {};

									return (
										<NewsLetterForm
											state={state}
											setState={setState}
											status={status}
											message={message}
											onValidated={(formData) => subscribe(formData)}
											handleEmailInputChange={handleEmailInputChange}
										/>
									);
								}}
							/>
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
