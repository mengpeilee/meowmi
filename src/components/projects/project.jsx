import React, { useState } from "react";
import ImgsViewer from "react-images-viewer";
import { Link } from "react-router-dom";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, period, tags, isOpen } =
		props;
	const [isImgOpen, setIsImgOpen] = useState(false);

	return (
		<React.Fragment>
			<div className="project">
				<div
					className="project-logo"
					onClick={() => setIsImgOpen(true)}
				>
					<img src={logo} alt="logo" />
					<ImgsViewer
						imgs={[{ src: logo }]}
						currImg={0}
						isOpen={isImgOpen}
						onClose={() => setIsImgOpen(false)}
						backdropCloseable={true}
						showImgCount={false}
					/>
				</div>
				<div className="project-container">
					<div className="project-tags-container">
						{tags.map((tag, index) => (
							<div className="project-tag" key={index}>
								{tag}
							</div>
						))}
					</div>
					<div className="project-period">{period}</div>
					<div className="project-title">{title}</div>
					<div className="project-description">{description}</div>
					<div className="project-link">
						{isOpen ? (
							<Link
								to={link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="project-link-text">
									{linkText}
								</div>
							</Link>
						) : (
							<div className="project-link-text-close">
								{linkText}
							</div>
						)}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
