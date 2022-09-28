import dayjs from "dayjs"
import { IconContext } from "react-icons";
import { VscArrowSmallDown, VscArrowSmallUp } from 'react-icons/vsc'
import Lottie from 'react-lottie';
import partlyRain from './lotties/Rain.json'

//https://openweathermap.org/weather-conditions

export default function Forecast({ day }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: partlyRain,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <section className="flex justify-between items-center ">
      <div className="w-fit text-xs md:text-sm lg:text-lg">
        <p>
          {dayjs.unix(day.dt).toString().slice(0, 11)}
        </p>
      </div>
      <div className="flex justify-center items-center  w-fit text-xs md:text-sm lg:text-lg w-inherit">
        <div id='partlyRain' className="mx-1">
          <Lottie
            options={defaultOptions}
            height={60}
            width={60}
          />
        </div>
        <p className="">{day.weather[0].description}</p>
      </div>
      <div className="w-fit flex justify-center  align-middle items-center text-xs md:text-sm lg:text-lg">

        <div className="flex justify-start mx-1 w-20">
          <IconContext.Provider value={{ size: '1.5em' }}>
            <VscArrowSmallDown />
            <p>{day.temp.min.toFixed()}
              <span className="text-sm align-middle px-1">
                °C
              </span>
            </p>
          </IconContext.Provider>
        </div>

        <div className="flex justify-start mx-1 w-20">
          <IconContext.Provider value={{ size: '1.5em' }}>
            <VscArrowSmallUp />
          </IconContext.Provider>
          <p>{day.temp.max.toFixed()}
            <span className="text-sm align-middle px-1">
              °C
            </span>
          </p>
        </div>

      </div>
    </section>
  )
}