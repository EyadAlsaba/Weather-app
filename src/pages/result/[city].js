import { useContext } from 'react';
import { DataContext } from "../../utils/helpers"
import Error from '../404'
import Image from 'next/image';


import {
  HomeBtn,
  HumidityAndPressure,
  SunInfo,
  HeaderInfo,
  Forecast,
  Animation,
  Modal,
} from '../../components'

export default function WeatherInfo() {
  const {
    cityInfo,
    cityDataError,
    oneCallDataError
  } = useContext(DataContext);

  if (cityInfo) {
    return (
      <div className='relative h-full'>
         <Image
          src={`${cityInfo.backGroundImage}`}
          alt='background image'
          objectFit='cover'
          objectPosition='center'
          className='z-[-5] brightness-90 blur-sm '
          layout='fill'
          placeholder='blur'
          blurDataURL={`${cityInfo.backgroundPlaceholder}`}
        /> 

         <HeaderInfo props={{ name: cityInfo.cityName, country: cityInfo.country, icon: cityInfo.iconSrc, temp: cityInfo.temperature, desc: cityInfo.description, unit: cityInfo.units }} />

        <div className="flex mt-8  justify-center w-fit mx-auto">
          <SunInfo props={{ sunrise: cityInfo.sunrise, sunset: cityInfo.sunset, timezone: cityInfo.timezone }} />
          <HumidityAndPressure props={{ humidity: cityInfo.humidity, pressure: cityInfo.pressure }} />
        </div>
        <section className="mt-14 h-[900px]  mx-auto">
          <div className="flex justify-center flex-col w-[90%] md:w-[75%] lg:w-[65%] mx-auto rounded-md text-white bg-blackBG px-5 ">
            {
              cityInfo && cityInfo['week-forecast'].map((day, index) => {
                return (
                  <div key={index} className={`py-4 ${index == 6 ? 'border-0' : 'border-b-2 border-slate-600'}`}>
                    <Forecast props={{ day, unit: cityInfo.units }} />
                  </div>
                )
              })
            }
          </div>
        </section>
        <section className='w-full absolute top-40'>
          <HomeBtn />
          <Modal />
        </section> 
      </div>
    )
  } else if (cityDataError || oneCallDataError) {
    return (
      <Error />
    )
  } else {
    return (
      <div className="h-full w-full bg-loadingBg">
        <div className='pt-[25%]'>
        <Animation animationProps={{ id: 100, w: 300, h: 300 }} /> 
        </div>
      </div>
    )
  }
};
