'use client'
import React ,{useEffect}from "react";
import { Loader } from "@googlemaps/js-api-loader";
export default function GoogleMaps(){
    const mapReference = React.useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const initializeMap = async()=>{
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY!,
                version: 'quarterly',
            });
            const {Map} = await loader.importLibrary('maps');
        
            const locationInMap={
                lat: 10.326120852450023,
                lng: 123.95254286259015
            };
            //* Marker
            const {Marker} = (await loader.importLibrary('marker')) as google.maps.MarkerLibrary;
            const options: google.maps.MapOptions={
                center: locationInMap,
                zoom: 15,
                mapId:'NEXT_MAPS_TUTS',
            };
            
            const map = new Map(mapReference.current as HTMLDivElement,options);

            const marker = new Marker({
                map:map,
                position:locationInMap,
                
            });
        };
        initializeMap();
    },[]);

    return (
        <div className="w-72 h-72 " ref={mapReference}>
        GoogleMaps
    </div>
    )
}