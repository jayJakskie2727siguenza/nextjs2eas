import React, { useState } from "react";
// import { graphql, useStaticQuery } from "gatsby";

import gif1 from "../../images/thankYouMessage.gif";
import gif2 from "../../images/messages.gif";

// const myGraphql = graphql`
// 	{
// 		Contactpage: wpPage(uri: { eq: "/contact/" }) {
// 			contactpage_cf {
// 				heading
// 				form {
// 					heading
// 					subheading
// 				}
// 			}
// 		}
// 		ContactPageGeneralSettings: wpPage(uri: { eq: "/generalsettings/" }) {
// 			general_settings_cf {
// 				contact {
// 					cellphone
// 				}
// 				address
// 				email
// 			}`
// 		}
// 	}
// `;

const Content = ({ Contactpage, ContactPageGeneralSettings }) => {
	// const { Contactpage, ContactPageGeneralSettings } = useStaticQuery(myGraphql);

	// const formspree = "https://formspree.io/projects/1560816072481832146";
	const formspree = "https://formspree.io/f/xnqlrboe";

	const [contact, setContact] = useState({
		FullName: "",
		Email: "",
		Telephone: "",
		Company: "",
		ContactFormMessage: "",
		loading: false,
		error: false,
		buttonDisabled: true,
		submited: false,
	});

	const handleChange = (e) => {
		if (
			contact.FullName === "" ||
			contact.Email === "" ||
			contact.Telephone === "" ||
			contact.Company === "" ||
			contact.ContactFormMessage === ""
		) {
			setContact({
				...contact,
				[e.target.name]: e.target.value,
				buttonDisabled: true,
			});
		} else {
			setContact({
				...contact,
				[e.target.name]: e.target.value,
				buttonDisabled: false,
			});
			if (contact.submited) {
				setContact({
					...contact,
					FullName: "",
					Email: "",
					Telephone: "",
					Company: "",
					ContactFormMessage: "",
					submited: false,
				});
			}
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setContact({ ...contact, loading: true });
		if (
			contact.FullName === "" ||
			contact.Email === "" ||
			contact.Telephone === "" ||
			contact.Company === "" ||
			contact.ContactFormMessage === ""
		) {
			setContact({ ...contact, error: true });
			alert("You Cannot By Pass The Form");
		} else {
			const form = e.target;
			const data = new FormData(form);
			const xhr = new XMLHttpRequest();
			xhr.open(form.method, formspree);
			xhr.setRequestHeader("Accept", "application/json");
			xhr.onreadystatechange = () => {
				if (xhr.readyState !== XMLHttpRequest.DONE) return;
				if (xhr.status === 200) {
					form.reset();

					setTimeout(() => {
						setContact({
							...contact,
							submited: true,

							loading: false,
						});
					}, 3000);

					console.log("Successfully Submitted");
				} else {
					setContact({ ...contact, error: true });
					console.log("Message Failed to Send");
				}
			};
			xhr.send(data);
		}
	};

	return (
		<>
			<section className="contact__content container padding--sections">
				<div className="contact__content--info">
					<div className="contact__content--info--wrapper">
						<h2 className="contact__content--info--heading">
							{Contactpage.heading}
							{/* Contact Us */}
						</h2>
						<h2 className="contact__content--info--subheading">
							{ContactPageGeneralSettings.contact.cellphone &&
								`+${ContactPageGeneralSettings.contact.cellphone}`}
						</h2>
					</div>
					<p className="contact__content--info--address">
						{ContactPageGeneralSettings.address}
					</p>
					<p className="contact__content--info--email">
						{ContactPageGeneralSettings.email}
					</p>
				</div>
				<div className="contact__content--cta">
					<h2 className="contact__content--cta--heading">
						{Contactpage.form.heading}
						{/* We Love To Hear From You */}
					</h2>
					<p className="contact__content--cta--info">
						{Contactpage.form.subheading}
						{/* Please call or email contact form and we will be happy to assist */}
						you.
					</p>
					<div className="contact__content--cta--formWrapper">
						<form
							className={`contact__content--cta--form ${
								contact.loading
									? "opacity-hide"
									: contact.submited
									? "opacity-hide"
									: "opacity-show"
							}`}
							method="POST"
							onSubmit={handleSubmit}
						>
							<div className="contact__content--cta--form--inputGroup">
								<div className="contact__content--cta--form--inputWrapper">
									<input
										type="text"
										className="contact__content--cta--form--input"
										placeholder="Full Name"
										name="FullName"
										id="fName"
										value={contact.FullName}
										onChange={handleChange}
									/>
									<div
										className={`contact__content--cta--form--inputWrapper--line${
											!contact.FullName ? "--disabled" : ""
										}`}
									>
										<div className="contact__content--cta--form--inputWrapper--line--fill"></div>
									</div>
								</div>
								<div className="contact__content--cta--form--inputWrapper">
									<input
										type="email"
										className="contact__content--cta--form--input"
										placeholder="Email Address"
										name="Email"
										id="cEmail"
										value={contact.Email}
										onChange={handleChange}
									/>
									<div
										className={`contact__content--cta--form--inputWrapper--line${
											!contact.Email ? "--disabled" : ""
										}`}
									>
										<div className="contact__content--cta--form--inputWrapper--line--fill"></div>
									</div>
								</div>
								<div className="contact__content--cta--form--inputWrapper">
									<input
										type="tel"
										className="contact__content--cta--form--input"
										placeholder="Your Phone"
										name="Telephone"
										id="cTel"
										value={contact.Telephone}
										onChange={handleChange}
									/>
									<div
										className={`contact__content--cta--form--inputWrapper--line${
											!contact.Telephone ? "--disabled" : ""
										}`}
									>
										<div className="contact__content--cta--form--inputWrapper--line--fill"></div>
									</div>
								</div>
								<div className="contact__content--cta--form--inputWrapper">
									<input
										type="text"
										className="contact__content--cta--form--input"
										placeholder="Your Company"
										name="Company"
										id="cCompany"
										value={contact.Company}
										onChange={handleChange}
									/>
									<div
										className={`contact__content--cta--form--inputWrapper--line${
											!contact.Company ? "--disabled" : ""
										}`}
									>
										<div className="contact__content--cta--form--inputWrapper--line--fill"></div>
									</div>
								</div>
							</div>
							<div className="contact__content--cta--form--inputWrapper">
								<textarea
									className="contact__content--cta--form--textarea"
									placeholder="Message :"
									name="ContactFormMessage"
									id="cTextarea"
									onChange={handleChange}
									value={contact.ContactFormMessage}
								/>
								<div
									className={`contact__content--cta--form--inputWrapper--line${
										!contact.ContactFormMessage ? "--disabled" : ""
									}`}
								>
									<div className="contact__content--cta--form--inputWrapper--line--fill"></div>
								</div>
							</div>
							<button
								type="submit"
								disabled={contact.buttonDisabled}
								className={`btn__warning  ${
									!contact.FullName ||
									!contact.Telephone ||
									!contact.Email ||
									!contact.Company ||
									!contact.ContactFormMessage
										? "btnDisabled"
										: "btnHoveringFloat"
								}`}
							>
								{contact.buttonDisabled
									? "Fill Up The Form"
									: contact.error
									? "Network Error"
									: "Submit"}{" "}
							</button>
						</form>
						<div
							className={`contact__content--cta--formWrapper--submitted ${
								contact.submited ? `opacity-show` : `opacity-hide`
							}`}
						>
							{/* <div className="contact__content--cta--formWrapper--submitted--imgWrapper">
								<img
									src={contact.submited ? gif1 : ""}
									className="contact__content--cta--formWrapperf--submitted--img"
									alt="project2eas"
								/>
							</div> */}
							<h2
								className={`contact__content--cta--formWrapper--submitted--message ${
									contact.submitted ? "displayNone" : ""
								}`}
							>
								thank you for submitting
							</h2>
						</div>
						<div
							className={`contact__content--cta--formWrapper--sent ${
								contact.loading
									? "opacity-show"
									: contact.submited
									? "opacity-hide"
									: "opacity-hide"
							}`}
						>
							{/* <div className="contact__content--cta--formWrapper--sent--imgWrapper">
								<img
									src={contact.loading ? gif2 : ""}
									className="contact__content--cta--formWrapper--sent--img"
									alt="project2eas"
								/>
							</div> */}
							<h2
								className={`contact__content--cta--formWrapper--sent--message ${
									contact.loading ? "" : "displayNone"
								}`}
							>
								message sent
							</h2>
						</div>
					</div>
				</div>
			</section>
			<div className="contact__wrapper container padding--sections">
				<iframe
					title="contact Map"
					className="contact__wrapper--map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.097694952066!2d125.16136751456224!3d6.117549929446972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f79ff71097470f%3A0x9dabd3e0e30995c9!2s2E%20Accounting%20Solutions%20Philippines!5e0!3m2!1sen!2sph!4v1603375772473!5m2!1sen!2sph"
					frameBorder="0"
					allowFullScreen=""
					aria-hidden="false"
				></iframe>
			</div>
		</>
	);
};

export default Content;
