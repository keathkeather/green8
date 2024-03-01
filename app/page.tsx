import Image from "next/image";
import GoogleMaps from "./components/GoogleMaps";
import GetStarted from "./components/GetStarted";

export default function Home() {
  return (
    <main>
      <>
        {/* //*to use this component just use <GoogleMaps/> in the main component */}
        <GoogleMaps/>
        <GetStarted/>
      </>
      
    </main>
  );
}
