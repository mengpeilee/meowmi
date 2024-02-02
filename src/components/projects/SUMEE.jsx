import React, { useState } from "react";
import ImgsViewer from "react-images-viewer";
import NavBar from "../common/navBar";
import Footer from "../common/footer";
import Logo from "../common/logo";

import "./styles/SUMEE.css";

const SUMEE = () => {
	return (
		<>
			<NavBar active="projects" />
			<div className="projects-logo-container">
				<div className="projects-logo">
					<Logo width={46} />
				</div>
			</div>
			<div className="project-background">
				<img src={"../SUMEE/background.png"} alt="logo" />
			</div>
			<div className="content-wrapper">
				<div className="project-container">
					<div className="title project-title">
						SU MEE Brand Design
					</div>
					<img src={"../SUMEE/timeline.png"} alt="logo" />
					<div className="homepage-projects">
						<div className="section-title">⎯ SU MEE ⎯</div>
						<div className="project-background">
							<img src={"../SUMEE/SUMEE-logo.png"} alt="logo" />
						</div>
						<div className="section-text">
							SU MEE is a creative Taiwanese beef noodle brand.
							The Chinese brand name 簌麵, translated into English
							as "Slurping Noodle," mimics the onomatopoeic sound
							made when enjoying noodles. To add a touch of fun
							and distinctiveness to the brand, I chose "SU MEE"
							as its English brand name, which is phonetically
							memorable and easy to pronounce.
							<br />
							<br />
							For the brand's logo design, I retained the general
							appearance of the Chinese characters and creatively
							integrated parts of the characters with imagery of
							utensils and opted for a sans-serif font to
							symbolize the smooth texture of the noodles.
						</div>
						<div className="project-background">
							<img src={"../SUMEE/SU-MEE.png"} alt="logo" />
						</div>
						<div className="section-text">
							For SU MEE's brand identity, I designed the noodle
							takeout packaging boxes and paper bags, as well as
							the staff uniforms, to strengthen the brand's
							presence and enhance customer perception.
							<br />
							<br />
							The chosen color scheme features red to symbolize
							vitality and the auspiciousness associated with
							Taiwanese culture. Yellow reflects the color of the
							noodles, while black represents SU MEE's stability
							and dedication to delivering high-quality, authentic
							noodles.
						</div>
						<div className="all-sumee-snippets-container">
							<div className="all-sumee-images">
								<img src={"../SUMEE/design-1.png"} alt="logo" />
								<div className="sumee-image-title">
									Noodle Box Packaging Design
								</div>
							</div>
							<div className="all-sumee-images">
								<img src={"../SUMEE/design-2.png"} alt="logo" />
								<div className="sumee-image-title">
									Paper Bag Design
								</div>
							</div>
							<div className="all-sumee-images">
								<img src={"../SUMEE/design-3.png"} alt="logo" />
								<div className="sumee-image-title">
									Staff Shirt Design
								</div>
							</div>
						</div>
					</div>
					<div className="section-title">
						⎯ Self-Ordering UI Design ⎯
					</div>
					<div className="section-text">
						For noodle ordering, I designed a self-ordering iPad UI
						that will be implemented on iPads placed at each dining
						table, allowing customers to conveniently place their
						orders while seated.
						<br />
						<br />
						This approach aligns with both the founder's and
						customers' needs. By integrating self-ordering iPads,
						the founder can significantly reduce labor costs
						associated with staff. Meanwhile, customers gain the
						ability to customize their noodles to their liking,
						choosing portions, spiciness levels, toppings, and more.
					</div>
					<div className="project-background">
						<img src={"../SUMEE/self-ordering.png"} alt="logo" />
					</div>
					<div className="section-title">⎯ Components ⎯</div>
					<div className="project-background">
						<img src={"../SUMEE/components.png"} alt="logo" />
					</div>
				</div>
				<div className="page-footer">
					<Footer />
				</div>
			</div>
		</>
	);
};

export default SUMEE;
