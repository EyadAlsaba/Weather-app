import dayjs from "dayjs"
import { IconContext } from "react-icons";
import { VscArrowSmallDown, VscArrowSmallUp } from 'react-icons/vsc'
import Animation from './Animation'

export default function Forecast({ day }) {

  const weatherID = day.weather[0].id;
  return (
    <section className="flex justify-between items-center">

      <div className="w-fit text-xs md:text-sm lg:text-lg">
        <p>
          {dayjs.unix(day.dt).toString().slice(0, 11)}
        </p>
      </div>

      <div className="flex justify-center items-center  w-fit text-xs md:text-sm lg:text-lg w-inherit">
        <Animation weatherId={weatherID}/>
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