import React from "react";
import Im from "./assets/im1.jpg";
import OurWorkGallery from "./OurWorkGallery";

const OurWork = () => {
	return (
		<div className="m-4 md:m-8">
			<h1 className="font-semibold text-2xl md:text-5xl my-4 md:my-10 text-whiteText">Our Work</h1>
			<div className="flex flex-wrap gap-6 md:gap-16 justify-center items-center">
				<OurWorkGallery />
			</div>
		</div>
	);
};

export default OurWork;
