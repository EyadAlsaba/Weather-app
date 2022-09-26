import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getCoordinates } from "../../utils/handlers";
import HomeIcon from './component/HomeSVG'
import dayjs from "dayjs";
import HumidityAndPressure from './component/HandP';
import SunInfo from './component/SunInfo';
import HeaderInfo from './component/HeaderInfo';

export default function WeatherInfo() {
  const { query } = useRouter();
  const [data, setData] = useState(null);
  const lat = Number(query.lat);
  const lon = Number(query.lon);

  useEffect(() => {
    (async () => {
      if (Object.hasOwn(query, 'lat')) {
        const docs = await getCoordinates({ lat, lon });
        setData(docs)
      };
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data == null, !isNaN(lat)]);

  if (data) {
    const cityInfo = {
      'cityName': data.name,
      'country': data.sys.country,
      'temperature': data.main.temp.toFixed(),
      'description': data.weather[0].description,
      'sunrise': dayjs.unix(data.sys.sunrise).format('HH:mm'),
      'sunset': dayjs.unix(data.sys.sunset).format('HH:mm'),
      'pressure': data.main.pressure,
      'humidity': data.main.humidity,
      'iconSrc': `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    }

    return (
      <>
        <HomeIcon />
        <div className='w-full h-screen bg-lightBlue'>
          <HeaderInfo props={{ name: cityInfo.cityName, country: cityInfo.country, icon: cityInfo.iconSrc, temp: cityInfo.temperature, desc: cityInfo.description }} />
          <SunInfo props={{ sunrise: cityInfo.sunrise, sunset: cityInfo.sunset }} />
          <HumidityAndPressure props={{ humidity: cityInfo.humidity, pressure: cityInfo.pressure }} />
        </div>
      </>
    )
  }
}