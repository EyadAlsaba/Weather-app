import useSWR from 'swr';
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { fetcherAsync, getLocalStorageOrDefault } from "../../utils/handlers";
import { useState } from 'react';
import Error from '../404'
import {
  HomeBtn,
  HumidityAndPressure,
  SunInfo,
  HeaderInfo,
  Forecast,
  Animation,
  Modal,
} from '../../components'

const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc);
dayjs.extend(timezone);

export default function WeatherInfo() {
  const { query } = useRouter();
  const storageData = getLocalStorageOrDefault('configs', {});
  const [config, setConfig] = useState(storageData);

  let units;
  let reverseGeoURL;
  let oneCallURL;

  if (query.lat) {
    units = config.ud ? 'imperial' : 'metric'
    reverseGeoURL =
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${query.lat}&lon=${query.lon}&limit=1&appid=${process.env.NEXT_PUBLIC_API_KEY}`;
    oneCallURL =
      `https://api.openweathermap.org/data/3.0/onecall?lat=${query.lat}&lon=${query.lon}&units=${units}&exclude=hourly,minutely&appid=${process.env.NEXT_PUBLIC_API_ONE_CALL}`;
  }

  const { data: cityData, error: cityDataError } = useSWR(reverseGeoURL, fetcherAsync);
  const { data: oneCallData, error: oneCallDataError } = useSWR(oneCallURL, fetcherAsync);

  if (oneCallData && cityData) {
    const cityInfo = {
      'cityName': cityData[0].name,
      'country': cityData[0].country,
      'temperature': oneCallData.current.temp.toFixed(),
      'description': oneCallData.current.weather[0].description,
      'sunrise':
        (config.tz ? dayjs.unix(oneCallData.current.sunrise).tz(oneCallData.timezone).format((config.tf ? 'h:mm a' : 'HH:mm')) :
          dayjs.unix(oneCallData.current.sunrise).format((config.tf ? 'h:mm a' : 'HH:mm'))),
      'sunset':
        (config.tz ? dayjs.unix(oneCallData.current.sunset).tz(oneCallData.timezone).format((config.tf ? 'h:mm a' : 'HH:mm')) :
          dayjs.unix(oneCallData.current.sunset).format((config.tf ? 'h:mm a' : 'HH:mm'))),
      'pressure': oneCallData.current.pressure,
      'humidity': oneCallData.current.humidity,
      'iconSrc': oneCallData.current.weather[0].id,
      'timezone': {
        'tz': oneCallData.timezone
      },
      'week-forecast': oneCallData.daily,
      'units': units
    }

    return (
      <>
        <div className='relative'>
          <HeaderInfo props={{ name: cityInfo.cityName, country: cityInfo.country, icon: cityInfo.iconSrc, temp: cityInfo.temperature, desc: cityInfo.description, unit: cityInfo.units }} />

          <div className="flex mt-8  justify-center w-fit mx-auto">
            <SunInfo props={{ sunrise: cityInfo.sunrise, sunset: cityInfo.sunset, timezone: cityInfo.timezone }} />
            <HumidityAndPressure props={{ humidity: cityInfo.humidity, pressure: cityInfo.pressure }} />
          </div>
          <section className="mt-14 h-[850px]  mx-auto">
            <div className="flex justify-center flex-col w-[90%] md:w-[75%] lg:w-[65%] mx-auto rounded-md text-white bg-blackBG px-5 ">
              {
                cityInfo && cityInfo['week-forecast'].map((day, index) => {
                  if (index > 0) {
                    return (
                      <div key={index} className={`py-4 ${index == 7 ? 'border-0' : 'border-b-2 border-slate-600'}`}>
                        <Forecast props={{ day, unit: cityInfo.units }} />
                      </div>
                    )
                  }
                })
              }
            </div>
          </section>
          <section className='w-full absolute top-40'>
            <HomeBtn />
            <Modal prop={{ updateStorage: setConfig }} />
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
