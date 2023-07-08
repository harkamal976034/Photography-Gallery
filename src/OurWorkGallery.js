import React, { useEffect, useState } from "react";
import axios from "axios";

const OurWorkGallery = () => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		const fetchImages = async () => {
			try {
				const response = await axios.get(`https://api.cloudinary.com/v1_1/douqdlnf7/resources/image/folder/wedding`, {
					params: {
						type: "upload",
						max_results: 30, // Adjust the number of images to fetch as per your requirement
						api_key: "399598533712399",
						api_secret: "VuSxVVRj_BCdzoiODSqPLoHfm04",
					},
				});
				setImages(response.data.resources);
			} catch (error) {
				console.log(error);
			}
		};

		fetchImages();
	}, []);

	return (
		<div>
			{images.map((image) => (
				<img key={image.public_id} src={image.secure_url} alt={image.public_id} width="300" height="300" />
			))}
		</div>
	);
};

export default OurWorkGallery;
