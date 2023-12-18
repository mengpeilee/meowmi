import React from "react";
import INFO from "../../data/user";
import "./styles/lens.css";

const AllLens = () => {
	return (
		<div className="all-lens-container">
			{INFO.lens.photos.map((len, index) => (
				<div className="all-lens-project" key={index}>
					<img src={len} alt="len" />
				</div>
			))}
		</div>
	);
};

export default AllLens;
