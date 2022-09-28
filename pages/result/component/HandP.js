import { WiHumidity, WiBarometer } from "react-icons/wi";
import { IconContext } from "react-icons";

export default function HumidityAndPressure({ props }) {
  return (
    //sec: top-1/3 py-2 relative md:bottom-20 md:right-0 md:ml-10 md:mt-5
    // div: bg-blackBG flex justify-evenly items-center md:text-xl
    // sub-div1: text-center py-2 text-white
    // p: capitalize my-1 drop
    <section className="">
      <div className="flex">

        <div className="lg:w-20 lg:h-20 lg:text-lg md:w-16 md:h-16 md:text-sm rounded-full flex flex-col justify-center items-center text-white bg-blackBG md:mb-4 mx-1">
          <IconContext.Provider value={{ size: '1.5rem' }}>
            <WiHumidity />
          </IconContext.Provider>
          <p className="">
            {props.humidity}
          </p>
        </div>

        <div className="lg:w-20 lg:h-20 lg:text-lg md:w-16 md:h-16 md:text-sm rounded-full flex flex-col justify-center items-center text-white bg-blackBG md:mb-4">
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