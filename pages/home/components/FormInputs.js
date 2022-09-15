import { useState } from "react";
import { inputValidator } from "../../../utils/handlers";
import { useRouter } from "next/router";
import SearchSVG from "./SearchSVG"
import GeolocationBtn from "./Geolocation";

export default function Form() {
  const router = useRouter();
  const [city, setCity] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    inputValidator(city) ? router.push(`/result/${city}`) : false;
  }

  return (
    <div className="w-1/3 relative top-[460px] mx-auto">
      <form onSubmit={submitHandler}>
        <div className="bg-grayMe py-3 rounded-t flex flex-row">
          <div className="w-8 ml-4">
            <SearchSVG />
          </div>
          <input type='text'
            placeholder="city name"
            className="capitalize w-full bg-inherit placeholder:text-blueMe focus:outline-none text-blueMe"
            title="city name must not contain numbers, start/end with space or any character %$#@!*_^"
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
      </form>
      <GeolocationBtn />
    </div>
  )
}