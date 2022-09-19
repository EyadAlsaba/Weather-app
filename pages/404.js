import Link from "next/link"
export default function Error() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col bg-lightBlue">
        <div className="h-fit relative top-1/2 bg-blackBG text-center py-8">
          <h3 className=" text-3xl text-red-600 uppercase">something went wrong</h3>
          <div className="mt-6 cursor-pointer">
            <Link href='/home'>
              <span className="uppercase w-fit shadow-lg hover:text-primaryBlue transition duration-500 hover:border-primaryBlue text-white border border-x-lightBlue rounded py-2 px-4 tracking-widest">
                home
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}