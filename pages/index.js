import Form from "./home/components/FormInputs.js"
import { useLocalStorage } from "../utils/handlers.js";

export default function HomePage() {
  useLocalStorage('configs', { tz: false, tf: false, ud: false });
  return (
    <div className="w-screen h-screen bg-homePage bg-cover bg-no-repeat ">
      <Form />
    </div>
  )
}