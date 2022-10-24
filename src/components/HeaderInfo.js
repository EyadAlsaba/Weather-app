import Animation from './Animation'

export default function HeaderInfo({ props }) {
  if (!props) return;

  return (
    <>
      <section className="pt-10 ">
        <h1 className=" bg-blackBG  text-white mx-auto p-3 rounded h-fit w-fit text-2xl  md:text-3xl tracking-normal drop-shadow-2xl">
          {props.name} | {props.country}
        </h1>
        <div className="w-full flex justify-center pt-3 items-center ">
          <span className='mx-1'>
            <Animation animationProps={{ id: props.icon, w: 50, h: 50 }} />
          </span>
          <p className="px-1 drop-shadow-md text-white w-fit text-lg md:text-2xl rounded bg-blackBG">
            {props.temp}
            <span className="p-1 drop-shadow-md text-base md:text-2xl uppercase">
              {props.unit === 'metric' ? '°c' : '°f'}
            </span>
          </p>
        </div>
      </section>
      <section className="w-fit mx-auto mt-4 capitalize">
        <p className="text-white p-1 drop-shadow-md text-lg md:text-xl bg-blackBG rounded">
          {props.desc}
        </p>
      </section>
    </>
  )
}
