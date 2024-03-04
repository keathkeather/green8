import Image from "next/image";
import GoogleMaps from "./components/GoogleMaps";
import GetStarted from "./components/GetStarted";
import NavBar from "./components/NavBar";

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
          <div><GetStarted/></div>
        </div>
      </>
      
    </main>
  );
}
