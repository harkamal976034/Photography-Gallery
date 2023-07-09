import AboutUs from "./AboutUs";
import Carousel from "./Carousel";
import Header from "./Header";
import OurServices from "./OurServices";
import OurWork from "./OurWork";

function App() {
	return (
		<div className="h-full w-full bg-darkBlueBg">
			<Header />
			<Carousel />
			<OurWork />
			<AboutUs />
			<OurServices />
		</div>
	);
}

export default App;
