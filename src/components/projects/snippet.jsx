import React, { useState } from "react";
import ImgsViewer from "react-images-viewer";

import "./styles/snippet.css";

const Snippet = (props) => {
	const { logo, title, description } = props;
	const [isImgOpen, setIsImgOpen] = useState(false);

	return (
		<React.Fragment>
			<div className="snippet">
				<div className="snippet-container">
					<div
						className="snippet-logo"
						onClick={() => setIsImgOpen(true)}
					>
						<img src={logo} alt="logo" />
						<ImgsViewer
							imgs={[{ src: logo }]}
							currImg={0}
							isOpen={isImgOpen}
							onClose={() => setIsImgOpen(false)}
							showImgCount={false}
							backdropCloseable={true}
						/>
					</div>
					<div className="snippet-title">{title}</div>
					<div className="snippet-description">{description}</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Snippet;
