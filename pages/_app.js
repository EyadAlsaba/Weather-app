import '../styles/globals.css'
import {SWRConfig} from 'swr'
function MyApp({ Component, pageProps }) {
  return(
    <SWRConfig value={{revalidateOnFocus:false}}>
      <Component {...pageProps}/>
    </SWRConfig>
  )
}

export default MyApp
