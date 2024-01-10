import React, { useState } from "react";
import ImgsViewer from "react-images-viewer";
import "./styles/photos.css";

const Photos = (props) => {
	const { photos } = props;
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
		<div className="photos-container">
			{photos.map((photo, index) => (
				<div
					key={index}
					className="photo"
					onClick={() => {
						setIsImgOpen(true);
						setImageIndex(index);
					}}
				>
					<img src={photo} alt="len" />
				</div>
			))}
			<ImgsViewer
				imgs={formatPhotos(photos)}
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

export default Photos;
