import React from "react";
import { Link } from "react-router-dom";

import "./styles/work.css";

const Work = (props) => {
	const { logo, company, positions, descriptions } = props;

	return (
		<React.Fragment>
			<div className="work">
				<div className="work-logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="work-container">
					<div className="work-company">{company}</div>
					{positions.map((position, index) => (
						<div
							className="work-position-period-container"
							key={index}
						>
							<div className="work-position">
								{position.title}
							</div>
							<div className="work-period">
								| {position.period}
							</div>
							<div className="work-period">
								| {position.location}
							</div>
						</div>
					))}
					{descriptions.map((description, index) => (
						<div className="work-description" key={index}>
							• {description}
						</div>
					))}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Work;
