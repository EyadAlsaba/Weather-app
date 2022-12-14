import SettingsBtn from "./SettingBtn"
import Close from "./svg/Close"
import Toggle from './Toggle'

export default function Modal() {
  function applyConfigs() {
    document.getElementById('modal').style.display = 'none'
  };

  return (
    <>
      <button id='modalBtn' onClick={() => {
        document.getElementById('modal').style.display = 'block'
      }}>
        <SettingsBtn />
      </button>

      <section id='modal' className="text-white fixed z-10 w-full h-full bg-slate-500 top-0 left-0 hidden">

        <div id='modal-content' className="flex flex-col justify-center w-[80%] lg:w-[35%] md:w-[50%] mx-auto p-5 rounded-lg relative md:top-[25%] lg:top-[15%] top-[35%] bg-slate-400 drop-shadow-lg">

          <button onClick={() => {
            document.getElementById('modal').style.display = 'none'
          }} className='mb-2 ml-[95%] hover:text-slate-800'>
            <Close />
          </button>

          <div className="flex justify-between align-middle py-2 uppercase  md:text-lg text-sm drop-shadow-lg">
            <span>timezone</span>
            <Toggle id='tz' />
          </div>

          <div className="flex justify-between align-middle py-2 uppercase  md:text-lg text-sm drop-shadow-lg">
            <span>24/12</span>
            <Toggle id='tf' />
          </div>

          <div className="flex justify-between align-middle py-2 uppercase  md:text-lg text-sm drop-shadow-lg">
            <span>°c/°f</span>
            <Toggle id='ud' />
          </div>

          <div className="w-full text-center drop-shadow-lg mt-10">
            <button onClick={() => applyConfigs()} className='bg-slate-800 p-1 tracking-wide rounded-lg hover:text-slate-800 hover:bg-white w-20'>Apply</button>
          </div>

        </div>
      </section>
    </>
  )
}

