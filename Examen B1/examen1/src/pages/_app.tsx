import '../styles/globals.css'
import type { AppProps } from 'next/app'
///instalamos en el proyecto esto
//npm install semantic-ui-react semantic-ui-css
import "semantic-ui-css/semantic.min.css"


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
