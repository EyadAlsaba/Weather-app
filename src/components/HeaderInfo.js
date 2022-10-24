import Animation from './Animation'

export default function HeaderInfo({ props }) {
  if (!props) return;

  return (
    <>
      <section className="pt-10">
        <h1 className=" bg-blackBG  text-white mx-auto p-3 rounded h-fit w-fit text-2xl  md:text-3xl tracking-normal text-center">
          {props.name} | {props.country}
        </h1>
        <div className="w-full flex justify-center pt-3 items-center">
          <Animation animationProps={{ id: props.icon, w: 50, h: 50 }} />
          <p className="px-1 drop-shadow-md text-white w-fit text-lg md:text-2xl">
            {props.temp}
            <span className="p-1 drop-shadow-md text-base md:text-2xl uppercase">
              {props.unit === 'metric' ? '°c' : '°f'}
            </span>
          </p>
        </div>
      </section>
      <section className="w-full mt-4 capitalize">
        <p className="text-white mx-auto text-center drop-shadow-md text-lg md:text-xl">
          {props.desc}
        </p>
      </section>
    </>
  )
}
