import Image from "next/image";
import GoogleMaps from "./components/GoogleMaps";
import GetInTouch from "./components/GetInTouch";
import NavBar from "./components/NavBar";
import Reviews from "./components/reviews";
export default function Home() {
  return (
    <main>
      <>
        {/* //*to use this component just use <GoogleMaps/> in the main component */}
        <NavBar />
        <div className="flex flex-row justify-center pt-[47px]">
          <div className="mr-[47px]">
            <GoogleMaps />
          </div>
          <div><GetInTouch/></div>
        </div>
      </>
      <Reviews />
    </main>
  );
}
