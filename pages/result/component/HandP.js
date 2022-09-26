export default function HumidityAndPressure({ props }) {
  return (
    <section className="relative top-1/3 py-2">
      <div className="bg-blackBG flex justify-evenly items-center md:text-xl">
        <div className="text-center py-2 text-white">
          <p className=" capitalize my-1 drop">humidity</p>
          <p className="text-white drop">{props.humidity}%</p>
        </div>
        <div className="text-center py-2 text-white">
          <p className="capitalize my-1">pressure</p>
          <p className="">{props.pressure} hPa</p>
        </div>
      </div>
    </section>
  )
}