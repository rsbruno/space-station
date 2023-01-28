import '@/styles/globals.css'
import 'normalize.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <section style={{ width: '100%', height: '100vh' }}>
    <Component {...pageProps} />
  </section>
}
