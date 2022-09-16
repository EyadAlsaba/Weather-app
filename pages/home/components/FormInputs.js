import { useState } from "react";
import { inputValidator } from "../../../utils/handlers";
import { useRouter } from "next/router";
import SearchSVG from "./SearchSVG"
import GeolocationBtn from "./Geolocation";

export default function Form() {
  const router = useRouter();
  const [city, setCity] = useState('');
  const [invalid, setInvalid] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    inputValidator(city) ?
      router.push(`/result/${city}`)
      :
      setInvalid(true);
    setTimeout(() => setInvalid(false), 5000)
  }

  return (
    <>
      <div className="relative mx-auto top-1/2 w-2/3 lg:w-1/3">
        {
          invalid && <p className="block absolute bottom-full rounded-sm py-1  bg-blackBackground text-center text-red-500 uppercase">
            city name must not contain numbers, spaces, or character %$#@!*_^
          </p>
        }
        <form onSubmit={submitHandler}>
          <div className="bg-grayMe py-3 rounded-t flex flex-row">
            <div className="w-8 ml-4">
              <SearchSVG />
            </div>
            <input type='text'
              placeholder="city name"
              className="capitalize w-full bg-inherit placeholder:text-blueMe focus:outline-none text-blueMe md:text-lg text-sm"
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
        </form>
        <GeolocationBtn />
      </div>
    </>
  )
}