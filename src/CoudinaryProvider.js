import { CloudinaryContext } from "cloudinary-react";

const cloudinaryConfig = {
	cloud_name: "douqdlnf7",
	api_key: "399598533712399",
	api_secret: "VuSxVVRj_BCdzoiODSqPLoHfm04",
};

export const CloudinaryProvider = ({ children }) => <CloudinaryContext {...cloudinaryConfig}>{children}</CloudinaryContext>;
