import useSWR from 'swr';
import { useRouter } from 'next/router';
import { createContext, useState } from "react";
import { getLocalStorageOrDefault, fetcherAsync } from "./handlers";
import dayjs from "dayjs";

const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc);
dayjs.extend(timezone);

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const { query } = useRouter();
  const storageData = getLocalStorageOrDefault('configs', {});
  const [config, setConfig] = useState(storageData);

  let units;
  let reverseGeoURL;
  let oneCallURL;
  let cityInfo;

  if (query.hasOwnProperty('lat')) {
    units = config.ud ? 'imperial' : 'metric'
    reverseGeoURL =
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${query.lat}&lon=${query.lon}&limit=1&appid=${process.env.NEXT_PUBLIC_API_KEY}`;
    oneCallURL =
      `https://api.openweathermap.org/data/3.0/onecall?lat=${query.lat}&lon=${query.lon}&units=${units}&exclude=hourly,minutely&appid=${process.env.NEXT_PUBLIC_API_ONE_CALL}`;
  }

  const { data: cityData, error: cityDataError } = useSWR(reverseGeoURL, fetcherAsync);
  const { data: oneCallData, error: oneCallDataError } = useSWR(oneCallURL, fetcherAsync);

  const imagesUrl = {
    Clouds: "/Clouds.jpg",
    S_Clouds: "/Clouds Small.png",
    Rain: "/Rain.jpg",
    S_Rain: "/Rain Small.png",
    Clear: "/Clear.jpg",
    S_Clear: "/Clear Small.png",
    Snow: "/Snow.jpg",
    S_Snow: "/Snow Small.png",
    Thunderstorm: "/Thunderstorm.jpg",
    S_Thunderstorm: "/Thunderstorm Small.png",
    Fog: "/Foggy.jpg",
    S_Fog: "/Foggy Small.png",
    Mist: "/Foggy.jpg",
    S_Mist: "/Foggy Small.png",
    Dust: "/Foggy.jpg",
    S_Dust: "/Foggy Small.png",
    Tornado: "/Foggy.jpg",
    S_Tornado: "/Foggy Small.png"
  };

  if (oneCallData && cityData) {
    cityInfo = {
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
      'week-forecast': oneCallData.daily.filter((day, index) => index !== 0 ? day : false),
      'units': units,
      'backGroundImage': imagesUrl[`${oneCallData.current.weather[0].main}`],
      'backgroundPlaceholder': imagesUrl[`S_${oneCallData.current.weather[0].main}`]
    };
  }


  return (
    <DataContext.Provider value={{
      cityDataError,
      oneCallDataError,
      setConfig,
      cityInfo
    }}>
      {children}
    </DataContext.Provider>
  )
}

module.exports = { DataContext, DataProvider }