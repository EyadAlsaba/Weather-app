import Lottie from 'react-lottie';
import Thunderstorm from './lotties/200.json'
import Drizzle from './lotties/300.json'
import Rain from './lotties/500.json'
import Snow from './lotties/600.json'
import Mist from './lotties/701.json'
import Clear from './lotties/800.json'
import Clouds from './lotties/801.json'

export default function Animation({weatherId}){
  
let placeholder;

weatherId > 800 && weatherId <= 804 ? placeholder= Clouds : null;
weatherId === 800 ? placeholder = Clear : null;
weatherId >= 701 && weatherId <= 781 ? placeholder = Mist : null;
weatherId >= 600 && weatherId <= 622 ? placeholder = Snow : null;
weatherId >= 500 && weatherId <= 532 ? placeholder = Rain : null;
weatherId >= 300 && weatherId <= 321 ? placeholder = Drizzle : null;
weatherId >= 200 && weatherId <= 232 ? placeholder = Thunderstorm : null;

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: placeholder,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return(
    <>
          <div id={`${placeholder}`} className="mx-1">
            <Lottie
              options={defaultOptions}
              height={60}
              width={60}
            />
        </div>
    </>
  )
}