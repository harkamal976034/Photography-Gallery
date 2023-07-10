import React from 'react'
import AboutUs from "./AboutUs";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Header from "./Header";
import OurServices from "./OurServices";
import OurWork from "./OurWork";

const Home = () => {
  return (
    <div className="h-full w-full bg-darkBlueBg">
			<Header />
			<Carousel />
			<OurWork />
			<AboutUs />
			<OurServices />
			<Footer />
		</div>
  )
}

export default Home