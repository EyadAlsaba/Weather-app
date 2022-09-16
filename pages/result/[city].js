import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getData } from "../../utils/handlers";
import HomeIcon from './component/HomeSVG'

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
      'temperature': data.main.temp,
      'description': data.weather[0].description,
      'sunrise': data.sys.sunrise,
      'sunset': data.sys.sunset,
      'pressure': data.main.pressure,
      'humidity': data.main.humidity,
      'iconSrc': `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    }

    return (
      <div className='w-full h-screen bg-gray-100'>
        <h4>{query.city}</h4>
        <HomeIcon />
      </div>
    )
  }
}