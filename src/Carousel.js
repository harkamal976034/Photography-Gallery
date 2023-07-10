import React from "react";

const Carousel = () => {
	return (
		<div className="relative h-[28rem] md:h-[600px] bg-[url('./assets/carousel.jpg')] bg-cover bg-center-center">
			<div className="absolute bg-darkBlueBg bg-opacity-50 h-full w-full top-0 left-0 flex justify-center items-center flex-col p-6">
				<h1 className="text-2xl md:text-5xl  text-whiteText font-medium text-center">Capture Life's Best Moments</h1>
				<h3 className="text-md md:text-xl mt-4 text-whiteText text-center tracking-wide">
					Professional photography services capturing the essence of your special moments. Book now for stunning photos!
				</h3>
			</div>
		</div>
	);
};

export default Carousel;
