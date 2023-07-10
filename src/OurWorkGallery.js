import React from "react";
import { images } from "./images";
import { Link } from "react-router-dom";

const OurWorkGallery = () => {
	return (
		<>
			{Object.entries(images).map((image) => (
				<Link to={`/type/${image[0]}`}>
					<div className="relative">
						<img
							key={image[0]}
							src={`https://drive.google.com/uc?export=view&id=${image[1][0]}`}
							alt={image[0]}
							className="rounded-3xl w-[300px] h-[300px] object-cover"
						/>
						<div className="absolute top-0 left-0 flex justify-center items-center bg-darkBlueBg bg-opacity-50 h-full w-full cursor-pointer hover:bg-opacity-70">
							<h1 className="xl md:text-2xl text-whiteText font-medium text-center">{image[0]}</h1>
						</div>
					</div>
				</Link>
			))}
		</>
	);
};

export default OurWorkGallery;
