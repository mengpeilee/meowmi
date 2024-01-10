import React from "react";
import Photos from "./photos";
import INFO from "../../data/user";
import "./styles/allPictures.css";

const AllPictures = () => {
	return (
		<div className="all-pictures-container">
			{INFO.pictures.albums.map((album, index) => (
				<div className="album-container" key={index}>
					<div className="album-title">{album.title}</div>
					<div className="album-description">{album.description}</div>
					<div className="pictures-container">
						<Photos photos={album.photos} />
					</div>
				</div>
			))}
		</div>
	);
};

export default AllPictures;
