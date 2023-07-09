import React from "react";
import { images } from "./images";

const OurWorkGallery = () => {

	return (
		<>
			{Object.entries(images).map((image) => (
				<img
					key={image[0]}
					src={`https://drive.google.com/uc?export=view&id=${image[1][0]}`}
					alt={image[0]}
					className="rounded-3xl w-[300px] h-[300px] object-cover"
				/>
			))}
		</>
	);
};

export default OurWorkGallery;
