import Form from "./home/components/FormInputs.js"
import { getLocalStorageOrDefault } from "../utils/handlers.js";

export default function HomePage() {
  getLocalStorageOrDefault('configs', { tz: false, tf: false, ud: false });
  return (
    <div className="w-screen h-screen bg-homePage bg-cover bg-no-repeat ">
      <Form />
    </div>
  )
}