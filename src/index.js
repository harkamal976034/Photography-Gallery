import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CloudinaryProvider } from "./CoudinaryProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<CloudinaryProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</CloudinaryProvider>
);
