import dayjs from "dayjs"
export default function Forecast({ day }) {
  return (
    <>
      <div className="w-fit text-xs text-center">
        <p>
          {dayjs.unix(day.dt).toString().slice(0, 11)}
        </p>
      </div>
      <div className="w-fit text-xs text-center w-inherit">
        <p>{day.weather[0].description}</p>
      </div>
      <div className="w-fit text-xs text-center">
        <p>min {day.temp.min.toFixed()}, max {day.temp.max.toFixed()}</p>
      </div>
    </>
  )
}