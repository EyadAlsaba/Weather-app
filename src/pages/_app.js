import '../../styles/globals.css'
import { SWRConfig } from 'swr'
import { DataProvider } from '../utils/helpers'

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ revalidateOnFocus: false }}>
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </SWRConfig>
  )
}

export default MyApp
