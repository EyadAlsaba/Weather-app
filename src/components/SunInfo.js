import { WiHorizonAlt, WiHorizon } from "react-icons/wi";
import { IconContext } from "react-icons";

export default function SunInfo({ props }) {
  if (!props) return;

  const twentyFourRise = props.sunrise.trim().split(/\s+/);
  const twentyFourSet = props.sunset.trim().split(/\s+/);

  return (
    <section>
      <div className="flex">

        <div className="lg:w-24 lg:h-24 lg:text-xl md:w-16 md:h-16 md:text-sm 
          rounded-full flex flex-col justify-center items-center text-white bg-blackBG mx-1 w-16 h-16 text-xs">
          <IconContext.Provider value={{ size: '1.4rem' }}>
            <WiHorizonAlt />
          </IconContext.Provider>
          {
            props.sunrise.includes('m') ?
              <>
                <p>{twentyFourRise[0]}</p>
                <p>{twentyFourRise[1]}</p>
              </>
              :
              <p>{props.sunrise}</p>
          }
        </div>

        <div className="lg:w-24 lg:h-24 lg:text-xl md:w-16 md:h-16 md:text-sm 
          rounded-full flex flex-col justify-center items-center text-white bg-blackBG mx-1 w-16 h-16 text-xs">
          <IconContext.Provider value={{ size: '1.4rem' }}>
            <WiHorizon />
          </IconContext.Provider>
          {
            props.sunset.includes('m') ?
              <>
                <p>{twentyFourSet[0]}</p>
                <p>{twentyFourSet[1]}</p>
              </>
              :
              <p>{props.sunset}</p>
          }
        </div>

      </div>
    </section>
  )
}
