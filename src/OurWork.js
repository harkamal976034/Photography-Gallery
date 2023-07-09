import React from "react";
import Im from "./assets/im1.jpg";
import OurWorkGallery from "./OurWorkGallery";

const OurWork = () => {
	return (
		<div className="m-4 md:m-8">
			<h1 className="font-semibold text-2xl md:text-5xl my-4 md:my-10 text-whiteText">Our Work</h1>
			<div className="flex flex-wrap gap-4 md:gap-12 justify-center items-center">
				{/* {Array(6)
					.fill("")
					.map((item) => (
						<img src={Im} alt="" className="w-96 h-96 object-cover object-center rounded-3xl"></img>
					))} */}
				<OurWorkGallery />
			</div>
		</div>
	);
};

export default OurWork;
