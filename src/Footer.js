import React from "react";
import instagram from "./assets/instagram.png";
import youtube from "./assets/youtube.png";

const Footer = () => {
	return (
		<div className="flex flex-col justify-center items-center bg-darkBlueBg p-6">
			<h1 className="text-xl md:text-3xl font-semibold text-whiteText">Rohit Setia Photography</h1>
			<div>
				<p className="text-whiteText flex gap-2 mt-2">
					For more enquiry:{" "}
					<a href="tel://+916280819711">
						<p className="text-whiteText">+916280819711</p>
					</a>
				</p>
			</div>
			<div className="mt-4 flex gap-6">
				<a target="_blank" rel="noreferrer" href="https://www.instagram.com/rohit_setia_photography/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
					<img src={instagram} alt="Instagram" className="bg-whiteText p-1 rounded-full w-10 cursor-pointer" />
				</a>
				<a target="_blank" rel="noreferrer" href="https://www.youtube.com/@rohitsetiaphotography9665">
					<img src={youtube} alt="youtube" className="bg-whiteText p-1 rounded-full w-10 cursor-pointer" />
				</a>
			</div>

			<div>
				<p className="text-whiteText mt-4">Made with love in Punjab</p>
			</div>
		</div>
	);
};

export default Footer;
