import { WiHumidity, WiBarometer } from "react-icons/wi";
import { IconContext } from "react-icons";

export default function HumidityAndPressure({ props }) {
  return (
    <section className="">
      <div className="flex">

        <div className="lg:w-24 lg:h-24 lg:text-xl md:w-16 md:h-16 md:text-base border-[1px] border-slate-700
        rounded-full flex flex-col justify-center items-center text-white bg-blackBG md:mb-4 mx-1 w-16 h-16 ">
          <IconContext.Provider value={{ size: '1.5rem' }}>
            <WiHumidity />
          </IconContext.Provider>
          <p className="">
            {props.humidity}
          </p>
        </div>

        <div className="lg:w-24 lg:h-24 lg:text-xl md:w-16 md:h-16 md:text-base md:mb-4 border-[1px] border-slate-700
         rounded-full flex flex-col justify-center items-center text-white bg-blackBG  w-16 h-16">
          <IconContext.Provider
            value={{ size: '1.5rem' }}>
            <WiBarometer />
          </IconContext.Provider>
          <p className="">
            {props.pressure}
          </p>
        </div>

      </div>
    </section>
  )
}