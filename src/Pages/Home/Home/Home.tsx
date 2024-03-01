import Footer from "../../shere/Footer";
import About from "../About/About";
import Carousel from "../Carousel/Carousel";
import Hero from "../Hero/Hero";
import OverView from "../OverView/OverView";
import WinterCloth from "../WinterCloth/WinterCloth";
import SpecialOffer from "./SpecialOffer/SpecialOffer";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div className=" space-y-16 px-2 md:px-0 font-[Roboto]">
      <Hero />
      <About />
      <WinterCloth />
      <Testimonials />
      <OverView />
      <Carousel />
      <SpecialOffer/>
      <Footer/>
    </div>
  );
};

export default Home;
