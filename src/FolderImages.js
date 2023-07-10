import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { images } from "./images";
import back from "./assets/back.png"

const FolderImages = () => {
    let { name } = useParams();

    console.log(images[name]);
    
	return (
		<div className="h-full w-full bg-darkBlueBg">
			<Header />
			<div className="px-6 py-2 md:px-8 md:py-2">
				<Link to="/" className="inline-block">
					<img className="md:p-2 md:mb-4" src={back} alt="back" />
				</Link>

				<div className="flex flex-wrap gap-6 md:gap-24 justify-center items-center">
					{images[name].map((image) => (
						<div className="flex flex-col justify-center gap-1 max-w-[400px]">
							<img
								key={image}
								src={`https://drive.google.com/uc?export=view&id=${image}`}
								alt=""
								className="rounded-3xl aspect-square object-cover"
							/>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default FolderImages;
