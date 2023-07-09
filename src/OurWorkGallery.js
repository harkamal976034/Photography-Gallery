import React from "react";
import { images } from "./images";

const OurWorkGallery = () => {

	return (
		<div>
			{Object.entries(images).map((image) => (
				<img
					key={image[0]}
					src={`https://drive.google.com/uc?export=view&id=${image[1][0]}`}
					alt={image[0]}
					width="300"
					height="300"
				/>
			))}
		</div>
	);
};

export default OurWorkGallery;
