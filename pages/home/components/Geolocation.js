import GeolocationSVG from "./GeoLocSVG"
import { useRouter } from "next/router";

export default function GeolocationBtn() {
  const router = useRouter();

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
    const geoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`
    const response = await fetch(geoUrl);
    const data = await response.json();
    router.push(`/result/${data.name}`)
  };

  function errorCallBack(error) {
    return error
  }

  return (
    <div className="bg-blueMe py-3 rounded-b flex flex-row hover:opacity-75 transition-all delay-200">
      <div className="w-8 ml-4">
        <GeolocationSVG />
      </div>
      <button className="capitalize text-grayMe"
        onClick={() => userGeolocation()}
        title='please remember to enable your location'>
        use your current location
      </button>
    </div>
  )
}