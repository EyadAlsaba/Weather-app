import Lottie from 'react-lottie';
import Thunderstorm from './lotties/200.json'
import Drizzle from './lotties/300.json'
import Rain from './lotties/500.json'
import Snow from './lotties/600.json'
import Mist from './lotties/701.json'
import Clear from './lotties/800.json'
import Clouds from './lotties/801.json'
import loading from './lotties/loading.json'

export default function Animation({ animationProps }) {
  if (!animationProps) return;

  const { id, w, h } = animationProps;
  let placeholder;

  id > 800 && id <= 804 ? placeholder = Clouds : null;
  id === 800 ? placeholder = Clear : null;
  id >= 701 && id <= 781 ? placeholder = Mist : null;
  id >= 600 && id <= 622 ? placeholder = Snow : null;
  id >= 500 && id <= 532 ? placeholder = Rain : null;
  id >= 300 && id <= 321 ? placeholder = Drizzle : null;
  id >= 200 && id <= 232 ? placeholder = Thunderstorm : null;
  id === 100 ? placeholder = loading : null;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: placeholder,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>
      <div id={`${placeholder}`} className="md:mx-1 bg-blackBG rounded-full p-[1px]">
        <Lottie
          options={defaultOptions}
          height={h}
          width={w}
        />
      </div>
    </>
  )
}

