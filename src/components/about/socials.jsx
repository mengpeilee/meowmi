import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials">
			<div className="socials-socials">
				<a
					href={`${INFO.socials.linkedin}`}
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon
						icon={faLinkedin}
						className="socials-social-icon"
					/>
				</a>
				<a
					href={`mailto:${INFO.main.email}`}
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon
						icon={faEnvelope}
						className="socials-social-icon"
					/>
				</a>
			</div>
		</div>
	);
};

export default Socials;
