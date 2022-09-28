import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getCoordinates } from "../../utils/handlers";
import HomeIcon from './component/HomeSVG'
import dayjs from "dayjs";
import HumidityAndPressure from './component/HandP';
import SunInfo from './component/SunInfo';
import HeaderInfo from './component/HeaderInfo';
import Forecast from "./component/Forecast";

export default function WeatherInfo() {
  const { query } = useRouter();
  const [data, setData] = useState(null);
  const [geoInfo, setInfo] = useState(null);
  const lat = Number(query.lat);
  const lon = Number(query.lon);

  useEffect(() => {
    (async () => {
      if (Object.hasOwn(query, 'lat')) {
        const geoDocs = await getCoordinates({ lat, lon });
        setInfo(geoDocs);
      };
      const res = await fetch('http://localhost:3000/api/getPLH');
      const oneCallDocs = await res.json();
      setData(oneCallDocs);
      // console.log(oneCallDocs)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [geoInfo == null, data == null, !isNaN(lat)]);

  if (geoInfo && data) {
    const cityInfo = {
      'cityName': geoInfo.name,
      'country': geoInfo.sys.country,
      'temperature': geoInfo.main.temp.toFixed(),
      'description': geoInfo.weather[0].description,
      'sunrise': dayjs.unix(geoInfo.sys.sunrise).format('HH:mm'),
      'sunset': dayjs.unix(geoInfo.sys.sunset).format('HH:mm'),
      'pressure': geoInfo.main.pressure,
      'humidity': geoInfo.main.humidity,
      'iconSrc': `https://openweathermap.org/img/w/${geoInfo.weather[0].icon}.png`
    }
    const foreCast = {
      datum: dayjs.unix(data.daily[5].dt).toString().slice(0, 11),
      desc: data.daily[0].weather[0].description,
      min: data.daily[0].temp.min.toFixed(),
      max: data.daily[0].temp.max.toFixed()
    }
    return (
      <>
        <HomeIcon />
        <div className='w-full h-full'>
          <HeaderInfo props={{ name: cityInfo.cityName, country: cityInfo.country, icon: cityInfo.iconSrc, temp: cityInfo.temperature, desc: cityInfo.description }} />
          <div className="flex relative top-24 justify-center">
            <SunInfo props={{ sunrise: cityInfo.sunrise, sunset: cityInfo.sunset }} />
            <HumidityAndPressure props={{ humidity: cityInfo.humidity, pressure: cityInfo.pressure }} />
          </div>

          <section className="relative top-48 h-full mt-10">
            <div id='forecaster' className="flex justify-center flex-col md:w-9/12 mx-auto rounded-md text-white bg-blackBG px-5">
              {
                data && data.daily.map((day, index) => {
                  return (
                    <div key={index} className='border-b-2 py-2'>
                      <Forecast day={day} />
                    </div>
                  )
                })
              }
            </div>
          </section>

        </div>
      </>
    )
  }
}

  // useEffect(() => {
  //   (async () => {
  //     if (Object.hasOwn(query, 'lat')) {
  //       const docs = await getCoordinates({ lat, lon });
  //       setData(docs)
  //     };
  //   })();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [data == null, !isNaN(lat)]);