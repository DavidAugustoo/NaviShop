import { HeaderContainer } from './styles'

import logoImg from '../../assets/logo.svg'
import { Cart } from '../Cart'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg.src} alt="" />

      <Cart />
    </HeaderContainer>
  )
}
