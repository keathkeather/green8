import Image from "next/image";
import GoogleMaps from "./components/GoogleMaps";
import GetInTouch from "./components/GetInTouch";

export default function Home() {
  return (
    <main>
      <>
        {/* //*to use this component just use <GoogleMaps/> in the main component */}
        <div className="flex flex-row justify-center py-10">
          <div className="mr-[63px]">
            <GoogleMaps />
          </div>
          <div><GetInTouch/></div>
        </div>
      </>
      
    </main>
  );
}
