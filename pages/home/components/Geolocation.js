import GeolocationSVG from "./GeoLocSVG"
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function GeolocationBtn() {
  const router = useRouter();
  const [fail, setFail] = useState(false);

  function userGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallBack);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  async function successCallback(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    router.push(`/result/query?lat=${lat}&lon=${lon}`);
  };

  function errorCallBack(error) {
    if (error) {
      setFail(true);
      setTimeout(() => setFail(false), 3000)
    }
  }

  return (
    <>
      <div className="bg-blueMe py-3 rounded-b flex flex-row transition-all delay-200 hover:opacity-75 ">
        <div className="w-8 ml-4">
          <GeolocationSVG />
        </div>
        <button className="capitalize text-grayMe md:text-lg text-sm  w-full text-start"
          onClick={() => userGeolocation()}
        >
          current location
        </button>
      </div>
      {
        fail && <p className="block text-center uppercase bg-blackBG rounded-b py-2 text-red-500">
          please enable your location</p>
      }
    </>
  )
}