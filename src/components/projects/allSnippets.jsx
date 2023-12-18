import React from "react";

import Snippet from "./snippet";

import INFO from "../../data/user";

import "./styles/allSnippets.css";

const AllSnippets = () => {
	return (
		<div className="all-snippets-container">
			{INFO.snippets.map((snippet, index) => (
				<div className="all-snippets-project" key={index}>
					<Snippet
						logo={snippet.logo}
						title={snippet.title}
						description={snippet.description}
					/>
				</div>
			))}
		</div>
	);
};

export default AllSnippets;
