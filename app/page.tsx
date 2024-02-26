import Image from "next/image";
import GoogleMaps from "./components/GoogleMaps";
export default function Home() {
  return (
    <main>
      <>
        {/* //*to use this component jsut use <GoogleMaps/> in the main component */}
        <GoogleMaps/>
      </>
      
    </main>
  );
}
