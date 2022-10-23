import Settings from "./svg/Settings"

export default function SettingsBtn() {
  return (
    <div className="hover:cursor-pointer transition-[width] ease-linear duration-300 bg-blackBG rounded-full
      absolute left-0 bottom-0 p-1 border-[1px] border-slate-700
      md:hover:w-10 md:w-8 hover:w-8 w-6  rounded-l">
      <Settings />
    </div>
  )
}
