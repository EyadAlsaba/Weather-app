import { useEffect, useState } from "react";
import { getData, getOptions } from "../../../utils/handlers";
import { useRouter } from "next/router";
import SearchSVG from "./SearchSVG"
import GeolocationBtn from "./Geolocation";

export default function Form() {

  const router = useRouter();
  const [city, setCity] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [msg, setMsg] = useState('');
  const [opt, setOpt] = useState(null);

  async function submitHandler(e) {
    e.preventDefault();
    const docs = await getData(city);
    if (docs === undefined) {
      setInvalid(true);
      setMsg('city name must not contain numbers, spaces, or character %$#@!*_^')
    } else {
      if (docs.cod === 200) {
        router.push(`/result/${city}`);
      }
      if (docs.cod === '404') {
        setInvalid(true);
        setMsg(`no results for "${city}"`);
      }
    };
    setTimeout(() => setInvalid(false), 5000)
  }

  useEffect(() => {
    if (city.length !== 0) {
      (async () => {
        const options = await getOptions(city);
        setOpt(options);
      })()
    }
  }, [city])

  return (
    <>
      <div className="relative mx-auto top-1/2 w-2/3 md:w-2/5 lg:w-1/4">
        {
          invalid && <p className="block absolute bottom-full rounded-sm py-1 w-full bg-blackBG text-center text-red-500 uppercase md:text-xl">{msg}</p>
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
        <div className="w-full">
          {
            (opt && city.length !== 0) && opt.map((option, index) => {
              return (
                <button className="w-full bg-grayMe text-blueMe border-b-4 py-1 hover:bg-blueMe hover:text-grayMe md:text-lg text-sm"
                  key={index}
                  onClick={() => router.push(`result/query?lat=${option.lat}&lon=${option.lon}`)}
                >
                  {option.name}, {option.state ? `${option.state},` : null} {option.country}</button>
              )
            })
          }
        </div>
        <GeolocationBtn />
      </div>
    </>
  )
}