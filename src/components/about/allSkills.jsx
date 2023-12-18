import React from "react";

import INFO from "../../data/user";

import "./styles/allSkills.css";

const AllSkills = () => {
	return (
		<div className="all-skills-container">
			{INFO.skills.map((skill, index) => (
				<div className="all-skills-project" key={index}>
					<div className="skill">
						<div className="skill-container">
							<div className="skill-logo">
								<img src={skill.logo} alt="logo" />
							</div>
							<div className="skill-title">{skill.title}</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default AllSkills;
