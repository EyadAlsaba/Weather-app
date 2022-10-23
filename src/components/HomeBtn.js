import Link from "next/link"
import Home from "./svg/Home"

export default function HomeBtn() {
  return (
    <Link href='/'>
      <div className="hover:cursor-pointer transition-[width] ease-linear duration-300 bg-blackBG rounded-full
      p-1 absolute right-0 bottom-0 border-[1px] border-slate-700
      md:hover:w-10 md:w-8 hover:w-8 w-6 rounded-r">
        <Home />
      </div>
    </Link>
  )
}
