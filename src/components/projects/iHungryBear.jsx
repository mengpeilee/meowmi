import React, { useState } from "react";
import ImgsViewer from "react-images-viewer";
import NavBar from "../common/navBar";
import Footer from "../common/footer";
import Logo from "../common/logo";

import "./styles/iHungryBear.css";

const IHungeryBear = () => {
	const [isInterViewResultImgOpen, setIsInterViewResultImgOpen] =
		useState(false);
	const [isInterViewFindingImgOpen, setIsInterViewFingingImgOpen] =
		useState(false);
	const [isDirectCompetitorImgOpen, setIsDirectCompetitorImgOpen] =
		useState(false);
	const [isIndirectCompetitorImgOpen, setIsIndirectCompetitorImgOpen] =
		useState(false);
	const [isUserJourneyMapImgOpen, setIsUserJourneyMapImgOpen] =
		useState(false);
	const [isPOVImgOpen, setIsPOVImgOpen] = useState(false);
	const [isIdeationImgOpen, setIsIdeationImgOpen] = useState(false);
	const [isUserFlowImgOpen, setIsUserFlowImgOpen] = useState(false);
	const [isOtherUserFlowImgOpen, setIsOtherUserFlowImgOpen] = useState(false);
	const [isFeature1ImgOpen, setIsFeature1ImgOpen] = useState(false);
	const [isPrototype1ImgOpen, setIsPrototype1ImgOpen] = useState(false);
	const [isFeature2ImgOpen, setIsFeature2ImgOpen] = useState(false);
	const [isPrototype2ImgOpen, setIsPrototype2ImgOpen] = useState(false);
	const [isFeature3ImgOpen, setIsFeature3ImgOpen] = useState(false);
	const [isPrototype3ImgOpen, setIsPrototype3ImgOpen] = useState(false);

	return (
		<>
			<NavBar active="projects" />
			<div className="projects-logo-container">
				<div className="projects-logo">
					<Logo width={46} />
				</div>
			</div>
			<div
				className="project-background"
				style={{ width: "100%", height: "500px" }}
			>
				<img src={"../iHungryBear/background.png"} alt="logo" />
			</div>
			<div className="content-wrapper">
				<div className="project-container">
					<div className="title project-title">
						iHungryBear UI/UX Redesign
					</div>
					<img src={"../iHungryBear/timeline.png"} alt="logo" />
					<div className="homepage-projects">
						<div className="section-title">
							⎯ Project Overview ⎯
						</div>
						<div className="section-text">
							Our design efforts led to significant{" "}
							<span>Outcomes</span>, including the introduction of
							new features, positive feedback from both the client
							and users, and, most importantly, a substantial
							improvement in user experience.
						</div>
						<div className="all-bear-snippets-container">
							<div className="all-bear-snippets">
								<div className="bear-snippet">
									<div className="bear-icon-logo">
										<img
											src={"../iHungryBear/bulb-icon.png"}
											alt="logo"
										/>
									</div>
									<div className="bear-snippet-title">
										New Feature
									</div>
									<div className="bear-snippet-description">
										Introduced social features, including
										Community Forum and Hall of Fame, to
										foster social interactions and boost
										User-Generated Content (UGC).
									</div>
								</div>
							</div>
							<div className="all-bear-snippets">
								<div className="bear-snippet">
									<div className="bear-icon-logo">
										<img
											src={"../iHungryBear/face-icon.png"}
											alt="logo"
										/>
									</div>
									<div className="bear-snippet-title">
										Improved Usability & Experience
									</div>
									<div className="bear-snippet-description">
										Enhanced user satisfaction, with an
										increase of <span>35%</span>, and
										improved System Usability Scale (SUS)
										scores by <span>27%</span>.
									</div>
								</div>
							</div>
							<div className="all-bear-snippets">
								<div className="bear-snippet">
									<div className="bear-icon-logo">
										<img
											src={
												"../iHungryBear/group-icon.png"
											}
											alt="logo"
										/>
									</div>
									<div className="bear-snippet-title">
										Positive Feedback
									</div>
									<div className="bear-snippet-description">
										Garnered positive feedback from target
										users during the usability testing and
										received overwhelmingly positive
										responses from client.
									</div>
								</div>
							</div>
						</div>
						<div className="all-bear-snippets-container">
							<div className="all-bear-snippets-text">
								<div className="snippet-text-title">Client</div>
								<div className="snippet-text-description">
									iHungryBear is a restaurant-finder app in
									Taiwan and has been looking for expansion.
									<br />
									They’re currently facing crucial challenges:
									low user retention, with a significant
									drop-off within weeks, and insufficient user
									engagement, leading to less content compared
									to competitors.
								</div>
							</div>
							<div className="all-bear-snippets-text">
								<div className="snippet-text-title">
									Mission
								</div>
								<div className="snippet-text-description">
									Our mission was to thoroughly reevaluate and
									redefine the UX, alongside a comprehensive
									redesign of the mobile UI.
									<br />
									This strategy aimed to address key user pain
									points and meet business requirements,
									thereby driving growth and enhancing user
									satisfaction.
								</div>
							</div>
						</div>
						<div className="section-title">⎯ Process ⎯</div>
						<div className="all-bear-snippets-container">
							<div className="all-bear-process">
								<div className="bear-snippet">
									<div className="bear-icon-process-logo">
										<img
											src={
												"../iHungryBear/lets-icons.png"
											}
											alt="logo"
										/>
									</div>
									<div className="bear-snippet-title">
										Research
									</div>
									<div className="bear-snippet-description">
										Desk Research
										<br />
										Competitive Audit Interview
									</div>
								</div>
							</div>
							<div className="all-bear-process">
								<div className="bear-snippet">
									<div className="bear-icon-process-logo">
										<img
											src={
												"../iHungryBear/people-icon.png"
											}
											alt="logo"
										/>
									</div>
									<div className="bear-snippet-title">
										Define
									</div>
									<div className="bear-snippet-description">
										Persona
										<br />
										User Journey Map
										<br />
										POV Statement
									</div>
								</div>
							</div>
							<div className="all-bear-process">
								<div className="bear-snippet">
									<div className="bear-icon-process-logo">
										<img
											src={
												"../iHungryBear/bulb-yellow-icon.png"
											}
											alt="logo"
										/>
									</div>
									<div className="bear-snippet-title">
										Ideate
									</div>
									<div className="bear-snippet-description">
										Brainstorming
										<br />
										HMW & Crazy 8s
										<br />
										User Flow
									</div>
								</div>
							</div>
							<div className="all-bear-process">
								<div className="bear-snippet">
									<div className="bear-icon-process-logo">
										<img
											src={
												"../iHungryBear/solar-magic-icon.png"
											}
											alt="logo"
										/>
									</div>
									<div className="bear-snippet-title">
										Design
									</div>
									<div className="bear-snippet-description">
										Wireframes
										<br />
										Prototype
									</div>
								</div>
							</div>
							<div className="all-bear-process">
								<div className="bear-snippet">
									<div className="bear-icon-process-logo">
										<img
											src={
												"../iHungryBear/user-check-icon.png"
											}
											alt="logo"
										/>
									</div>
									<div className="bear-snippet-title">
										User Test
									</div>
									<div className="bear-snippet-description">
										Usability Testing
										<br />
										Result Analysis Iterate Prototype
									</div>
								</div>
							</div>
							<div className="all-bear-process">
								<div className="bear-snippet">
									<div className="bear-icon-process-logo">
										<img
											src={
												"../iHungryBear/presentation-line-icon.png"
											}
											alt="logo"
										/>
									</div>
									<div className="bear-snippet-title">
										Presentation
									</div>
									<div className="bear-snippet-description">
										Client Presentation
										<br />
										Feedback
									</div>
								</div>
							</div>
						</div>
						<div className="section-title">⎯ User Research ⎯</div>
						<div className="section-subtitle">User Interview</div>
						<div className="section-text">
							We conducted one-to-one interviews with 5
							participants: Daisy, ChiaYu, Mark, Karen Chou, Jamie
							<br />
							These interviews aimed to gain insights into how
							users interact with restaurant-finding apps,
							covering five key topics:
							<br />
							• User’s motivations for using restaurant-finding
							apps.
							<br />
							• User’s preferred features and process for
							restaurant selection.
							<br />
							• User’s challenges with restaurant-finding apps.
							<br />
							• User’s feedback and interactions with
							restaurant-finding apps.
							<br />• User’s frustrations and expectations with
							iHungryBear.
						</div>
						<div className="bear-images">
							<div className="bera-image-container">
								<div className="bear-image-title">
									Interview Result
								</div>
								<div
									className="bear-image"
									onClick={() =>
										setIsInterViewResultImgOpen(true)
									}
								>
									<img
										src={
											"../iHungryBear/interview-result.jpeg"
										}
										alt="logo"
									/>
									<ImgsViewer
										imgs={[
											{
												src: "../iHungryBear/interview-result.jpeg",
											},
										]}
										currImg={0}
										isOpen={isInterViewResultImgOpen}
										onClose={() =>
											setIsInterViewResultImgOpen(false)
										}
										backdropCloseable={true}
										showImgCount={false}
									/>
								</div>
							</div>
							<div className="bera-image-container">
								<div className="bear-image-title">
									Interview Findings
								</div>
								<div
									className="bear-image"
									onClick={() =>
										setIsInterViewFingingImgOpen(true)
									}
								>
									<img
										src={
											"../iHungryBear/interview-finding.png"
										}
										alt="logo"
									/>
									<ImgsViewer
										imgs={[
											{
												src: "../iHungryBear/interview-finding.png",
											},
										]}
										currImg={0}
										isOpen={isInterViewFindingImgOpen}
										onClose={() =>
											setIsInterViewFingingImgOpen(false)
										}
										backdropCloseable={true}
										showImgCount={false}
									/>
								</div>
							</div>
						</div>
						<div className="section-subtitle">
							Competitive Audit
						</div>
						<div className="section-text">
							We identified two popular, regularly use apps in
							Taiwan as our competitors:
							<br />
							• Direct competitors: iFoodie, MENU
							<br />
							• Indirect competitors: Google Maps, Xiaohongshu
							<br />
							We conducted analysis analysis and usability
							evaluation for each competitor, hoping to understand
							their approaches and look for business opportunities
							for iHungryBear.
						</div>
						<div className="bear-images">
							<div
								className="bear-image"
								onClick={() =>
									setIsDirectCompetitorImgOpen(true)
								}
							>
								<img
									src={
										"../iHungryBear/direct-competitors.png"
									}
									alt="logo"
								/>
								<ImgsViewer
									imgs={[
										{
											src: "../iHungryBear/direct-competitors.png",
										},
									]}
									currImg={0}
									isOpen={isDirectCompetitorImgOpen}
									onClose={() =>
										setIsDirectCompetitorImgOpen(false)
									}
									backdropCloseable={true}
									showImgCount={false}
								/>
							</div>
							<div
								className="bear-image"
								onClick={() =>
									setIsIndirectCompetitorImgOpen(true)
								}
							>
								<img
									src={
										"../iHungryBear/indirect-competitors.png"
									}
									alt="logo"
								/>
								<ImgsViewer
									imgs={[
										{
											src: "../iHungryBear/indirect-competitors.png",
										},
									]}
									currImg={0}
									isOpen={isIndirectCompetitorImgOpen}
									onClose={() =>
										setIsIndirectCompetitorImgOpen(false)
									}
									backdropCloseable={true}
									showImgCount={false}
								/>
							</div>
						</div>
						<div className="section-subtitle">Research Insight</div>
						<div className="insight-container">
							<div className="insight-row">
								<div className="insight-icon-container">
									<div className="bear-icon-logo">
										<img
											src={"../iHungryBear/face-icon.png"}
											alt="logo"
										/>
									</div>
									<div
										className="bear-snippet-title"
										style={{ width: "200px" }}
									>
										User Core Needs
									</div>
								</div>
								<div className="insight-description-frame">
									<div className="insight-description">
										• Rich and accurate restaurant
										information
										<br />
										• User-friendly restaurant search
										function
										<br />
										• Reliable and comprehensive user
										reviews
										<br />
										• Personalized restaurant suggestions
										<br />• Social interaction with other
										users
									</div>
								</div>
							</div>
							<div className="insight-row">
								<div className="insight-icon-container">
									<div
										className="bear-icon-logo"
										style={{ backgroundColor: "#3BAFD7" }}
									>
										<img
											src={
												"../iHungryBear/unhappy-face.png"
											}
											alt="logo"
										/>
									</div>
									<div
										className="bear-snippet-title"
										style={{ width: "200px" }}
									>
										User Pain Points
									</div>
								</div>
								<div
									className="insight-description-frame"
									style={{ borderColor: "#3bafd7" }}
								>
									<div className="insight-description">
										• Overwhelmed by cluttered options
										<br />
										• Inaccurate restaurants information
										<br />
										• Lack of sufficient and helpful user
										reviews
										<br />• Counterintuitive and complex
										UI/UX design
									</div>
								</div>
							</div>
						</div>
						<div className="section-title">⎯ Define ⎯</div>
						<div className="section-subtitle">Persona</div>
						<div className="section-text">
							We developed a persona based on our research, which
							guided our team in identifying our target users and
							focusing our efforts to create the best possible
							app.
						</div>
						<div className="project-background">
							<img
								src={"../iHungryBear/persona.png"}
								alt="logo"
							/>
						</div>
						<div className="section-subtitle">User Journey Map</div>
						<div className="section-text">
							We established a goal for users and developed a user
							journey map to understand how they interact with the
							existing app. By evaluating their touchpoints and
							expectations, we sought opportunities to refine the
							journey map and enhance user experience through our
							innovative designs.
							<br />
							<br />
							<span>★Goal</span>: Search for a restaurant for a
							friends' gathering.
						</div>
						<div
							className="project-background"
							onClick={() => setIsUserJourneyMapImgOpen(true)}
							style={{ cursor: "pointer" }}
						>
							<img
								src={"../iHungryBear/user-journey-map.jpeg"}
								alt="logo"
							/>
							<ImgsViewer
								imgs={[
									{
										src: "../iHungryBear/user-journey-map.jpeg",
									},
								]}
								currImg={0}
								isOpen={isUserJourneyMapImgOpen}
								onClose={() =>
									setIsUserJourneyMapImgOpen(false)
								}
								backdropCloseable={true}
								showImgCount={false}
							/>
						</div>
						<div className="section-subtitle">POV Statement</div>
						<br />
						<br />
						<div
							className="project-background"
							onClick={() => setIsPOVImgOpen(true)}
							style={{ cursor: "pointer" }}
						>
							<img src={"../iHungryBear/POV.png"} alt="logo" />
							<ImgsViewer
								imgs={[
									{
										src: "../iHungryBear/POV.png",
									},
								]}
								currImg={0}
								isOpen={isPOVImgOpen}
								onClose={() => setIsPOVImgOpen(false)}
								backdropCloseable={true}
								showImgCount={false}
							/>
						</div>
						<div className="section-subtitle">How Might We</div>
						<div className="all-bear-snippets-container">
							<div className="all-bear-images">
								<img
									src={"../iHungryBear/HMW1.png"}
									alt="logo"
								/>
							</div>
							<div className="all-bear-images">
								<img
									src={"../iHungryBear/HMW2.png"}
									alt="logo"
								/>
							</div>
							<div className="all-bear-images">
								<img
									src={"../iHungryBear/HMW3.png"}
									alt="logo"
								/>
							</div>
						</div>
						<div className="section-title">⎯ Ideate ⎯</div>
						<div className="section-subtitle">iHungryBear 2.0</div>
						<div
							className="section-text"
							style={{ textAlign: "center" }}
						>
							iHungryBear 2.0 is all about connecting food lovers.
							<br />
							It's a place where they can discover, share, and
							review a variety of restaurants and culinary
							experiences.
							<br />
							iHungryBear 2.0 offers personalized recommendations,
							social interactions, and reliable user reviews.
						</div>
						<div className="project-background">
							<img src={"../iHungryBear/ideate.png"} alt="logo" />
						</div>
						<div className="section-subtitle">Ideation</div>
						<div className="section-text">
							We initiated <span>Crazy 8s</span> exercises to
							generate ideas for our three “How Might We”
							questions. One of our ideas was the “Community
							Forum.”
							<br />
							In the sketches, we envisioned the forum as a space
							for user to interact with others, featuring main
							components: posts, comments, and polls.
							<br />
							We then designed a user task to explore how users
							would engage with the forum and created a
							corresponding user flow.
						</div>
						<div
							className="project-background"
							onClick={() => setIsIdeationImgOpen(true)}
							style={{ cursor: "pointer" }}
						>
							<div className="bear-image-title">Crazy 8s</div>
							<img
								src={"../iHungryBear/ideation.png"}
								alt="logo"
							/>
							<ImgsViewer
								imgs={[
									{
										src: "../iHungryBear/ideation.png",
									},
								]}
								currImg={0}
								isOpen={isIdeationImgOpen}
								onClose={() => setIsIdeationImgOpen(false)}
								backdropCloseable={true}
								showImgCount={false}
							/>
						</div>
						<div className="section-subtitle">User Flow</div>
						<div className="section-text">
							<span>★User Task</span>: A user is searching for an
							Italian restaurant in Taipei that is suitable for
							group dining.
							<br />
							<br />
							The user creates a post in the “Community Forum” to
							gather suggestions from other users. Despite
							receiving many responses, choosing remains
							challenging. Consequently, the user initiates a poll
							within the community to get more user opinions to
							help resolve this dilemma of choice.
						</div>
						<div className="bear-images">
							<div className="bera-image-container">
								<div className="bear-image-title">
									User Flow: Search for an Italian restaurant
									in “Community Forum”
								</div>
								<div
									className="bear-image"
									onClick={() => setIsUserFlowImgOpen(true)}
								>
									<img
										src={"../iHungryBear/user-flow.png"}
										alt="logo"
									/>
									<ImgsViewer
										imgs={[
											{
												src: "../iHungryBear/user-flow.png",
											},
										]}
										currImg={0}
										isOpen={isUserFlowImgOpen}
										onClose={() =>
											setIsUserFlowImgOpen(false)
										}
										backdropCloseable={true}
										showImgCount={false}
									/>
								</div>
							</div>
							<div className="bera-image-container">
								<div className="bear-image-title">
									Other User Flow
								</div>
								<div
									className="bear-image"
									onClick={() =>
										setIsOtherUserFlowImgOpen(true)
									}
								>
									<img
										src={
											"../iHungryBear/other-user-flow.png"
										}
										alt="logo"
									/>
									<ImgsViewer
										imgs={[
											{
												src: "../iHungryBear/other-user-flow.png",
											},
										]}
										currImg={0}
										isOpen={isOtherUserFlowImgOpen}
										onClose={() =>
											setIsOtherUserFlowImgOpen(false)
										}
										backdropCloseable={true}
										showImgCount={false}
									/>
								</div>
							</div>
						</div>
						<div className="section-title">⎯ Prototype ⎯</div>
						<div className="bear-design-container">
							<div className="bear-design-text">
								<div
									className="section-subtitle"
									style={{ textAlign: "left" }}
								>
									New Feature 1 - Honor Badges & Hall of Fame
								</div>
								<br />
								<div className="bear-image-title">Goal</div>
								<div className="section-text">
									• Boost user engagement
									<br />
									• Enhance entertainment value
									<br />• Provide users with a sense of
									achievement
								</div>
								<div className="bear-image-title">Feature</div>
								<div className="section-text">
									Users are encouraged to complete tasks
									within the app, such as daily logins or
									leaving restaurant reviews, to earn points.
									These points can be used to unlock various
									Bear Honor Badges.
									<br />
									<br />
									The Hall of Fame allows users to engage in
									friendly competition, showcasing those who
									have earned the most points
								</div>
							</div>
							<div className="bear-images">
								<div
									className="bear-image"
									onClick={() => setIsFeature1ImgOpen(true)}
								>
									<img
										src={"../iHungryBear/feature-1.png"}
										alt="logo"
									/>
									<ImgsViewer
										imgs={[
											{
												src: "../iHungryBear/feature-1.png",
											},
										]}
										currImg={0}
										isOpen={isFeature1ImgOpen}
										onClose={() =>
											setIsFeature1ImgOpen(false)
										}
										backdropCloseable={true}
										showImgCount={false}
									/>
								</div>
								<div
									className="bear-image"
									onClick={() => setIsPrototype1ImgOpen(true)}
								>
									<img
										src={
											"../iHungryBear/Prototype1_gif.gif"
										}
										alt="logo"
									/>
									<ImgsViewer
										imgs={[
											{
												src: "../iHungryBear/Prototype1_gif.gif",
											},
										]}
										currImg={0}
										isOpen={isPrototype1ImgOpen}
										onClose={() =>
											setIsPrototype1ImgOpen(false)
										}
										backdropCloseable={true}
										showImgCount={false}
									/>
								</div>
							</div>
						</div>
						<div className="bear-design-container-reverse">
							<div className="bear-design-text">
								<div
									className="section-subtitle"
									style={{ textAlign: "left" }}
								>
									New Feature 2 - Community Forum
								</div>
								<br />
								<div className="bear-image-title">Goal</div>
								<div className="section-text">
									• Encourage user interaction and engagement
									<br />
									• Enhance User-Generated Content (UGC)
									<br />• Foster user loyalty and community
									spirit
								</div>
								<div className="bear-image-title">Feature</div>
								<div className="section-text">
									The Community Forum allows users to create
									posts and initiate polls, fostering a space
									for interaction.
									<br />
									<br />
									This feature enables users to seek opinions
									and connect with the community.
								</div>
							</div>
							<div className="bear-images">
								<div
									className="bear-image"
									onClick={() => setIsFeature2ImgOpen(true)}
								>
									<img
										src={"../iHungryBear/feature-2.png"}
										alt="logo"
									/>
									<ImgsViewer
										imgs={[
											{
												src: "../iHungryBear/feature-2.png",
											},
										]}
										currImg={0}
										isOpen={isFeature2ImgOpen}
										onClose={() =>
											setIsFeature2ImgOpen(false)
										}
										backdropCloseable={true}
										showImgCount={false}
									/>
								</div>
								<div
									className="bear-image"
									onClick={() => setIsPrototype2ImgOpen(true)}
								>
									<img
										src={
											"../iHungryBear/Prototype2_gif.gif"
										}
										alt="logo"
									/>
									<ImgsViewer
										imgs={[
											{
												src: "../iHungryBear/Prototype2_gif.gif",
											},
										]}
										currImg={0}
										isOpen={isPrototype2ImgOpen}
										onClose={() =>
											setIsPrototype2ImgOpen(false)
										}
										backdropCloseable={true}
										showImgCount={false}
									/>
								</div>
							</div>
						</div>
						<div className="bear-design-container">
							<div className="bear-design-text">
								<div
									className="section-subtitle"
									style={{ textAlign: "left" }}
								>
									New Feature 3 - Life Status Selection
								</div>
								<br />
								<div className="bear-image-title">Goal</div>
								<div className="section-text">
									• Reduce user choice overload
									<br />
									• Cate to users with consistent needs
									<br />• Simplify the search process
									<br />• Eliminate the need for repetitive
									filtering
								</div>
								<div className="bear-image-title">Feature</div>
								<div className="section-text">
									By selecting a Life Status, users can narrow
									down restaurant options that align with
									their specific preferences.
								</div>
							</div>
							<div className="bear-images">
								<div
									className="bear-image"
									onClick={() => setIsFeature3ImgOpen(true)}
								>
									<img
										src={"../iHungryBear/feature-3.png"}
										alt="logo"
									/>
									<ImgsViewer
										imgs={[
											{
												src: "../iHungryBear/feature-3.png",
											},
										]}
										currImg={0}
										isOpen={isFeature3ImgOpen}
										onClose={() =>
											setIsFeature3ImgOpen(false)
										}
										backdropCloseable={true}
										showImgCount={false}
									/>
								</div>
								<div
									className="bear-image"
									onClick={() => setIsPrototype3ImgOpen(true)}
								>
									<img
										src={
											"../iHungryBear/Prototype3_gif.gif"
										}
										alt="logo"
									/>
									<ImgsViewer
										imgs={[
											{
												src: "../iHungryBear/Prototype1_gif.gif",
											},
										]}
										currImg={0}
										isOpen={isPrototype3ImgOpen}
										onClose={() =>
											setIsPrototype3ImgOpen(false)
										}
										backdropCloseable={true}
										showImgCount={false}
									/>
								</div>
							</div>
						</div>
						<div className="project-background">
							<img
								src={"../iHungryBear/usability-design.png"}
								alt="logo"
							/>
						</div>
						<div className="section-title">
							⎯ Usability Testing ⎯
						</div>
						<div className="section-subtitle">Usability Test</div>
						<div className="section-text">
							We conducted usability tests with six participants
							to evaluate the effectiveness of our solutions.
							During these tests, each participant was given five
							tasks to assess whether they could complete them
							smoothly.
						</div>
						<div className="all-bear-snippets-container">
							<div className="all-bear-process">
								<div className="bear-snippet">
									<div className="bear-icon-process-logo">
										<img
											src={
												"../iHungryBear/study-icon.png"
											}
											alt="logo"
										/>
									</div>
									<div className="bear-snippet-title">
										Study
									</div>
									<div className="bear-snippet-description">
										Moderated
									</div>
								</div>
							</div>
							<div className="all-bear-process">
								<div className="bear-snippet">
									<div className="bear-icon-process-logo">
										<img
											src={
												"../iHungryBear/location-icon.png"
											}
											alt="logo"
										/>
									</div>
									<div className="bear-snippet-title">
										Location
									</div>
									<div className="bear-snippet-description">
										Taiwan, Remote
									</div>
								</div>
							</div>
							<div className="all-bear-process">
								<div className="bear-snippet">
									<div className="bear-icon-process-logo">
										<img
											src={
												"../iHungryBear/participants-icon.png"
											}
											alt="logo"
										/>
									</div>
									<div className="bear-snippet-title">
										Participants
									</div>
									<div className="bear-snippet-description">
										6 users
									</div>
								</div>
							</div>
							<div className="all-bear-process">
								<div className="bear-snippet">
									<div className="bear-icon-process-logo">
										<img
											src={
												"../iHungryBear/duration-icon.png"
											}
											alt="logo"
										/>
									</div>
									<div className="bear-snippet-title">
										Duration
									</div>
									<div className="bear-snippet-description">
										30 minutes
									</div>
								</div>
							</div>
						</div>
						<div className="section-subtitle">Feedback</div>
						<div className="section-text">
							Following the tests, users were asked to rate their
							experience using the System Usability Scale (SUS)
							and provide feedback on both the overall experience
							and the design.
						</div>
						<div className="all-bear-snippets-container">
							<div className="all-bear-images">
								<img
									src={"../iHungryBear/feedback-1.png"}
									alt="logo"
								/>
							</div>
							<div className="all-bear-images">
								<img
									src={"../iHungryBear/feedback-2.png"}
									alt="logo"
								/>
							</div>
							<div className="all-bear-images">
								<img
									src={"../iHungryBear/feedback-3.png"}
									alt="logo"
								/>
							</div>
							<div className="all-bear-images">
								<img
									src={"../iHungryBear/feedback-4.png"}
									alt="logo"
								/>
							</div>
						</div>
						<div className="section-title">⎯ Outcomes ⎯</div>
						<div className="all-bear-snippets-container">
							<div className="all-bear-snippets">
								<div className="bear-snippet">
									<div className="bear-icon-logo">
										<img
											src={"../iHungryBear/bulb-icon.png"}
											alt="logo"
										/>
									</div>
									<div className="bear-snippet-title">
										New Feature
									</div>
									<div className="bear-snippet-description">
										We introduced several new social
										features, including Community Forum,
										Bear Honor Badge, and Life Status
										Selection, to foster social interactions
										and boost User-Generated Content (UGC).
									</div>
								</div>
							</div>
							<div className="all-bear-snippets">
								<div className="bear-snippet">
									<div className="bear-icon-logo">
										<img
											src={"../iHungryBear/face-icon.png"}
											alt="logo"
										/>
									</div>
									<div className="bear-snippet-title">
										Improved Usability & Experience
									</div>
									<div className="bear-snippet-description">
										Our efforts led to an enhancement in
										user experience, evidenced by a{" "}
										<span>35%</span> increase in user
										satisfaction and a <span>27%</span>{" "}
										improvement in System Usability Scale
										(SUS) scores.
									</div>
								</div>
							</div>
							<div className="all-bear-snippets">
								<div className="bear-snippet">
									<div className="bear-icon-logo">
										<img
											src={
												"../iHungryBear/group-icon.png"
											}
											alt="logo"
										/>
									</div>
									<div className="bear-snippet-title">
										Positive Feedback
									</div>
									<div className="bear-snippet-description">
										Garnered positive feedback from target
										users during the usability testing and
										received overwhelmingly positive
										responses from client.
									</div>
								</div>
							</div>
						</div>
						<div className="section-title">⎯ Components ⎯</div>
						<br />
						<br />
						<div className="project-background">
							<img
								src={"../iHungryBear/components.png"}
								alt="logo"
							/>
						</div>
						<div className="section-title">⎯ Visual Design ⎯</div>
						<br />
						<br />
						<div className="project-background">
							<img
								src={"../iHungryBear/visual-design.png"}
								alt="logo"
							/>
						</div>
					</div>
				</div>
				<div className="page-footer">
					<Footer />
				</div>
			</div>
		</>
	);
};

export default IHungeryBear;
