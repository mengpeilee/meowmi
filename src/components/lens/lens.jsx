import React, { useState } from "react";
import ImgsViewer from "react-images-viewer";
import INFO from "../../data/user";
import "./styles/lens.css";

const AllLens = () => {
	const [imageIndex, setImageIndex] = useState(0);
	const [isImgOpen, setIsImgOpen] = useState(false);

	const formatPhotos = (photos) => {
		let formattedPhotos = [];
		photos.forEach((photo) => {
			formattedPhotos.push({ src: photo });
		});
		return formattedPhotos;
	};

	return (
		<div className="all-lens-container">
			{INFO.lens.photos.map((len, index) => (
				<div
					className="all-lens-project"
					key={index}
					onClick={() => {
						setIsImgOpen(true);
						setImageIndex(index);
					}}
				>
					<img src={len} alt="len" />
				</div>
			))}
			<ImgsViewer
				imgs={formatPhotos(INFO.lens.photos)}
				currImg={imageIndex}
				isOpen={isImgOpen}
				onClose={() => setIsImgOpen(false)}
				onClickPrev={() => setImageIndex(imageIndex - 1)}
				onClickNext={() => setImageIndex(imageIndex + 1)}
				backdropCloseable={true}
			/>
		</div>
	);
};

export default AllLens;
