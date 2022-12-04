import { HeaderContainer } from './styles'

import logoImg from '../../assets/logo.svg'
import { Cart } from '../Cart'
import { useRouter } from 'next/router'
import Link from 'next/link'

export function Header() {
  const { pathname } = useRouter()

  const showCartButton = pathname !== '/success'

  return (
    <HeaderContainer>
      <div>
        <Link href={'/'}>
          <img src={logoImg.src} alt="" />
        </Link>

        {showCartButton && <Cart />}
      </div>
    </HeaderContainer>
  )
}
