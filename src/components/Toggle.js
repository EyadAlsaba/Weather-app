import { useState } from "react";
import { getLocalStorageOrDefault } from "../utils/handlers";

export default function Toggle({ prop }) {

  const isConfiged = getLocalStorageOrDefault('configs', {})
  const [options, setoptions] = useState(isConfiged);

  if (!prop) return;

  function clickHandler() {
    const userConfig = { ...isConfiged }
    userConfig[prop.id] = !options[prop.id];
    localStorage.setItem('configs', JSON.stringify(userConfig));
    setoptions(userConfig)
    prop.setter(userConfig)
  }

  return (
    <div>
      <div className="flex">
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={options[prop.id]}
            readOnly
            onClick={() => {
              clickHandler()
            }}
          />

          <div
            className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600 drop-shadow"
          ></div>
        </label>
      </div>
    </div>
  )
}

