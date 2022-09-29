import Animation from './Animation'

export default function HeaderInfo({ props }) {

  return (
    <>
      <section className="relative top-20">
        <h1 className=" bg-blackBG  text-white mx-auto p-3 rounded h-fit w-fit text-2xl  md:text-3xl tracking-normal text-center">
          {props.name} | {props.country}
        </h1>
        <div className="w-full flex justify-center pt-3 items-center">
          <Animation weatherId={props.icon}/>
          <p className="px-1 drop-shadow-md text-white w-fit text-base md:text-2xl">
            {props.temp}
            <span className="p-1 drop-shadow-md text-base md:text-2xl">°C</span>
          </p>
        </div>
      </section>
      <section className="w-full relative top-20 capitalize">
        <p className="text-white mx-auto text-center drop-shadow-md text-base md:text-xl">
          {props.desc}
        </p>
      </section>
    </>
  )
}