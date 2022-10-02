import dayjs from "dayjs"
import { IconContext } from "react-icons";
import { VscArrowSmallDown, VscArrowSmallUp } from 'react-icons/vsc'
import Animation from './Animation'

export default function Forecast({ day }) {
  const weatherID = day.weather[0].id;
  return (
    <section className="flex justify-between items-center">

      <div className="w-fit text-xs md:text-sm lg:text-lg flex justify-center items-center md:flex-row flex-col">
        <p className="md:px-1">
          {dayjs.unix(day.dt).toString().slice(0, 3)}
        </p>
        <p className="md:px-1">{dayjs.unix(day.dt).toString().slice(4, 11)}</p>
      </div>

      <div className="flex justify-center items-center md:flex-row flex-col w-fit text-xs md:text-sm lg:text-lg text-center">
        <Animation animationProps={{ id: weatherID, w: 40, h: 40 }} />
        <p className="">{day.weather[0].description}</p>
      </div>

      <div className="w-fit flex justify-center flex-col md:flex-row align-middle items-center text-xs md:text-sm lg:text-lg">

        <div className="flex md:justify-center justify-start   w-20 md:mr-1 text-blue-500">
          <IconContext.Provider value={{ size: '1.5em' }}>
            <VscArrowSmallDown />
            <p>{day.temp.min.toFixed()}
              <span className="text-sm align-middle px-1">
                °C
              </span>
            </p>
          </IconContext.Provider>
        </div>

        <div className="flex md:justify-center justify-start  w-20 md:ml-1 text-red-500">
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