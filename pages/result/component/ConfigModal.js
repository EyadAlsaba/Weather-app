import SettingsBtn from "./SettingSVG"
import Toggle from './Toggle'

export default function Modal({ prop }) {

  function applyConfigs() {
    document.getElementById('modal').style.display = 'none'
  }

  return (
    <>
      <button id='modalBtn' onClick={() => {
        document.getElementById('modal').style.display = 'block'
      }}>
        <SettingsBtn />
      </button>

      <section id='modal' className="text-white fixed z-10 w-full h-full bg-slate-500 top-0 left-0 hidden">

        <div id='modal-content' className="flex flex-col justify-center w-[80%] lg:w-[35%] md:w-[50%] mt-[50%] mx-auto p-5 rounded-lg md:mt-[25%] lg:mt-[15%] bg-slate-400 drop-shadow-lg">

          <button onClick={() => {
            document.getElementById('modal').style.display = 'none'
          }} className='mb-2 ml-[95%] hover:text-slate-800'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex justify-between align-middle py-2 uppercase  md:text-lg text-sm drop-shadow-lg">
            <span>timezone</span>
            <Toggle prop={{ id: 'tz', setter: prop.updateSession }} />
          </div>

          <div className="flex justify-between align-middle py-2 uppercase  md:text-lg text-sm drop-shadow-lg">
            <span>24/12</span>
            <Toggle prop={{ id: 'tf', setter: prop.updateSession }} />
          </div>

          <div className="flex justify-between align-middle py-2 uppercase  md:text-lg text-sm drop-shadow-lg">
            <span>°c/°f</span>
            <Toggle prop={{ id: 'ud', setter: prop.updateSession }} />
          </div>

        </div>

        <div className="w-full text-center mt-3 drop-shadow-lg">
          <button onClick={() => applyConfigs()} className='bg-slate-800 p-1 tracking-wide rounded-lg hover:text-slate-800 hover:bg-white w-20'>Apply</button>
        </div>
      </section>
    </>
  )
}