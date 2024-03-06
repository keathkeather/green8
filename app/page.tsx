import Image from "next/image";
import GoogleMaps from "./components/GoogleMaps";
import GetInTouch from "./components/GetInTouch";
import NavBar from "./components/NavBar";
import Reviews from "./components/reviews";
import WhoWeAre from "./components/WhoWeAre";
import ContactUs from "./components/ContactUs";
import AnimatedText from "./components/AnimatedText";
import HeroHeader from "./components/HeroHeader";
import RatesMain from "./components/RatesMain";
import CoverFlow from "./components/EquipmentCarousel";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import 'swiper/css/effect-coverflow';
import 'swiper/css/mousewheel';

export default function Home() {
  return (
    <main>
      <>
        <div id="hero">
          <NavBar />
          <HeroHeader />
        </div>
        <div id="AboutUs">
          <WhoWeAre />
          <AnimatedText />
        </div>
        <div id="Equipment">
          <CoverFlow />
        </div>
        <div id="Reviews">
          <Reviews />
        </div>
        <div id="Rates" className="flex flex-row justify-center">
          <RatesMain />
        </div>
        <div id="GetInTouch" className="flex flex-row justify-center pt-[47px] pb-[47px]">
          <div className="mr-[47px]">
            <GoogleMaps />
          </div>
          <div><GetInTouch /></div>
        </div>
        <div id="Footer">
          <ContactUs />
        </div>
      </>
    </main>
  );
}
