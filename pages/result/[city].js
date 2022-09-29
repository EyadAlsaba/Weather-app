import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getCoordinates,getCityInfo } from "../../utils/handlers";
import HomeIcon from './component/HomeSVG'
import dayjs from "dayjs";
import HumidityAndPressure from './component/HandP';
import SunInfo from './component/SunInfo';
import HeaderInfo from './component/HeaderInfo';
import Forecast from "./component/Forecast";

export default function WeatherInfo() {
  const { query } = useRouter();
  const [cityData, setCityData] = useState(null);
  const [oneCallData,setOneCallData] = useState(null);
  const lat = Number(query.lat);
  const lon = Number(query.lon);

  useEffect(() => {
    (async () => {
      if (Object.hasOwn(query, 'lat')) {
        const oneCallAPI = await getCoordinates({ lat, lon });
         setOneCallData(oneCallAPI)
        const cityInfo = await getCityInfo({lat, lon})  
        setCityData(cityInfo);
      };
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oneCallData == null, !isNaN(lat)]);

  if (oneCallData && cityData) {
    console.log(oneCallData,'city =>',cityData)
    const cityInfo = {
      'cityName': cityData.name,
      'country': cityData.sys.country,
      'temperature': cityData.main.temp.toFixed(),
      'description': cityData.weather[0].description,
      'sunrise': dayjs.unix(cityData.sys.sunrise).format('HH:mm'),
      'sunset': dayjs.unix(cityData.sys.sunset).format('HH:mm'),
      'pressure': cityData.main.pressure,
      'humidity': cityData.main.humidity,
      'iconSrc': cityData.weather[0].id,
      'week-forecast':oneCallData.daily,
      'hourly-forecast': oneCallData.hourly
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

          {/* <section className="relative top-48 h-full h-[800px] mt-40">
            <div className="flex justify-center flex-col md:w-9/12 mx-auto rounded-md text-white bg-blackBG px-5 ">
              {
                cityInfo && cityInfo['week-forecast'].map((day, index) => {
                  return (
                    <div key={index} className='border-b-2 py-2'>
                      <Forecast day={day} />
                    </div>
                  )
                })
              }
            </div>
          </section> */}

        </div>
      </>
    )
  }
}
/*
      const res = await fetch('http://localhost:3000/api/getPLH');
      const oneCallDocs = await res.json();
      setData(oneCallDocs);
---------
  useEffect(() => {
    (async () => {
      if (Object.hasOwn(query, 'lat')) {
        const docs = await getCoordinates({ lat, lon });
        setData(docs)
      };
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data == null, !isNaN(lat)]);
  ----------
*/
