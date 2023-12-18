import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/snippet.css";

const Snippet = (props) => {
	const { logo, title, description } = props;

	return (
		<React.Fragment>
			<div className="snippet">
				<div className="snippet-container">
					<div className="snippet-logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="snippet-title">{title}</div>
					<div className="snippet-description">{description}</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Snippet;
