export default function SunInfo({ props }) {
  return (
    <section className="relative top-1/3 md:mt-40 py-2">
      <div className="bg-blackBG flex justify-evenly items-center md:text-xl">
        <div className="text-center py-2 text-white">
          <p className="capitalize my-1">sunrise</p>
          <p>{props.sunrise}</p>
        </div>
        <div className="text-center py-2 text-white">
          <p className="capitalize my-1">sunset</p>
          <p>{props.sunset}</p>
        </div>
      </div>
    </section>
  )
}