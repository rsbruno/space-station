import '@/styles/globals.css'
import 'normalize.css'
import type { AppProps } from 'next/app'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App({ Component, pageProps }: AppProps) {
  return <section style={{ width: '100%', height: '100vh' }}>
    <Component {...pageProps} />
  </section>
}
