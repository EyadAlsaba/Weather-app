import Form from "./home/components/FormInputs.js"

export default function HomePage() {
  if(typeof window !== "undefined"){
    window.sessionStorage.setItem('configs',JSON.stringify({tz:false,tf:false,ud:false}))
  }
  return (
    <div className="w-screen h-screen bg-homePage bg-cover bg-no-repeat ">
      <Form />
    </div>
  )
}