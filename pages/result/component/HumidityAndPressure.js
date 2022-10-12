import { WiHumidity, WiBarometer } from "react-icons/wi";
import { IconContext } from "react-icons";

export default function HumidityAndPressure({ props }) {
  if(props !== undefined){
    return (
      <section>
        <div className="flex">
  
          <div className="lg:w-24 lg:h-24 lg:text-xl md:w-16 md:h-16 md:text-sm border-[1px] border-slate-700
          rounded-full flex flex-col justify-center items-center text-white bg-blackBG mx-1 w-16 h-16 text-xs">
            <IconContext.Provider value={{ size: '1.4rem' }}>
              <WiHumidity />
            </IconContext.Provider>
            <p>
              {props.humidity}
            </p>
          </div>
  
          <div className="lg:w-24 lg:h-24 lg:text-xl md:w-16 md:h-16 md:text-sm border-[1px] border-slate-700
          rounded-full flex flex-col justify-center items-center text-white bg-blackBG mx-1 w-16 h-16 text-xs">
            <IconContext.Provider
              value={{ size: '1.4rem' }}>
              <WiBarometer />
            </IconContext.Provider>
            <p>
              {props.pressure}
            </p>
          </div>
  
        </div>
      </section>
    )
  }
}