/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getData } from "../../utils/handlers";
import HomeIcon from './component/HomeSVG'
import moment from "moment";

export default function WeatherInfo() {
  const { query } = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const docs = await getData(query.city)
      setData(docs);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data == null, query.city]);

  if (data) {
    const cityInfo = {
      'cityName': data.name,
      'country': data.sys.country,
      'temperature': data.main.temp.toFixed(),
      'description': data.weather[0].description,
      'sunrise': moment.unix(data.sys.sunrise).format('LT'),
      'sunset': moment.unix(data.sys.sunset).format('LT'),
      'pressure': data.main.pressure,
      'humidity': data.main.humidity,
      'iconSrc': `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    }
    return (
      <>
        <HomeIcon />
        <div className='w-full h-screen bg-lightBlue'>
          <section className="relative top-20">
            <h1 className=" bg-blackBackground text-white mx-auto p-3 rounded h-fit w-fit  text-2xl tracking-normal text-center">
              {cityInfo.cityName} | {cityInfo.country}
            </h1>
            <div className="w-full flex justify-center pt-3  items-center">
              <img src={cityInfo.iconSrc} alt='weather icon' />
              <p className="text-2xl px-1 text-white w-fit">
                {cityInfo.temperature}
                <span className="p-1">°C</span>
              </p>
            </div>
          </section>
          <section className="w-full relative top-20 capitalize">
            <p className="text-white mx-auto text-center">{cityInfo.description}</p>
          </section>
          <section className="relative top-60 py-2">
            <div className="bg-blackBackground flex justify-evenly items-center">
              <div className="text-center py-2 text-white">
                <p className="capitalize my-1">sunrise</p>
                <p>{cityInfo.sunrise}</p>
              </div>
              <div className="text-center py-2 text-white">
                <p className="capitalize my-1">sunset</p>
                <p>{cityInfo.sunset}</p>
              </div>
            </div>
          </section>
          <section className="relative top-60 py-2">
            <div className="bg-blackBackground flex justify-evenly items-center">
              <div className="text-center py-2 text-white">
                <p className=" capitalize my-1">humidity</p>
                <p className="text-white">{cityInfo.humidity}%</p>
              </div>
              <div className="text-center py-2 text-white">
                <p className="capitalize my-1">pressure</p>
                <p className="">{cityInfo.pressure} hPa</p>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}