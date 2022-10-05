import { useState } from "react";

export default function Toggle({prop}) {

  const isConfiged = JSON.parse(sessionStorage.getItem("configs"));
  const [options,setoptions] = useState(isConfiged);
  
  function clickHandler(prop) {
    const userConfig = JSON.parse(sessionStorage.getItem("configs"));
    userConfig[prop.id] = !options[prop.id];
    sessionStorage.setItem('configs', JSON.stringify(userConfig));
    setoptions(userConfig)
    prop.handler(userConfig)
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
                clickHandler(prop)
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
