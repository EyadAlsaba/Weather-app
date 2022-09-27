import { WiHorizonAlt, WiHorizon } from "react-icons/wi";
import { IconContext } from "react-icons";

export default function SunInfo({ props }) {
  return (
    //sec: relative top-1/3 md:mt-40 py-2
    //div1: bg-blackBG flex justify-evenly items-center md:text-xl
    //div2: text-center py-2 text-white
    //p: capitalize my-1
    <section className="relative md:bottom-20 md:ml-10 md:mt-5">
      <div className="flex md:flex-col">
        <div className="lg:w-20 lg:h-20 lg:text-lg md:w-16 md:h-16 md:text-sm rounded-full flex flex-col justify-center items-center text-white bg-blackBG md:mb-4">
          <IconContext.Provider value={{ size: '1.5rem' }}>
            <WiHorizonAlt />
          </IconContext.Provider>
          <p>{props.sunrise}</p>
        </div>
        <div className="lg:w-20 lg:h-20 lg:text-lg md:w-16 md:h-16 md:text-sm rounded-full flex flex-col justify-center items-center text-white bg-blackBG">
          <IconContext.Provider value={{ size: '1.5rem' }}>
            <WiHorizon />
          </IconContext.Provider>
          <p>{props.sunset}</p>
        </div>
      </div>
    </section>
  )
}