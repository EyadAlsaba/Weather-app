import { Form } from "../components"
import { useLocalStorage } from "../utils/handlers.js";

export default function HomePage() {
  useLocalStorage('configs', { tz: false, tf: false, ud: false });
  return (
    <div className="w-full h-full bg-[url('/homePageBackground.jpg')] bg-cover bg-no-repeat ">
      <Form />
    </div>
  )
}