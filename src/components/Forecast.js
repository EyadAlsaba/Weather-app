import dayjs from "dayjs"
import { IconContext } from "react-icons";
import { VscArrowSmallDown, VscArrowSmallUp } from 'react-icons/vsc'
import Animation from './Animation'

export default function Forecast({ props }) {
  if (!props) return;

  const { day, unit } = props;
  const weatherID = day.weather[0].id;
  return (
    <section className="flex justify-between">

      <div className="w-[20%] text-xs md:text-sm lg:text-lg flex justify-center md:items-center items-start md:flex-row flex-col">
        <p className="md:px-1">
          {dayjs.unix(day.dt).toString().slice(0, 3)}
        </p>
        <p className="md:px-1">{dayjs.unix(day.dt).toString().slice(4, 11)}</p>
      </div>

      <div className="flex justify-center items-center flex-col w-[35%] text-xs md:text-sm lg:text-lg text-center">
        <Animation animationProps={{ id: weatherID, w: 40, h: 40 }} />
        <p className="">{day.weather[0].description}</p>
      </div>

      <div className="w-[25%] flex justify-center flex-col md:flex-row md:items-center items-end text-xs md:text-sm lg:text-lg">

        <div className="flex md:justify-center justify-start md:w-20 w-14 md:mr-1  text-white">
          <IconContext.Provider value={{ size: '1.5em' }}>
            <span className='text-blue-500'>
              <VscArrowSmallDown />
            </span>
            <p>{day.temp.min.toFixed()}
              <span className="text-sm md:text-base align-middle px-1 uppercase">
                {unit === 'metric' ? '°c' : '°f'}
              </span>
            </p>
          </IconContext.Provider>
        </div>

        <div className="flex md:justify-center justify-start  md:w-20 w-14 md:ml-1 text-white">
          <IconContext.Provider value={{ size: '1.5em' }}>
            <span className='text-red-500'>
              <VscArrowSmallUp />
            </span>
          </IconContext.Provider>
          <p>{day.temp.max.toFixed()}
            <span className="text-sm md:text-base align-middle px-1 uppercase">
              {unit === 'metric' ? '°c' : '°f'}
            </span>
          </p>
        </div>

      </div>
    </section>
  )
}