import Link from "next/link"

export default function HomeIcon() {
  return (
    <Link href='/'>
      <div className="hover:cursor-pointer transition-[width] ease-linear duration-300 bg-blackBG rounded-full
      p-1 absolute right-0 bottom-0 border-[1px] border-slate-700
      md:hover:w-10 md:w-8 hover:w-8 w-6 rounded-r">
              
          <div className="flex justify-start text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-6 w-4 md:h-6 h-4 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </div>
        
        </div>
    </Link>
  )
}
