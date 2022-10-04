import useSWR from 'swr';
import { useRouter } from "next/router";
import { fetcherAsync } from "../../utils/handlers";
import { useState } from 'react';
import Error from '../404'
import HomeIcon from './component/HomeSVG'
import dayjs from "dayjs";
import HumidityAndPressure from './component/HumidityAndPressure';
import SunInfo from './component/SunInfo';
import HeaderInfo from './component/HeaderInfo';
import Forecast from "./component/Forecast";
import Animation from './component/Animation';
import Modal from './component/ConfigModal';

export default function WeatherInfo() {
  const { query } = useRouter();
  const lat = Number(query.lat);
  const lon = Number(query.lon);
  const [config, setConfig] = useState({ tz: '', tf: '', ud: '' });

  let reverseGeoURL;
  let oneCallURL;

  if (!isNaN(lat)) {
    reverseGeoURL =
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&units=${config.ud}&appid=${process.env.NEXT_PUBLIC_API_KEY}`;
    oneCallURL =
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${config.ud}&exclude=minutely&appid=${process.env.NEXT_PUBLIC_API_ONE_CALL}`;
  }

  const { data: cityData, error: cityDataError } = useSWR(reverseGeoURL, fetcherAsync);
  const { data: oneCallData, error: oneCallDataError } = useSWR('/api/getPLH', fetcherAsync);

  if (oneCallData && cityData) {
    const cityInfo = {
      'cityName': cityData[0].name,
      'country': cityData[0].country,
      'temperature': oneCallData.current.temp.toFixed(),
      'description': oneCallData.current.weather[0].description,
      'sunrise': dayjs.unix(oneCallData.current.sunrise).format('HH:mm'),
      'sunset': dayjs.unix(oneCallData.current.sunset).format('HH:mm'),
      'pressure': oneCallData.current.pressure,
      'humidity': oneCallData.current.humidity,
      'iconSrc': oneCallData.current.weather[0].id,
      'timezone': {
        'tz': oneCallData.timezone,
        'tz-offset': oneCallData.timezone_offset
      },
      'week-forecast': oneCallData.daily,
      'hourly-forecast': oneCallData.hourly
    }

    return (
      <>
        <div className='relative'>
          <HeaderInfo props={{ name: cityInfo.cityName, country: cityInfo.country, icon: cityInfo.iconSrc, temp: cityInfo.temperature, desc: cityInfo.description }} />

          <div className="flex mt-8  justify-center w-fit mx-auto">
            <SunInfo props={{ sunrise: cityInfo.sunrise, sunset: cityInfo.sunset }} />
            <HumidityAndPressure props={{ humidity: cityInfo.humidity, pressure: cityInfo.pressure }} />
          </div>
          <section className="mt-14 md:h-[800px] h-auto  mx-auto">
            <div className="flex justify-center flex-col w-[90%] md:w-[75%] lg:w-[65%] mx-auto rounded-md text-white bg-blackBG px-5 ">
              {
                cityInfo && cityInfo['week-forecast'].map((day, index) => {
                  return (
                    <div key={index} className={`py-4 ${index == 7 ? 'border-0' : 'border-b-2 border-slate-600'}`}>
                      <Forecast day={day} />
                    </div>
                  )
                })
              }
            </div>
          </section>
          <section className='relative h-12 w-full my-5 md:m-0  md:absolute md:top-48'>
            <HomeIcon />
            <Modal props={{ config, setConfig }} />
          </section>
        </div>
      </>
    )
  } else if (cityDataError || oneCallDataError) {
    return (
      <Error />
    )
  } else {
    return (
      <div className='mt-24'>
        <Animation animationProps={{ id: 100, w: 300, h: 300 }} />
      </div>
    )
  }
};
