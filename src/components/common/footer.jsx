import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import INFO from "../../data/user";
import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-title">Say Hello Elsewhere :)</div>
				<div className="footer-socials">
					<a
						href={`${INFO.socials.linkedin}`}
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon={faLinkedin}
							className="footer-social-icon"
						/>
					</a>
					<a
						href={`mailto:${INFO.main.email}`}
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon={faEnvelope}
							className="footer-social-icon"
						/>
					</a>
				</div>
			</div>
			<div className="footer-credits">
				<div className="footer-credits-text">
					© {new Date().getFullYear()} Christine Chien. All Rights
					Reserved.
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
