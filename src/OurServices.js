import React from "react";
import service from "./assets/service.jpeg";
import { services } from "./images";

const OurServices = () => {
	return (
		<div className="bg-lightBlueBg w-full flex justify-center items-center p-8 md:p-10 flex-col">
			<h1 className="font-semibold text-2xl md:text-5xl my-4 md:my-10 text-whiteText">Our Services</h1>
			<div className="flex flex-wrap justify-center items-start gap-8">
				{Object.entries(services).map((image) => (
					<div className="flex flex-col justify-center gap-4  max-w-[400px]">
						<img
							key={image[0]}
							src={image[1].url}
							alt={image[0]}
							className="rounded-3xl aspect-square object-cover"
						/>
						<div className="flex flex-col justify-center items-center p-2 gap-4">
							<h1 className="text-2xl text-whiteText font-semibold text-center">{image[0]}</h1>
							<h5 className="text-lg text-whiteText text-center">{image[1].description}</h5>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurServices;
