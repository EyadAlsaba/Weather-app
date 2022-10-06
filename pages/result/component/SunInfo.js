import { WiHorizonAlt, WiHorizon } from "react-icons/wi";
import { IconContext } from "react-icons";

export default function SunInfo({ props }) {
  return (
    <section className="">
      <div className="flex">

        <div className="lg:w-24 lg:h-24 lg:text-lg md:w-16 md:h-16 md:text-xs
         rounded-full flex flex-col justify-center items-center text-white bg-blackBG w-16 h-16 border-[1px] border-slate-700">
          <IconContext.Provider value={{ size: '1.5rem' }}>
            <WiHorizonAlt />
          </IconContext.Provider>
          <p>{props.sunrise}</p>
        </div>

        <div className="lg:w-24 lg:h-24 lg:text-lg md:w-16 md:h-16 md:text-xs
         rounded-full flex flex-col justify-center items-center text-white bg-blackBG ml-1 w-16 h-16 border-[1px] border-slate-700">
          <IconContext.Provider value={{ size: '1.5rem' }}>
            <WiHorizon />
          </IconContext.Provider>
          <p>{props.sunset}</p>
        </div>

      </div>
    </section>
  )
}