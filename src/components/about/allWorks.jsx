import React from "react";

import Work from "./work";

import INFO from "../../data/user";

import "./styles/allWorks.css";

const AllWorks = () => {
	return (
		<div className="all-works-container">
			{INFO.works.map((work, index) => (
				<div className="all-works-project" key={index}>
					<Work
						logo={work.logo}
						company={work.company}
						positions={work.positions}
						descriptions={work.descriptions}
					/>
				</div>
			))}
		</div>
	);
};

export default AllWorks;
