import Image from "next/image";
import GoogleMaps from "./components/GoogleMaps";
import GetInTouch from "./components/GetInTouch";
import NavBar from "./components/NavBar";
import Reviews from "./components/reviews";
import WhoWeAre from "./components/WhoWeAre";
import ContactUs from "./components/ContactUs";
export default function Home() {
  return (
    <main>
      <>
        {/* //*to use this component just use <GoogleMaps/> in the main component */}
        <NavBar />
        <div>
          <WhoWeAre />
        </div>
        <div className="flex flex-row justify-center pt-[47px]">
          <div className="mr-[47px]">
            <GoogleMaps />
          </div>
          <div><GetInTouch/></div>
        </div>
        <div>
          <ContactUs />
        </div>
      </>
      <Reviews />
    </main>
  );
}
