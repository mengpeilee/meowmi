import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import AllSkills from "../components/about/allSkills";
import AllWorks from "../components/about/allWorks";
import AllPictures from "../components/about/allPictures";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>
								<div className="subtitle about-subtitle">
									{INFO.about.description_1}
								</div>
								<div className="subtitle about-subtitle">
									{INFO.about.description_2}
								</div>
								<div className="subtitle about-subtitle">
									{INFO.about.description_3}
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="../media/about.png"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="about-socials">
							<Socials />
						</div>
					</div>
					<div className="about-info page-footer">
						<div className="section-title">⎯ What I Do ⎯</div>
						<AllSkills />
					</div>
					<div className="about-info page-footer">
						<div className="section-title">⎯ Work Experience ⎯</div>
						<AllWorks />
					</div>
					<div className="homepage-projects page-footer">
						<div className="section-title">
							⎯ Meet Me Beyond The Desk ⎯
						</div>
						<div className="section-description-about">
							<div className="inner-section-description-about">
								{INFO.pictures.description}
							</div>
							<AllPictures />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
