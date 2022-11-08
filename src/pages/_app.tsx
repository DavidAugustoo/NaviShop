import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import { globalStyles } from '../styles/global'

globalStyles();

const roboto = Roboto({
  weight: '400',
})

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default App
