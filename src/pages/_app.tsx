import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app';

globalStyles();

const roboto = Roboto({
  weight: '400',
})

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>

      <Header>
        <img src={logoImg.src} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

export default App
