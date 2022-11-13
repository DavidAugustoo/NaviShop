import { HeaderContainer } from './styles'

import logoImg from '../../assets/logo.svg'
import { Cart } from '../Cart'
import { useRouter } from 'next/router'

export function Header() {
  const { pathname } = useRouter()

  const showCartButton = pathname !== '/success'

  return (
    <HeaderContainer>
      <img src={logoImg.src} alt="" />

      {showCartButton && <Cart />}
    </HeaderContainer>
  )
}
